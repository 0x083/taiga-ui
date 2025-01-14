import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {TuiFormatCardModule} from '@taiga-ui/addon-commerce/pipes';
import {
    TuiActiveZoneDirective,
    TuiAutoFocusDirective,
    TuiLetDirective,
    TuiMapperPipe,
} from '@taiga-ui/cdk';
import {TuiDropdownModule, TuiSvgComponent, TuiWrapperModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        ResizeObserverModule,
        CommonModule,
        FormsModule,
        MaskitoDirective,
        TuiSvgComponent,
        TuiWrapperModule,
        TuiActiveZoneDirective,
        TuiMapperPipe,
        TuiDropdownModule,
        PolymorpheusModule,
        TuiLetDirective,
        TuiFormatCardModule,
        TuiAutoFocusDirective,
    ],
    declarations: [TuiInputCardGroupedComponent],
    exports: [TuiInputCardGroupedComponent],
})
export class TuiInputCardGroupedModule {}
