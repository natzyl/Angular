import { Component, Input, OnInit } from '@angular/core';
import { IHourWeather } from 'src/app/shared/model/weather.model';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {
  @Input() dayForecast!: IHourWeather;

  constructor() {}

  ngOnInit(): void {}

  getIcon(iconName: string): string {
    return `http://openweathermap.org/img/w/${iconName}.png`;
  }
}

