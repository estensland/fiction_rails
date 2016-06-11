import { Component } from '@angular/core';
import { CharactersComponent } from './characters/characters.component';
import { CharacterService } from './characters/character.service';

@Component({
  selector: 'idocheann-app',
  template: `
    <h1>Idocheann</h1>
    <characters></characters>
  `,
  directives: [CharactersComponent],
  providers: [CharacterService]
})
export class AppComponent { }
