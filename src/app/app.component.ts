import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './core/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
  }

  refreshConfig(): void {
    this.configurationService.refreshConfig();
  }
}
