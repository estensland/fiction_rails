import { Component } from '@angular/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Router} from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { CharacterListComponent } from './components/character_list/character_list.component';
import { CharacterLinkComponent } from './components/character_link/character_link.component';
import { CharacterDetailsComponent } from './components/character_details/character_details.component';
import { CharacterService } from './providers/character.service';

import { HouseListComponent } from './components/house_list/house_list.component';
import { HouseDetailsComponent } from './components/house_details/house_details.component';
import { HouseService } from './providers/house.service';

import { RealmListComponent } from './components/realm_list/realm_list.component';
import { RealmDetailsComponent } from './components/realm_details/realm_details.component';
import { RealmService } from './providers/realm.service';

import { RootListComponent } from './components/root_list/root_list.component';
import { RootDetailsComponent } from './components/root_details/root_details.component';
import { RootService } from './providers/root.service';



@Component({
  selector: 'idocheann-app',
  template: `
    <a [routerLink]="['Characters']">Characters</a>
    <a [routerLink]="['Roots']">Roots</a>
    <a [routerLink]="['Houses']">Houses</a>
    <a [routerLink]="['Realms']">Realms</a>
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
    },
    {
      path: '/houses/:id',
      name: 'House',
      component: HouseDetailsComponent
    },
    {
      path: '/houses',
      name: 'Houses',
      component: HouseListComponent
    },
    {
      path: '/realms/:id',
      name: 'Realm',
      component: RealmDetailsComponent
    },
    {
      path: '/realms',
      name: 'Realms',
      component: RealmListComponent
    }
  ])



export class AppComponent {
  constructor(public router: Router) {
  }
}
