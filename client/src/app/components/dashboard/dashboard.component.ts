import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  currentPosition: Position;
  constructor() { }

  ngOnInit() {
    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.currentPosition = position;
        console.log(position.coords.latitude, position.coords.longitude);
      })
      
    }
  }

}
