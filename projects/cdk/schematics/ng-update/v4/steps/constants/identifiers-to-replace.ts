import type {ReplacementIdentifierMulti} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifierMulti[] = [
    {
        from: {name: 'TuiActiveZoneModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiActiveZoneDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAutoFocusModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiAutoFocusDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiFocusTrapModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiFocusTrapDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiElementModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiElementDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiForModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiForDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiHoveredModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiHoveredDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiItemModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiItemDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiPanModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPanDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiRepeatTimesModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiRepeatTimesDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiSwipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiSwipeDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiValueChangesModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValueChangesDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiZoomModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiZoomDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'ALWAYS_TRUE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_TRUE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'ALWAYS_FALSE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_FALSE_HANDLER', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TUI_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TUI_NON_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_NON_DIGIT_REGEXP', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TUI_NON_DIGITS_REGEXP', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TUI_NON_DIGITS_REGEXP', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAlertModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiAlertDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiNotificationModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiNotificationComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCalendarModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiCalendarComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatDatePipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatDatePipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatNumberPipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatNumberPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFormatPhonePipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFormatPhonePipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiMonthPipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiMonthPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiThumbnailCardModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiThumbnailCardComponent',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiCardModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {
            name: 'TuiThumbnailCardComponent',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiCardComponent', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {
            name: 'TuiThumbnailCardComponent',
            moduleSpecifier: '@taiga-ui/addon-commerce',
        },
    },
    {
        from: {name: 'TuiBadgeModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiBadgeDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgeModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiBadgeDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiClickOutsideModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiClickOutsideDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiCopyProcessorModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiCopyProcessorDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'AbstractTuiValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiControlValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValueTransformer', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiFilterPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiFilterPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiIsPresentPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiIsPresentPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiKeysPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiKeysPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiMapperPipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiMapperPipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiReplacePipeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiReplacePipe', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiCheckboxModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCheckboxComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSwipeActionsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwipeActionsComponent', moduleSpecifier: '@taiga-ui/addon-mobile'},
    },
    {
        from: {name: 'TuiRadioModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRadioComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAvatarModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiToggleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSwitchComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaDirective', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiBadgedContentComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'TuiBadgeNotificationModule',
            moduleSpecifier: '@taiga-ui/experimental',
        },
        to: {name: 'TuiBadgeNotificationComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiBadgedContentModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiBadgedContentComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiTextAreaComponent', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiTextareaComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiInputCountModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiInputNumberModule', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'ArrayElement', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiArrayElement', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'DocumentationPropertyType',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocumentationPropertyType',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'RawContentLoader',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiRawContentLoader',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiContextWithImplicit',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'TuiContext',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {name: 'TUI_SCROLL_REF', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_SCROLL_REF', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiScrollbarModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiScrollbarComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiGroupModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiGroupDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'AbstractTuiPortalHostComponent', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortalsComponent', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'AbstractTuiPortalService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPortalService', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'AbstractTuiDialogService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiPopoverService', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiDropdownHostComponent', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownsComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDropdownPortalService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownService', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalDirective', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortalDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiPortalModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDropdownPortalDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiDroppableModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiDroppableDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiValidatorModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiValidatorDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {name: 'TuiAmountModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAmountPipe', moduleSpecifier: '@taiga-ui/addon-commerce'},
    },
    {
        from: {name: 'TuiMoneyModule', moduleSpecifier: '@taiga-ui/addon-commerce'},
        to: {name: 'TuiAmountPipe', moduleSpecifier: '@taiga-ui/addon-commerce'},
    },
    {
        from: {name: 'TuiResizeModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {
            name: 'ResizeObserverDirective',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
    },
    {
        from: {name: 'TuiResizeService', moduleSpecifier: '@taiga-ui/cdk'},
        to: {
            name: 'ResizeObserverService',
            moduleSpecifier: '@ng-web-apis/resize-observer',
        },
    },
    {
        from: {name: 'TuiPresentModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiPresentDirective',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiEditorModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditorComponent', moduleSpecifier: '@tinkoff/tui-editor'},
    },
    {
        from: {name: 'TuiEditorSocketModule', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {name: 'TuiEditorSocketComponent', moduleSpecifier: '@tinkoff/tui-editor'},
    },
    {
        from: {name: 'defaultEditorExtensions', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {
            name: 'TUI_EDITOR_DEFAULT_EXTENSIONS',
            moduleSpecifier: '@tinkoff/tui-editor',
        },
    },
    {
        from: {name: 'defaultEditorTools', moduleSpecifier: '@tinkoff/tui-editor'},
        to: {
            name: 'TUI_EDITOR_DEFAULT_TOOLS',
            moduleSpecifier: '@tinkoff/tui-editor',
        },
    },
    {
        from: {name: 'TuiFadeModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiFadeDirective',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiInitialsModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiInitialsPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFallbackSrcModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiFallbackSrcPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiAutoColorModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiAutoColorPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'tuiStringHashToHsl', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'tuiStringHashToHsl', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiIconModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiIconComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCheckboxLabeledModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiLabelComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiHostedDropdownModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiDropdownModule', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiTitleModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiTitleDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiHeaderModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiHeaderDirective', moduleSpecifier: '@taiga-ui/layout'},
    },
    {
        from: {name: 'TuiPinModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiPinComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiCompassModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCompassComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRatingModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiRatingComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiRatingModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiRatingComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiSurfaceModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiSurfaceDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiFlagPipeModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiFlagPipe', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiSvgModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiSvgComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiRootModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiRootComponent', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiCellModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiCellDirective', moduleSpecifier: '@taiga-ui/layout'},
    },
    {
        from: {name: 'TuiChipModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {name: 'TuiChipDirective', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {
            name: 'TuiTablePaginationModule',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'TuiTablePaginationComponent',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {name: 'TuiCardModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: [
            {name: 'TuiCardLargeDirective', moduleSpecifier: '@taiga-ui/layout'},
            {name: 'TuiCardMediumDirective', moduleSpecifier: '@taiga-ui/layout'},
        ],
    },
    {
        from: {name: 'TuiMarkerIconModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiAvatarComponent', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TUI_PROMPT', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TUI_CONFIRM', moduleSpecifier: '@taiga-ui/kit'},
    },
    {
        from: {name: 'TuiActionModule', moduleSpecifier: '@taiga-ui/kit'},
        to: [
            {name: 'TuiCardLargeDirective', moduleSpecifier: '@taiga-ui/layout'},
            {name: 'TuiSurfaceDirective', moduleSpecifier: '@taiga-ui/core'},
        ],
    },
    {
        from: {name: 'TuiLinkModule', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiLinkDirective', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiInteractiveStateT', moduleSpecifier: '@taiga-ui/core'},
        to: {name: 'TuiInteractiveState', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {name: 'TuiButtonModule', moduleSpecifier: '@taiga-ui/kit'},
        to: {
            name: 'TuiButtonDirective',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiButtonModule', moduleSpecifier: '@taiga-ui/experimental'},
        to: {
            name: 'TuiButtonDirective',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {name: 'TuiLetModule', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TuiLetDirective', moduleSpecifier: '@taiga-ui/cdk'},
    },
    {
        from: {
            name: 'TuiAccountModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiAccountComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiPanelModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiPanelComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiBackModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiBackComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiBackModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiBlockerComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiConfirmDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirmDialogComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiConfirmationDialog',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiConfirmationComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemDetailsModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemDetailsComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemDialogComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiFeedItemActionModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiFeedItemActionComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiErrorPageModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiErrorPageComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiPromptDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiPromptDialogComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiProprietaryRoot2023Module',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiProprietaryRoot2023Component',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiSignalModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiSignalComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiSubscriptionBadgeModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiSubscriptionBadgeComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiNavigationModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: {
            name: 'TuiNavigationComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiEmailsPipeModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiEmailsPipe',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiIllustrationsModule',
            moduleSpecifier: '@taiga-ui/proprietary-icons',
        },
        to: {
            name: 'TuiIllustrationModePipe',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'ProductsNavigationModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: {
            name: 'ProductsNavigationComponent',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiDropdownSecureModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiDropdownSecureDirective',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiDropdownSecureComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiProductMenuModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiProductMenuDirective',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiProductMenuComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiProductMenuButtonComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiCardLogoModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiCardLogoDirective',
            moduleSpecifier: '@taiga-ui/proprietary',
        },
    },
    {
        from: {
            name: 'TuiErrorDialogModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: [
            {
                name: 'TuiErrorDialogComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiErrorDialogHeaderComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiTimecodePlayerModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: [
            {
                name: 'TuiTimecodePlayerComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimecodeComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimecodeProgressComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiTimelineStepsModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: [
            {
                name: 'TuiTimelineStepsComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimelineStepComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiTimelineStepDirective',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiProfileMenuModule',
            moduleSpecifier: '@taiga-ui/proprietary-navigation',
        },
        to: [
            {
                name: 'TuiProfileMenuComponent',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
            {
                name: 'TuiProfileMenuDirective',
                moduleSpecifier: '@taiga-ui/proprietary',
            },
        ],
    },
    {
        from: {
            name: 'TuiMobileCalendarModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiMobileCalendarComponent',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
    {
        from: {
            name: 'TuiBarModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiBarComponent',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiArcChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiArcChartComponent',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiAxesModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiAxesComponent',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiTableFiltersModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiTableFilters',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {
            name: 'TuiReorderModule',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'TuiReorderComponent',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {
            name: 'TuiArrowModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiArrowComponent',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiTableBarsHostModule',
            moduleSpecifier: '@taiga-ui/addon-tablebars',
        },
        to: {
            name: 'TuiTableBarsHostComponent',
            moduleSpecifier: '@taiga-ui/addon-tablebars',
        },
    },
    {
        from: {
            name: 'TuiTableModule',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
        to: {
            name: 'TuiTable',
            moduleSpecifier: '@taiga-ui/addon-table',
        },
    },
    {
        from: {
            name: 'TuiBarChartModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiBarChartComponent',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiBarSetModule',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
        to: {
            name: 'TuiBarSetComponent',
            moduleSpecifier: '@taiga-ui/addon-charts',
        },
    },
    {
        from: {
            name: 'TuiDocCopyModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocCopyComponent',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiAppBarModule',
            moduleSpecifier: '@taiga-ui/layout',
        },
        to: {
            name: 'TuiAppBar',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiPreviewModule',
            moduleSpecifier: '@taiga-ui/addon-preview',
        },
        to: {
            name: 'TuiPreview',
            moduleSpecifier: '@taiga-ui/addon-preview',
        },
    },
    {
        from: {
            name: 'TuiBlockStatusModule',
            moduleSpecifier: '@taiga-ui/layout',
        },
        to: {
            name: 'TuiBlockStatus',
            moduleSpecifier: '@taiga-ui/layout',
        },
    },
    {
        from: {
            name: 'TuiTabBarModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'TuiTabBar',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
    },
];
