import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NativeInputPO} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiPaymentSystem} from '../../../enums/payment-system';
import {TuiInputCardGroupedComponent} from '../input-card-grouped.component';
import {TuiInputCardGroupedModule} from '../input-card-grouped.module';

describe('InputCardGrouped', () => {
    @Component({
        template: `
            <tui-input-card-grouped
                [formControl]="control"
                (binChange)="onBinChange($event)"
            ></tui-input-card-grouped>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCardGroupedComponent, {static: true})
        component: TuiInputCardGroupedComponent;

        control = new FormControl('');

        onBinChange = jasmine.createSpy('bin');
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let inputCardPO: NativeInputPO;
    let inputExpirePO: NativeInputPO;
    let inputCVCPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCardGroupedModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputCardPO = new NativeInputPO(fixture, 'tui-input-card-grouped__card');
        inputExpirePO = new NativeInputPO(fixture, 'tui-input-card-grouped__expire');
        inputCVCPO = new NativeInputPO(fixture, 'tui-input-card-grouped__cvc');

        fixture.whenStable().then(() => {
            done();
        });
    });

    it('Clear resets control to null', () => {
        testComponent.control.setValue({
            card: '123',
            expire: '12/12',
            cvc: '321',
        });
        testComponent.component.clear();

        expect(testComponent.control.value).toBeNull();
    });

    describe('Card number', () => {
        describe('binChange', () => {
            it('Less than 6 digits entered', () => {
                setCard('12345');

                expect(testComponent.onBinChange).not.toHaveBeenCalled();
            });

            it('6 and more digits entered', () => {
                setCard('123456789');

                expect(testComponent.onBinChange).toHaveBeenCalledWith('123456');
            });

            it('Value has changed, first 6 digits are the same', () => {
                setCard('123456789');
                testComponent.onBinChange.calls.reset();
                setCard('123456987');

                expect(testComponent.onBinChange).not.toHaveBeenCalled();
            });

            it('Value has changed, first 6 digits have changed', () => {
                setCard('123456789');
                testComponent.onBinChange.calls.reset();
                setCard('654321789');

                expect(testComponent.onBinChange).toHaveBeenCalledWith('654321');
            });

            it('Value has changed, now it has less than 6 digits', () => {
                setCard('123456789');
                testComponent.onBinChange.calls.reset();
                setCard('123');

                expect(testComponent.onBinChange).toHaveBeenCalledWith(null);
            });
        });

        describe('paymentSystem', () => {
            it('visa', () => {
                setCard('4111 1111 1111 1111');

                expect(testComponent.component.paymentSystem).toBe(TuiPaymentSystem.Visa);
            });

            it('electron', () => {
                setCard('4917300800000000');

                expect(testComponent.component.paymentSystem).toBe(
                    TuiPaymentSystem.Electron,
                );
            });

            it('mir', () => {
                setCard('2200654321000000');

                expect(testComponent.component.paymentSystem).toBe(TuiPaymentSystem.Mir);
            });

            it('mastercard', () => {
                setCard('5500 0000 0000 0004');

                expect(testComponent.component.paymentSystem).toBe(
                    TuiPaymentSystem.Mastercard,
                );
            });

            it('maestro', () => {
                setCard('6759649826438453');

                expect(testComponent.component.paymentSystem).toBe(
                    TuiPaymentSystem.Maestro,
                );
            });
        });

        describe('Formatting', () => {
            it('13', done => {
                testFormat(done, '4000000000000', '4000 0000 0000 0');
            });

            it('14', done => {
                testFormat(done, '40000000000000', '4000 0000 0000 00');
            });

            it('15', done => {
                testFormat(done, '400000000000000', '4000 0000 0000 000');
            });

            it('16', done => {
                testFormat(done, '4000000000000000', '4000 0000 0000 0000');
            });

            it('17', done => {
                testFormat(done, '40000000000000000', '4000 0000 0000 0000 0');
            });

            it('18', done => {
                testFormat(done, '400000000000000000', '4000 0000 0000 0000 00');
            });

            it('19', done => {
                testFormat(done, '4000000000000000000', '4000 0000 0000 0000 000');
            });
        });
    });

    describe('Expiration date', () => {
        it('keeps correct value as is', () => {
            inputExpirePO.sendText('12/12');

            expect(getExpire()).toBe('12/12');
            expect(inputExpirePO.value).toBe('12/12');
        });

        describe('fixes incorrect value', () => {
            it('replaces 50/08 with 05/08', () => {
                inputExpirePO.sendText('50/08');

                expect(getExpire()).toBe('05/08');
                expect(inputExpirePO.value).toBe('05/08');
            });

            it('replaces 14/08 with 12/08', () => {
                inputExpirePO.sendText('14/08');

                expect(getExpire()).toBe('12/08');
                expect(inputExpirePO.value).toBe('12/08');
            });

            it('replaces 00/08 with 01/08', () => {
                inputExpirePO.sendText('00/08');

                expect(getExpire()).toBe('01/08');
                expect(inputExpirePO.value).toBe('01/08');
            });
        });
    });

    describe('Focus', () => {
        it('focus remains in card input when invalid card is entered', () => {
            inputCardPO.focus();
            inputCardPO.sendText('8888888888889999');

            expect(inputCardPO.focused).toBe(true);
        });

        it('focuses expire input when valid card is entered', () => {
            inputCardPO.focus();
            inputCardPO.sendText('563693784073');

            expect(inputExpirePO.focused).toBe(true);
        });

        it('focus remains in expire input when date is not fully entered', () => {
            inputCardPO.focus();
            inputCardPO.sendText('563693784073');
            inputExpirePO.sendText('12/2');

            expect(inputExpirePO.focused).toBe(true);
        });

        it('focuses cvc input when expiration date is fully entered', () => {
            inputCardPO.focus();
            inputCardPO.sendText('563693784073');
            inputExpirePO.sendText('12/21');

            expect(inputCVCPO.focused).toBe(true);
        });
    });

    function testFormat(done: DoneFn, value: string, formatted: string) {
        setCard(value);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getCard()).toBe(formatted);
                done();
            });
        });
    }

    function getCard(): string {
        return testComponent.component.nativeFocusableElement!.value;
    }

    function setCard(card: string) {
        testComponent.control.setValue({
            card,
        });
    }

    function getExpire(): string {
        return testComponent.control.value.expire;
    }
});
