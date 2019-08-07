import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import * as randomWords from 'random-words';

import { Configuration } from './../shared/models/configuration';
import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _cfg: BehaviorSubject<Configuration> = new BehaviorSubject<Configuration>(new Configuration());
  public configuration$: Observable<Configuration> = this._cfg.asObservable();

  constructor(private loadService: LoadService) { 
    this._cfg.next(this.loadService.configuration);
  }

  public refreshConfig(): void {
    this.loadService.getConfiguration()
      .then(configuration => 
        this._cfg.next({
          applicationId: Math.ceil(Math.random() * 10),
          applicationName: `My Super Cool App About ${randomWords()}`,
          connectionString: `Super Secrect Connection String To My ${randomWords(2).join("-")} Database`
        }),
        error => console.log(error)
      );
  }
}