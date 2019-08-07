import { Component, OnInit } from '@angular/core';

import { Configuration } from './../shared/models/configuration';
import { ConfigurationService } from './../core/configuration.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
