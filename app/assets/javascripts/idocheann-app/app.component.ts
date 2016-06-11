import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';


import { CharactersComponent } from './characters/characters.component';
import { CharacterService } from './characters/character.service';

@Component({
  selector: 'idocheann-app',
  template: `
    <h1>Idocheann</h1>
    <characters></characters>
  `,
  directives: [CharactersComponent],
  providers: [CharacterService]
})

 @RouteConfig([
    {
      path: '/characters',
      name: 'Characters',
      component: CharactersComponent,
      useAsDefault: true
    }/*,
    {
      path: '/roots',
      name: 'Roots',
      component: RootsComponent,
    }*/
  ])




export class AppComponent { }
