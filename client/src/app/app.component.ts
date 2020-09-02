import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  currentPosition: Position;

  ngOnInit() {
    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.currentPosition = position;
        console.log(position.coords.latitude, position.coords.longitude);
      })
      
    }
  }
}
