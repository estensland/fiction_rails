import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { HouseService } from '../../providers/house.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'houses',
  templateUrl: 'house_list.component.html',
  directives: [RouterLink],
  providers: [HouseService],
  inputs: ['houseIds']
})

export class HouseListComponent implements OnInit {
  houses: any[];
  houseIds: any[];
  error: any;
  params: any;

  constructor(private houseService: HouseService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.houses) { this.houses  = []}

    let houseIdQuery = "";

    if (this.houseIds) { houseIdQuery = "house_ids=" + this.houseIds }

    this.houseService.query(houseIdQuery)
      .then(houses => this.houses = houses).catch(error => this.error = error);
  }

}
