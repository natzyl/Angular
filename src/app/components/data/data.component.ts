import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  
today: Date = new Date();

  @Input() currentTimezone!: IWeather;

  constructor() {}

  ngOnInit(): void {}

  getIcon(iconName: string): string {
    return `http://openweathermap.org/img/w/${iconName}.png`;
  }
}
