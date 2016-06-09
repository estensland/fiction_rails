import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
  constructor(private http: Http) { }
  getCharacters() {
    return this.http.get('/api/characters')
      .map((res: Response) => res.json());

  }
}
