import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Root } from '../models/root.model';

@Injectable()
export class RootService {
  private apiUrl = '/api/roots';

  constructor(private http: Http) { }

  query(): Promise<Root[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json());
  }

}
