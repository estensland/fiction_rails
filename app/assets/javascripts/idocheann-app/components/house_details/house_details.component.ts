import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { HouseService } from '../../providers/house.service';
import { CharacterListComponent } from '../character_list/character_list.component';
import { Router, RouteParams, RouterLink } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'house',
  templateUrl: 'house_details.component.html',
  providers: [HouseService],
  directives: [CharacterListComponent, RouterLink]
})

export class HouseDetailsComponent implements OnInit {
  house: any;
  error: any;
  params: any;
  characterIds: any;
  primary_character_ids: any;

  constructor(private houseService: HouseService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.house) { this.house = {id: 1, siblings: [{}]}}
    this.houseService.get(this.params)
      .then(house => this.house = house).catch(error => this.error = error);
  }

}
