import { provideRouter, RouterConfig }  from '@angular/router';
import { FaqComponent } from './faq.component'

export const FaqRoutes: RouterConfig = [
   
    {
        path:'faq',
        component:FaqComponent
    }
];