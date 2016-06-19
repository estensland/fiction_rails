import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../providers/character.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'characters',
  templateUrl: 'character_list.component.html',
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
