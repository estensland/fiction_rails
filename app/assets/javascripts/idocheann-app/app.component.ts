import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Router} from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { CharacterService } from './characters/character.service';

import { RootsComponent } from './roots/roots.component';
import { RootService } from './roots/root.service';

@Component({
  selector: 'idocheann-app',
  template: `
    <h1>Idocheann</h1>
    <a [routerLink]="['Characters']">Characters</a>
    <router-outlet></router-outlet>
  `,
  directives: [CharactersComponent, RootsComponent, RouterLink],
  providers: [CharacterService, RootService]
})

 @RouteConfig([
    {
      path: '/characters',
      name: 'Characters',
      component: CharactersComponent
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
