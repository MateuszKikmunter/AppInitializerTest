import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { Configuration } from '../shared/models/configuration';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(private http: HttpClient) {}

  private _configuration: Configuration = new Configuration();

  get configuration(): Configuration {
    return this._configuration;
  }

  public getConfiguration(): Promise<any> {
    return this.http.get<Configuration>("./assets/configuration.json")
       .pipe(
        tap(config => this._configuration = config))
      .toPromise();
  }

}
