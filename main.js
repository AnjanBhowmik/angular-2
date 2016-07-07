"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var login_service_1 = require('./login.service');
var login_component_1 = require('./login.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    login_component_1.LoginComponent,
    http_1.HTTP_PROVIDERS,
    login_service_1.LoginService,
    app_routes_1.APP_ROUTER_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map