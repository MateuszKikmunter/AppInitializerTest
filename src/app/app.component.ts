import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConfigurationService } from './core/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  refreshConfig(): void {
    this.configurationService.refreshConfig();
  }
}
