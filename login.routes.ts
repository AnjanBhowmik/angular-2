import { provideRouter, RouterConfig }  from '@angular/router';
import {LoginComponent} from './login.component';
import {AppComponent} from './app.component';

export const LoginRoutes: RouterConfig = 
[   {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    }
];
// [{
//     path:'',
//     children: [
//        // { path:'', component:AppComponent},
//         { path:'', component:LoginComponent}
//     ]
// },{
//     path:'login',
//     component:LoginComponent
//  }
//  ]
