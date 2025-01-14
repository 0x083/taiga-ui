import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiSliderModule} from '@taiga-ui/kit/components/slider';

import {TuiRangeComponent} from './range.component';
import {TuiRangeChangeDirective} from './range-change.directive';

@NgModule({
    imports: [CommonModule, TuiSliderModule, FormsModule],
    declarations: [TuiRangeComponent, TuiRangeChangeDirective],
    exports: [TuiRangeComponent, TuiRangeChangeDirective],
})
export class TuiRangeModule {}
