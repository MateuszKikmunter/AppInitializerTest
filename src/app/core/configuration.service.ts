import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import * as randomWords from 'random-words';

import { Configuration } from './../shared/models/configuration';
import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _configuration: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>(new Configuration());
  public configuration$: Observable<Configuration> = this._configuration.asObservable();

  constructor(private loadService: LoadService) { 
    this._configuration.next(this.loadService.configuration);
  }

  public refreshConfig(): void {
    this.loadService.getConfiguration()
      .then(configuration => 
        this._configuration.next({
          applicationId: Math.ceil(Math.random() * 10),
          applicationName: `My Super Cool App About ${randomWords()}`,
          connectionString: `Super Secrect Connection String To My ${randomWords(2).join("-")} Database`
        }),
        error => console.log(error)
      );
  }
}