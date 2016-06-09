import { Component } from '@angular/core';
import { Character } from './characters/character.model';
import { CharactersComponent } from './characters/characters.component';

@Component({
  selector: 'idocheann-app',
  template: `
    <h1>Idocheann</h1>
    <characters></characters>
  `,
  directives: [CharactersComponent]
})
export class AppComponent { }
