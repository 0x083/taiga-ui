import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAxesComponent, TuiLineChartModule} from '@taiga-ui/addon-charts';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

import {TuiLineChartExample1} from './examples/1';
import {TuiLineChartExample2} from './examples/2';
import {TuiLineChartExample3} from './examples/3';
import {TuiLineChartExample4} from './examples/4';
import {TuiLineChartExample5} from './examples/5';
import {ExampleTuiLineChartComponent} from './line-chart.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkDirective,
        TuiHintModule,
        TuiAxesComponent,
        TuiNotificationComponent,
        TuiLineChartModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineChartComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiLineChartComponent,
        TuiLineChartExample1,
        TuiLineChartExample2,
        TuiLineChartExample3,
        TuiLineChartExample4,
        TuiLineChartExample5,
    ],
    exports: [ExampleTuiLineChartComponent],
})
export class ExampleTuiLineChartModule {}
