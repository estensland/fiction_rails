import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { HouseService } from '../../providers/house.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'houses',
  templateUrl: 'house_list.component.html',
  directives: [RouterLink],
  providers: [HouseService]
})

export class HouseListComponent implements OnInit {
  houses: any[];
  error: any;
  params: any;

  constructor(private houseService: HouseService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.houses) { this.houses  = []}
    this.houseService.query(this.params)
      .then(houses => this.houses = houses).catch(error => this.error = error);
  }

}
