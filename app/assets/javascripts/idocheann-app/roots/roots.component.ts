import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'roots',
  template: `
    <p> Rootshere</p>
  `
})

export class RootsComponent implements OnInit {
  roots: any[];
  error: any;

  constructor() { }

  ngOnInit() {
    if (!this.roots) { this.roots = [] }
  }

}
