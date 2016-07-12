import { Component, OnInit } from '@angular/core';
import { Realm } from '../../models/realm.model';
import { RealmService } from '../../providers/realm.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'realm',
  templateUrl: 'realm_list.component.html',
  directives: [RouterLink],
  providers: [RealmService]
})

export class RealmListComponent implements OnInit {
  realms: any[];
  error: any;
  params: any;

  constructor(private realmService: RealmService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.realms) { this.realms  = []}
    this.realmService.query(this.params)
      .then(realm => this.realms = realm).catch(error => this.error = error);
  }

}
