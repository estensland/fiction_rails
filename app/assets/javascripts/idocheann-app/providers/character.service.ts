import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Character } from '../models/character.model';

@Injectable()
export class CharacterService {
  private apiUrl = '/api/characters';

  constructor(private http: Http) { }

  query(params: any): Promise<Character[]> {
    let hitUrl = this.apiUrl

    if (params.get('search')){
      hitUrl = hitUrl + '?search=' + params.get('search');
    }
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json());
  }

  get(params: any): Promise<Character[]> {
    let hitUrl = this.apiUrl + '/' + params.get('id');

    return this.http.get(hitUrl)
      .toPromise()
      .then(response => response.json());
  }

}
