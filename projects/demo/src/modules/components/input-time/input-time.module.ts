import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDropdownModule,
    TuiHintModule,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiInputTimeModule,
    TuiSwitchComponent,
    TuiUnfinishedValidatorModule,
} from '@taiga-ui/kit';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputTimeExample1} from './examples/1';
import {TuiInputTimeExample2} from './examples/2';
import {TuiInputTimeExample3} from './examples/3';
import {TuiInputTimeExample4} from './examples/4';
import {TuiInputTimeExample5} from './examples/5';
import {TuiInputTimeExample6} from './examples/6';
import {ExampleTuiInputTimeComponent} from './input-time.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputTimeModule,
        TuiLinkDirective,
        InheritedDocumentationModule,
        TuiButtonDirective,
        TuiDropdownModule,
        TuiTextfieldControllerModule,
        TuiNotificationComponent,
        TuiHintModule,
        TuiSwitchComponent,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputTimeComponent)),
        TuiUnfinishedValidatorModule,
    ],
    declarations: [
        ExampleTuiInputTimeComponent,
        TuiInputTimeExample1,
        TuiInputTimeExample2,
        TuiInputTimeExample3,
        TuiInputTimeExample4,
        TuiInputTimeExample5,
        TuiInputTimeExample6,
    ],
    exports: [ExampleTuiInputTimeComponent],
})
export class ExampleTuiInputTimeModule {}
