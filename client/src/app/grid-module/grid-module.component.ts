import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-module',
  templateUrl: './grid-module.component.html',
  styleUrls: ['./grid-module.component.sass']
})
export class GridModuleComponent implements OnInit {
  @Input() item = {};
  constructor() { }

  ngOnInit() {
  }

}
