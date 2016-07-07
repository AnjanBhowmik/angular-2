"use strict";
var login_component_1 = require('./login.component');
exports.LoginRoutes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
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
//# sourceMappingURL=login.routes.js.map