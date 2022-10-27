import { Component, Input, OnInit } from '@angular/core';
import { IHourWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {

  @Input() dayForecast!: IHourWeather;
    constructor() { }
  
    ngOnInit(): void {
    }
    getIcon(iconName: string): string {
      return `http://openweathermap.org/img/w/${iconName}.png`;
    }
  }