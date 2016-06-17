import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Router} from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CharacterListComponent } from './components/character_list/character_list.component';
import { CharacterDetailsComponent } from './components/character_details/character_details.component';
import { CharacterService } from './providers/character.service';

import { RootListComponent } from './components/root_list/root_list.component';
import { RootDetailsComponent } from './components/root_details/root_details.component';
import { RootService } from './providers/root.service';

@Component({
  selector: 'idocheann-app',
  template: `
    <a [routerLink]="['Characters']">Characters</a>
    <a [routerLink]="['Roots']">Roots</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, CharacterListComponent, RootListComponent, RouterLink],
  providers: [ROUTER_PROVIDERS, CharacterService, RootService]
})

 @RouteConfig([
    {
      path: '/characters',
      name: 'Characters',
      component: CharacterListComponent
    },
    {
      path: '/characters/:id',
      name: 'Character',
      component: CharacterDetailsComponent
    },
    {
      path: '/roots/:id',
      name: 'Root',
      component: RootDetailsComponent
    },
    {
      path: '/roots',
      name: 'Roots',
      component: RootListComponent
    }
  ])



export class AppComponent {
  constructor(public router: Router) {
  }
}
