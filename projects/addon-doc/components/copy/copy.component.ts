import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TUI_FALSE_HANDLER, tuiPure} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

const COPIED_TIMEOUT = 1500;

@Component({
    standalone: true,
    selector: 'tui-doc-copy',
    imports: [NgIf, AsyncPipe, TuiButtonDirective],
    templateUrl: './copy.template.html',
    styleUrls: ['./copy.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCopyComponent {
    private readonly copy$ = new Subject<void>();

    protected readonly texts$ = inject(TUI_COPY_TEXTS);

    @tuiPure
    protected get copied$(): Observable<boolean> {
        return this.copy$.pipe(
            switchMap(() =>
                timer(COPIED_TIMEOUT).pipe(map(TUI_FALSE_HANDLER), startWith(true)),
            ),
        );
    }

    protected onClick(): void {
        this.copy$.next();
    }
}
