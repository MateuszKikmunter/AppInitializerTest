import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration } from './../shared/models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  
  constructor(private http: HttpClient) {}

  public getConfiguration(): Promise<Configuration> {
    return this.http.get<Configuration>("./assets/configuration.json")
      .toPromise();
  }

}
