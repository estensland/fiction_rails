import { Component, OnInit } from '@angular/core';
import { Root } from '../../models/root.model';
import { RootService } from '../../providers/root.service';
import { Router, RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'root_list',
  template: `
    <ul> Roots:
      <li *ngFor='let root of roots'>{{root.root}} : {{root.meaning}}</li>
    </ul>
  `,
  directives: [RouterLink],
  providers: [RootService]
})

export class RootListComponent implements OnInit {
  roots: any[];
  error: any;

  constructor(private rootService: RootService) { }

  ngOnInit() {
    if (!this.roots) { this.roots = [] }
    this.rootService.query()
      .then(roots => this.roots = roots).catch(error => this.error = error);
  }

}
