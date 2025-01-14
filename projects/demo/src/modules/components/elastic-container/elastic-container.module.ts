import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiExpandModule, TuiLinkDirective} from '@taiga-ui/core';
import {
    TuiChevronDirective,
    TuiElasticContainerModule,
    TuiInputModule,
} from '@taiga-ui/kit';

import {ExampleTuiElasticContainerComponent} from './elastic-container.component';
import {TuiElasticContainerExample1} from './examples/1';
import {TuiElasticContainerExample2} from './examples/2';
import {TuiElasticContainerExample3} from './examples/3';
import {TuiElasticContainerExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiElasticContainerModule,
        TuiRepeatTimesDirective,
        TuiExpandModule,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiElasticContainerComponent)),
        TuiChevronDirective,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiElasticContainerComponent,
        TuiElasticContainerExample1,
        TuiElasticContainerExample2,
        TuiElasticContainerExample3,
        TuiElasticContainerExample4,
    ],
    exports: [ExampleTuiElasticContainerComponent],
})
export class ExampleTuiElasticContainerModule {}
