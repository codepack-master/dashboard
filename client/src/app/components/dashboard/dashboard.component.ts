import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Directive,
  Input,
  ViewChildren,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import { SpotifyComponent } from '../spotify/spotify.component';
import { TrainComponent } from '../train/train.component';

@Directive({ selector: '[pane]' })
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChildren('comp', { read: ViewContainerRef })
  public dynComponents: QueryList<ViewContainerRef>;
  @ViewChild('a', { read: ViewContainerRef }) container: ViewContainerRef;

  currentPosition: Position;
  list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  private modals = {
    WeatherComponent,
    SpotifyComponent,
    TrainComponent,
  };
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.currentPosition = position;
        console.log(position.coords.latitude, position.coords.longitude);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev, index) {
    console.log(ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    console.log(index);

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      this.modals[data + 'Component']
    );
    this.dynComponents.toArray()[index].createComponent(factory);
  }
}
