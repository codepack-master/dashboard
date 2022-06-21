import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyStateService {
  public spotifyToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public spotifyToken$ = this.spotifyToken.asObservable();
  
  constructor(private httpClient: HttpClient ) { }

  setToken(token: string){
    this.spotifyToken.next(token);
  }

  getToken() {
    return this.spotifyToken.getValue();
  }

  getPlayer() {
    return this.httpClient.get('https://api.spotify.com/v1/me/player', {headers: {"Authorization": "Bearer " + this.getToken()}});
  }
}
