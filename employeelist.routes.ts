import { provideRouter, RouterConfig }  from '@angular/router';
import { EmployeelistComponent } from './employeelist.component'

export const EmployeelistRoutes: RouterConfig = [
   
    {
        path:'EmployeeList',
        component:EmployeelistComponent
    }
];
