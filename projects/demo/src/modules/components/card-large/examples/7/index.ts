import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiDataListModule,
    TuiDropdownModule,
    TuiIconComponent,
    TuiLinkDirective,
    TuiSurfaceDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {
    TuiCardLargeDirective,
    TuiCellDirective,
    TuiHeaderDirective,
} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardLargeDirective,
        TuiDropdownModule,
        TuiRepeatTimesDirective,
        TuiAvatarComponent,
        TuiIconComponent,
        TuiDataListModule,
        NgForOf,
        TuiCellDirective,
        TuiLinkDirective,
        TuiAppearanceDirective,
        TuiSurfaceDirective,
        TuiHeaderDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
