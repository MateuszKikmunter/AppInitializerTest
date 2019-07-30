import { ConfigurationService } from './core/configuration.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'AppInitializerTest';

  constructor(private configurationService: ConfigurationService) {}

  ngOnInit(): void {
    this.configurationService.getConfiguration().then(cfg => console.log(cfg));
  }
}
