import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoadService } from './core/load.service';

export function loadConfigurations(configurationService: LoadService) {
  return () => configurationService.getConfiguration();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigurations,
      deps: [LoadService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
