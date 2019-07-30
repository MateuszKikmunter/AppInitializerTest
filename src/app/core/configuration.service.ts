import { Injectable } from '@angular/core';

import { Configuration } from './../shared/models/configuration';
import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _configuration: Configuration = new Configuration();

  get configuration(): Configuration {
    return this._configuration;
  }

  constructor(private loadService: LoadService) { 
    this._configuration = this.loadService.configuration;
  }

  public refreshConfig(): void {
    this.loadService.getConfiguration()
      .then(configuration => 
        this._configuration = configuration,
        error => console.log(error)
      );
  }
}