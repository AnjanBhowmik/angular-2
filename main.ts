import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {LoginService} from './login.service';
import {LoginComponent} from './login.component'

bootstrap(AppComponent, [
  LoginComponent,
  HTTP_PROVIDERS,
  LoginService,
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));