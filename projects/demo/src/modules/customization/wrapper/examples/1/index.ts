import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
    TuiButtonDirective,
    TuiLabelDirective,
} from '@taiga-ui/core';
import {
    TuiCheckboxComponent,
    tuiCheckboxOptionsProvider,
    TuiInputModule,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-wrapper-example-1',
    imports: [
        TuiInputModule,
        FormsModule,
        TuiLabelDirective,
        TuiCheckboxComponent,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
            useValue: {
                appearance: 'material-textfield',
            },
        },
        tuiCheckboxOptionsProvider({
            appearance: el =>
                el.checked || el.indeterminate
                    ? 'material-checkbox-on'
                    : 'material-checkbox-off',
        }),
    ],
})
export class TuiWrapperExample1 {
    protected value = '';
    protected checkbox = false;
}
