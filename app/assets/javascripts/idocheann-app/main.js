"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, router_deprecated_1.ROUTER_DIRECTIVES, common_1.HashLocationStrategy]);
//# sourceMappingURL=main.js.map