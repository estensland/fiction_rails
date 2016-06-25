import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../providers/character.service';
import { CharacterLinkComponent } from '../character_link/character_link.component';
import { Router, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'characters',
  templateUrl: 'character_list.component.html',
  directives: [CharacterLinkComponent],
  providers: [CharacterService, CharacterLinkComponent],
  inputs: ['characterIds']
})

export class CharacterListComponent implements OnInit {
  characters: any[];
  characterIds: any[];
  error: any;
  params: any;

  constructor(private characterService: CharacterService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.characters) { this.characters  = []}

    let characterIdQuery = "";

    if (this.characterIds) { characterIdQuery = "character_ids=" + this.characterIds }

    this.characterService.query(characterIdQuery)
      .then(characters => this.characters = characters).catch(error => this.error = error);
  }

}
