import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../providers/character.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'characters',
  template: `
    <ul> Characters:
      <li *ngFor='let character of characters'><a [routerLink]="['Character', {id: character.id }]">{{character.composite_name}}</a></li>
    </ul>
  `,
  directives: [RouterLink],
  providers: [CharacterService]
})

export class CharacterListComponent implements OnInit {
  characters: any[];
  error: any;
  params: any;

  constructor(private characterService: CharacterService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.characters) { this.characters  = []}
    this.characterService.query(this.params)
      .then(characters => this.characters = characters).catch(error => this.error = error);
  }

}
