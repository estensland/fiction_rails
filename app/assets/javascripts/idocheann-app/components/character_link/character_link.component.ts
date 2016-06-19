import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { RouterLink } from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'characterLink',
  templateUrl: 'character_link.component.html',
  directives: [RouterLink],
  inputs: ['character']
})

export class CharacterLinkComponent implements OnInit {

  character: any;

  constructor() { }

  ngOnInit() { }



}
