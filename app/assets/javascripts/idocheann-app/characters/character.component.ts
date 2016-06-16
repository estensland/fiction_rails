import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character.model';
import { CharacterService } from './character.service';
import { Router, RouterLink, RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'character',
  template: `
    <h2>{{character.composite_name}}</h2>
    <div class="col-md-6">
      <table class="table table-striped table-bordered">
        <tr>
          <td><strong>Native Name:</strong></td>
          <td>{{character.native_name}}</td>
        </tr>
        <tr>
          <td><strong>Native Translation:</strong></td>
          <td>{{character.native_translation}}</td>
        </tr>
        <tr>
          <td><strong>Bailic Name:</strong></td>
          <td>{{character.bailic_name}}</td>
        </tr>
        <tr>
          <td><strong>Bailic Translation:</strong></td>
          <td>{{character.bailic_translation}}</td>
        </tr>
        <tr>
          <td><strong>Nick Name:</strong></td>
          <td>{{character.native_name}}</td>
        </tr>
        <tr>
          <td><strong>Real Person:</strong></td>
          <td>{{character.real_person}}</td>
        </tr>
        <tr>
          <td><strong>Fighting Class:</strong></td>
          <td>{{character.fighting_class}}</td>
        </tr>
      </table>
    </div>
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
