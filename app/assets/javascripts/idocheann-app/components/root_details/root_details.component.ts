import { Component, OnInit } from '@angular/core';
import { Root } from '../../models/root.model';
import { RootService } from '../../providers/root.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'root',
  templateUrl: 'root_details.component.html',
  directives: [RouterLink],
  providers: [RootService]
})

export class RootDetailsComponent implements OnInit {
  root: any;
  error: any;
  params: any;

  constructor(private rootService: RootService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.root) { this.root = {id: 1}}
    this.rootService.get(this.params)
      .then(root => this.root = root).then(function(a){console.log(a)}).catch(error => this.error = error);
  }

}
