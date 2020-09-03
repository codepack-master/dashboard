import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { TrainComponent } from './components/train/train.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import localeNorwegian from '@angular/common/locales/nb';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

registerLocaleData(localeNorwegian);

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    BikesComponent,
    TrainComponent,
    SpotifyComponent,
    LoginComponent,
    DashboardComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    { provide: localeNorwegian, useValue: 'nb-NO' },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          /* {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            ),
          }, */
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('985505865208607'),
          }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
