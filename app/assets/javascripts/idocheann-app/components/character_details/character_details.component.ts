import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../providers/character.service';
import { CharacterLinkComponent } from '../character_link/character_link.component';
import { Router, RouteParams, RouterLink } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'character',
  templateUrl: 'character_details.component.html',
  directives: [CharacterLinkComponent, RouterLink],
  providers: [CharacterService]
})

export class CharacterDetailsComponent implements OnInit {
  character: any;
  error: any;
  params: any;

  constructor(private characterService: CharacterService, params: RouteParams) { this.params = params }

  ngOnInit() {
    if (!this.character) { this.character = {id: 1, siblings: [{}]}}
    this.characterService.get(this.params)
      .then(character => this.character = character).catch(error => this.error = error);
  }



}
