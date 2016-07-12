import { Component, OnInit } from '@angular/core';
import { Realm } from '../../models/realm.model';
import { RealmService } from '../../providers/realm.service';
import { CharacterListComponent } from '../character_list/character_list.component';
import { Router, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'realm',
  templateUrl: 'realm_details.component.html',
  providers: [RealmService],
  directives: [CharacterListComponent]
})

export class RealmDetailsComponent implements OnInit {
  realm: any;
  error: any;
  params: any;
  characterIds: any;
  primary_character_ids: any;

  constructor(private realmService: RealmService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.realm) { this.realm = {id: 1, siblings: [{}]}}
    this.realmService.get(this.params)
      .then(realm => this.realm = realm).catch(error => this.error = error);
  }

}
