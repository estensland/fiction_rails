import { Component, OnInit } from '@angular/core';
import { Root } from '../../models/root.model';
import { RootService } from '../../providers/root.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'root',
  template: `
    <h2>{{root.composite_name}}</h2>
    <div class="col-md-6">
      <table class="table table-striped table-bordered">
        <tr>
          <td><strong>Root:</strong></td>
          <td>{{root.root}}</td>
        </tr>
        <tr>
          <td><strong>Meaning:</strong></td>
          <td>{{root.meaning}}</td>
        </tr>
      </table>
    </div>
  `,
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
      .then(root => this.root = root).catch(error => this.error = error);
  }

}
