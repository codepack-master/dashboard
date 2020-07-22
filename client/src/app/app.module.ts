import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { TrainComponent } from './components/train/train.component';
import { SpotifyComponent } from './components/spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BikesComponent,
    TrainComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
