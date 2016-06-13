import { bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import { AppComponent } from './app.component';

bootstrap(
  AppComponent,
  [HTTP_PROVIDERS, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, HashLocationStrategy ]
 );
