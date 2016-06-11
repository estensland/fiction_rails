import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharacterService } from './character.service';


@Component({
  selector: 'characters',
  template: "\
    <ul> Characters: \
      <li *ngFor='let character of characters'>{{character.composite_name}}</li>\
    </ul>\
  ",
  providers: [CharacterService]
})

export class CharactersComponent implements OnInit {
  characters: any[];
  error: any;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    if (!this.characters) { this.characters  = []}
    this.characterService.query()
      .then(characters => this.characters = characters).catch(error => this.error = error);
  }

}
