import {isPlatformBrowser, LocationStrategy, PathLocationStrategy} from '@angular/common';
import type {ApplicationConfig} from '@angular/core';
import {
    importProvidersFrom,
    inject,
    PLATFORM_ID,
    provideZoneChangeDetection,
} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, type UrlTree, withInMemoryScrolling} from '@angular/router';
import {environment} from '@demo/environments/environment';
import {SESSION_STORAGE} from '@ng-web-apis/common';
import {
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    TUI_DOC_TYPE_REFERENCE_HANDLER,
    TUI_DOC_URL_STATE_HANDLER,
    tuiDocExampleOptionsProvider,
    type TuiDocSourceCodePathOptions,
    tuiSortPages,
} from '@taiga-ui/addon-doc';
import {TUI_BASE_HREF, TUI_IS_E2E, TUI_IS_PLAYWRIGHT} from '@taiga-ui/cdk';
import {
    TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    TUI_DROPDOWN_HOVER_OPTIONS,
    TUI_HINT_DEFAULT_OPTIONS,
    TUI_HINT_OPTIONS,
    TUI_SANITIZER,
    TuiDialogModule,
} from '@taiga-ui/core';
import {type TuiLanguageName, tuiLanguageSwitcher} from '@taiga-ui/i18n';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';

import {SEE_ALSO_GROUPS} from './app.const';
import {ROUTES} from './app.routes';
import {TUI_DEFAULT_TABS} from './app.tabs';
import {LOGO_CONTENT} from './logo/logo.component';
import {metrikaOptionsProvider} from './metrika/metrika.service';
import {pages} from './pages';
import {TuiStackblitzService} from './stackblitz/stackblitz.service';
import {exampleContentProcessor} from './utils';

export const config: ApplicationConfig = {
    providers: [
        provideAnimations(),
        importProvidersFrom(TuiDialogModule, TuiPushModule),
        provideRouter(
            ROUTES,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        NG_EVENT_PLUGINS,
        Title,
        {
            provide: TUI_IS_PLAYWRIGHT,
            useFactory: () => Boolean(inject(SESSION_STORAGE).getItem('playwright')),
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useFactory: () => {
                const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

                return {
                    coreLibraryLoader: async () => import('highlight.js/lib/core'),
                    lineNumbersLoader: async () =>
                        // SSR ReferenceError: window is not defined
                        isBrowser
                            ? import('ngx-highlightjs/line-numbers')
                            : Promise.resolve(),
                    languages: {
                        typescript: async () =>
                            import('highlight.js/lib/languages/typescript'),
                        less: async () => import('highlight.js/lib/languages/less'),
                        xml: async () => import('highlight.js/lib/languages/xml'),
                    },
                };
            },
        },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        {
            provide: TUI_DOC_SOURCE_CODE,
            useValue: ({
                type,
                path,
                header,
                package: pkg,
            }: TuiDocSourceCodePathOptions) => {
                const link =
                    'https://github.com/taiga-family/taiga-ui/tree/main/projects';

                if (!pkg) {
                    return null;
                }

                if (path) {
                    return `${link}/${path}`;
                }

                return `${link}/${pkg.toLowerCase()}/${type.toLowerCase()}/${(
                    header[0].toLowerCase() + header.slice(1)
                ).replaceAll(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
            },
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: TUI_DOC_TITLE,
            useValue: 'Taiga UI: ',
        },
        {
            provide: TUI_DOC_PAGES,
            useValue: tuiSortPages(
                pages,
                new Set(['Documentation', 'Foundations', 'Icons']),
            ),
        },
        {
            provide: TUI_DOC_SEE_ALSO,
            useValue: SEE_ALSO_GROUPS,
        },
        {
            provide: TUI_DOC_DEFAULT_TABS,
            useValue: TUI_DEFAULT_TABS,
        },
        {
            provide: TUI_DOC_LOGO,
            useValue: LOGO_CONTENT,
        },
        {
            provide: TUI_DOC_CODE_EDITOR,
            useClass: TuiStackblitzService,
        },
        {
            provide: TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
            useValue: exampleContentProcessor,
        },
        {
            provide: TUI_HINT_OPTIONS,
            useFactory: () =>
                inject(TUI_IS_E2E)
                    ? {...TUI_HINT_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                    : TUI_HINT_DEFAULT_OPTIONS,
        },
        {
            provide: TUI_DROPDOWN_HOVER_OPTIONS,
            useFactory: () =>
                inject(TUI_IS_E2E)
                    ? {...TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                    : TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
        },
        {
            provide: TUI_DOC_URL_STATE_HANDLER,
            deps: [TUI_BASE_HREF],
            useFactory: (baseHref: string) => (tree: UrlTree) =>
                String(tree).replace(baseHref, ''),
        },
        {
            provide: TUI_DOC_TYPE_REFERENCE_HANDLER,
            useValue: (type: string) => {
                switch (type) {
                    case 'any':
                    case 'null':
                    case 'unknown':
                    case 'undefined':
                    case 'boolean':
                    case 'string':
                    case 'void':
                    case 'number':
                    case 'Map':
                    case 'Set':
                        return null;
                    case 'CustomEvent':
                    case 'Element':
                        return `https://developer.mozilla.org/en-US/docs/Web/API/${type}`;
                    case 'PolymorpheusContent':
                        return 'https://github.com/taiga-family/ng-polymorpheus';
                    case 'TrackByFunction':
                        return 'https://angular.dev/api/core/TrackByFunction';
                    case 'SafeResourceUrl':
                        return 'https://angular.dev/api/platform-browser/SafeResourceUrl';
                    default:
                        return `https://github.com/search?q=%2F%28enum%7Ctype%7Cinterface%7Cclass%7Cfunction%7Cconst%29+${type}%28%3C%7C%5Cs%29%2F+language%3ATypeScript+org%3Ataiga-family&type=code`;
                }
            },
        },
        tuiDocExampleOptionsProvider({fullsize: false}),
        metrikaOptionsProvider({id: environment.ym}),
        tuiLanguageSwitcher(
            async (language: TuiLanguageName): Promise<unknown> =>
                import(
                    /* webpackMode: "lazy" */
                    /* webpackChunkName: "i18n-lazy-" */
                    `dist/i18n/esm2022/languages/${language}`
                ),
        ),
        provideZoneChangeDetection({
            eventCoalescing: false,
            runCoalescing: false,
        }),
    ],
};
