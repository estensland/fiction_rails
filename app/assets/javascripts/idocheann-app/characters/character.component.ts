import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharacterService } from './character.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'character',
  template: `
    <h2>Character: {{character.composite_name}}</h2>
  `,
  directives: [RouterLink],
  providers: [CharacterService]
})

export class CharacterComponent implements OnInit {
  character: any;
  error: any;
  params: any;

  constructor(private characterService: CharacterService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.character) { this.character = {id: 1}}
    this.characterService.get(this.params)
      .then(character => this.character = character).catch(error => this.error = error);
  }

}
