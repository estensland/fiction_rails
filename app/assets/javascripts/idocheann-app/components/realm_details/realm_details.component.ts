import { Component, OnInit } from '@angular/core';
import { Realm } from '../../models/realm.model';
import { RealmService } from '../../providers/realm.service';
import { CharacterListComponent } from '../character_list/character_list.component';
import { HouseListComponent } from '../house_list/house_list.component';
import { Router, RouteParams, RouterLink } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'realm',
  templateUrl: 'realm_details.component.html',
  providers: [RealmService],
  directives: [CharacterListComponent, HouseListComponent, RouterLink]
})

export class RealmDetailsComponent implements OnInit {
  realm: any;
  error: any;
  params: any;
  houses: any;
  houseIds: any;
  primary_character_ids: any;

  constructor(private realmService: RealmService, params: RouteParams) { this.params = params }

  ngOnInit() {
    this.realmService.get(this.params)
      .then(realm => this.realm = realm).then(function(r){console.log(r)}).catch(error => this.error = error);
  }

}
