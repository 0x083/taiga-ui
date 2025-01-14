import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownModule} from '@taiga-ui/core';
import {TuiInputModule, TuiSwitchComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {interval, map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiDropdownModule,
        TuiInputModule,
        FormsModule,
        TuiSwitchComponent,
        PolymorpheusModule,
        NgIf,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;

    protected value = 'some data';

    protected showBigText$ = interval(3000).pipe(map(i => !(i % 2)));
}
