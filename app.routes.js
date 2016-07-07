"use strict";
var router_1 = require('@angular/router');
var login_routes_1 = require('./login.routes');
var employeelist_routes_1 = require('./employeelist.routes');
var employeeresource_routes_1 = require('./employeeresource.routes');
var faq_routes_1 = require('./faq.routes');
exports.routes = login_routes_1.LoginRoutes.concat(employeelist_routes_1.EmployeelistRoutes, employeeresource_routes_1.EmployeeresourceRoutes, faq_routes_1.FaqRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map