import { provideRouter, RouterConfig } from '@angular/router';
import {LoginRoutes} from './login.routes'
import {EmployeelistRoutes} from './employeelist.routes'
import {EmployeeresourceRoutes} from './employeeresource.routes'
import {FaqRoutes} from './faq.routes'


export const routes: RouterConfig = [
    ...LoginRoutes,
    ...EmployeelistRoutes,
    ...EmployeeresourceRoutes,
    ...FaqRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];