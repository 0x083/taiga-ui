import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_PREVIEW_ICONS} from '@taiga-ui/addon-preview/tokens';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TUI_PAGINATION_TEXTS} from '@taiga-ui/kit';

import {TuiPreviewActionDirective} from '../preview-action/preview-action.directive';

@Component({
    standalone: true,
    selector: 'tui-preview-pagination',
    imports: [NgIf, AsyncPipe, TuiButtonDirective, TuiPreviewActionDirective],
    templateUrl: './preview-pagination.template.html',
    styleUrls: ['./preview-pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewPaginationComponent {
    @Input()
    public length = 1;

    @Input()
    public index = 0;

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    protected readonly icons = inject(TUI_PREVIEW_ICONS);
    protected readonly texts$ = inject(TUI_PAGINATION_TEXTS);

    @HostListener('document:keydown.arrowRight.prevent', ['1'])
    @HostListener('document:keydown.arrowLeft.prevent', ['-1'])
    public onArrowClick(step: number): void {
        this.updateIndex(tuiClamp(this.index + step, 0, this.length - 1));
    }

    protected get leftButtonDisabled(): boolean {
        return this.index === 0;
    }

    protected get rightButtonDisabled(): boolean {
        return this.index === this.length - 1;
    }

    private updateIndex(index: number): void {
        if (this.index === index) {
            return;
        }

        this.index = index;
        this.indexChange.emit(index);
    }
}
