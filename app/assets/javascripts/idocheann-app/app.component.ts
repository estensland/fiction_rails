import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Router} from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character.component';
import { CharacterService } from './characters/character.service';

import { RootsComponent } from './roots/roots.component';
import { RootService } from './roots/root.service';

@Component({
  selector: 'idocheann-app',
  template: `
    <a [routerLink]="['Characters']">Characters</a>
    <a [routerLink]="['Roots']">Roots</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, CharactersComponent, RootsComponent, RouterLink],
  providers: [ROUTER_PROVIDERS, CharacterService, RootService]
})

 @RouteConfig([
    {
      path: '/characters',
      name: 'Characters',
      component: CharactersComponent
    },
    {
      path: '/characters/:id',
      name: 'Character',
      component: CharacterComponent
    },
    {
      path: '/roots',
      name: 'Roots',
      component: RootsComponent
    }
  ])



export class AppComponent {
  constructor(public router: Router) {
  }
}
