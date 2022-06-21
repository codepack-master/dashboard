import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  modules = [
    { title: 'YR', id: 'Weather' },
    { title: 'Entur', id: 'Train' },
    { title: 'Spotify', id: 'Spotify' },
    { title: 'Tibber', id: 'Tibber' },
  ];

  constructor() {}

  ngOnInit(): void {}

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
}
