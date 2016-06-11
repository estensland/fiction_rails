import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Character } from '../models/character.model';

@Injectable()
export class CharacterService {
  private apiUrl = '/api/characters';

  constructor(private http: Http) { }

  query(): Promise<Character[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json());
  }

}
