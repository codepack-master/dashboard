import { Component, OnInit } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-js';
import { SpotifyStateService } from 'src/app/services/spotify-state.service';

const s = new SpotifyWebApi();
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '1fa00f640fb0439b9119c0bc7a2cf31a';
const redirectUri = 'http://localhost:4200/';
const scopes = ['user-read-currently-playing', 'user-read-playback-state'];

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss'],
})
export class SpotifyComponent implements OnInit {
  accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
  )}&response_type=token&show_dialog=false`;

  accessToken$ = this.spotifyState.spotifyToken$;
  itemSong: Item = { song: null, is_playing: false, progress_ms: 0 };
  backgroundImage: string = '';
  progressBarWidth: number = 0;

  constructor(private spotifyState: SpotifyStateService) {}

  ngOnInit() {
    if (this.spotifyState.getToken()) {
      console.log('Has token');
    } else {
      console.log('Doesnt have token');
    }
    const hash: any = this.getTokenFromResponse();
    window.location.hash = '';
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);
      this.spotifyState.setToken(_token);

      this.getCurrentSong();

      s.getMe().then((user) => {
        console.log(user);
      });
    }

    setInterval(() => this.getSongStatus(), 5000);
  }

  getSongStatus() {
    if (this.spotifyState.getToken()) {
      this.getCurrentSong();
    }
  }

  getCurrentSong() {
    s.getMyCurrentPlaybackState({
      market: 'ES',
      additional_types: 'episode',
    }).then((song) => {
      console.log(song);

      this.itemSong.song = song.item;
      this.itemSong.is_playing = song.is_playing;
      this.itemSong.progress_ms = song.progress_ms;

      if (this.itemSong.song != null) {
        if (this.itemSong.song.album != null) {
          this.backgroundImage = `url(${this.itemSong.song.album.images[0].url})`;
        } else {
          this.backgroundImage = `url(${this.itemSong.song.images[0].url})`;
        }

        this.progressBarWidth =
          (this.itemSong.progress_ms * 100) / this.itemSong.song.duration_ms;
      }
    });
  }

  getTokenFromResponse() {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {});
  }
}

interface Song {
  album: Album;
  name: string;
  artists: Artists;
  duration_ms: number;
}

interface Album {
  images: string[];
}

interface Artists {
  name: string[];
}

interface Item {
  song: any;
  is_playing: boolean;
  progress_ms: number;
}
