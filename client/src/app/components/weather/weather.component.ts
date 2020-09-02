import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { mockData } from 'src/app/mockData';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  @Input() currentPosition: Position;

  testData = [];

  constructor() {}

  ngOnInit() {
    let today = new Date();

    today.setTime(today.getTime() - today.getTimezoneOffset() * 60 * 1000);

    console.log(today.toISOString());

    /*   this.testData = this.mockData.filter((date) => {
      return date.time.toLocaleString() >= today.toISOString();
    }); */

    let groups = this.groupDates(mockData);
  }

  groupDates(data) {
    const groups = data.reduce((groups, game) => {
      const date = game.time.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(game);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        times: groups[date],
      };
    });

    let tempArray = [];
    let maxTempArray = [];

    groupArrays.forEach((group) => {
      this.testData.push({
        date: group.date,
        minValue: group.times.reduce(
          (min, time) =>
            Math.min(min, time.data.instant.details.air_temperature),
          group.times[0].data.instant.details.air_temperature
        ),
        maxValue: group.times.reduce(
          (max, time) =>
            Math.max(max, time.data.instant.details.air_temperature),
          group.times[0].data.instant.details.air_temperature
        ),
        symbols: this.groupBySymbol(group.times, 'data'),
      });
    });

    console.log(this.testData);

    console.log(groupArrays);
    return groupArrays;
  }

  groupBySymbol(array = [], key) {
    // Return the end result
    let returnArray = [];
    
    array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object

      if (
        currentValue[key]['next_6_hours'] != null &&
        (currentValue.time.includes('T06:00:00Z') ||
          currentValue.time.includes('T00:00:00Z') ||
          currentValue.time.includes('T12:00:00Z') ||
          currentValue.time.includes('T18:00:00Z'))
      ) {
        result[currentValue[key]['next_6_hours']['summary']['symbol_code']];

        returnArray.push({
          time: currentValue.time,
          value: currentValue[key]['next_6_hours']['summary']['symbol_code'],
        });
      }
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      
      return result;
    }, []); // empty object is the initial value for result object

    if(returnArray.length < 4) {returnArray.length = 4};
    return returnArray;
  }

  // Group by color as key to the person array

  ngOnChanges(changes: SimpleChanges) {
    /*    if (
      changes.currentPosition &&
      changes.currentPosition.currentValue != null
    ) {
      console.log(changes);
      console.log(this.currentPosition);
    } */
  }
}
