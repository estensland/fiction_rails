import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { Realm } from '../models/realm.model';

@Injectable()
export class RealmService {
  private apiUrl = '/api/realms';

  constructor(private http: Http) { }

  query(params: any): Promise<Realm[]> {
    let hitUrl = this.apiUrl

    return this.http.get(this.apiUrl, { })
      .toPromise()
      .then(response => response.json());
  }

  get(params: any): Promise<Realm[]> {
    let hitUrl = this.apiUrl + '/' + params.get('id');

    return this.http.get(hitUrl)
      .toPromise()
      .then(response => response.json());
  }

}
