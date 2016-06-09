import { Component, OnInit } from '@angular/core';
import { Character } from './character.model';
import { CharacterService } from './character.service';


@Component({
  selector: 'characters',
  template: "<h2> ARGH THE UNDESERVING </h2>",
  styleUrls: ['characters.component.css'],
  providers: [CharacterService]
})

export class CharactersComponent implements OnInit {
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {

    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);

  }

}
