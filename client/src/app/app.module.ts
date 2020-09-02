import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { TrainComponent } from './components/train/train.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import localeNorwegian from '@angular/common/locales/nb';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeNorwegian);

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BikesComponent,
    TrainComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: localeNorwegian, useValue: 'nb-NO' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
