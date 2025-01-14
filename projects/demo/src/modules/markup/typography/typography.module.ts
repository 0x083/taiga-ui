import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

import {TypographyComponent} from './typography.component';

@NgModule({
    imports: [
        ClipboardModule,
        TuiNotificationComponent,
        TuiLinkDirective,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(TypographyComponent)),
    ],
    declarations: [TypographyComponent],
    exports: [TypographyComponent],
})
export class TypographyModule {}
