import { Component, OnInit } from '@angular/core';
import { IForecastWeather, IHourWeather, IWeather } from './shared/model/weather.model';
import { WeatherService } from './shared/service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  currentTimezone!: IWeather;
  currentWeather!: IWeather;
  iForecastWeather!: IWeather;
  isError!: boolean;
  isWeatherActive: boolean = true;
  isForecastWeatherActive: boolean = true;
  error!: any;
  selectedData: number = 0;
  forecastWeather: IHourWeather[] = [];
  isForecastActive: boolean = false;
  selectedDate: number = 0;
  forecastWeatherTimezoned: IHourWeather[] = [];
  dayForecast!: any;
  forecastInfo!: IForecastWeather;
  todayWeather!: IWeather; 
  cityName: string = "";
  forecastTimezone: IHourWeather[] = [];
  weatherFiveDays: IHourWeather[] = [];

  

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {}

    getWeatherNow() {
    this.weatherService.getWeatherByCityName(this.cityName).subscribe(todayWeather => {
      this.currentWeather = todayWeather;
      this.currentTimezone = this.changeCurrentTime(this.currentWeather);

      if (this.isWeatherActive) this.selectedData = this.currentWeather.dt;
      this.isError = false;
    },
    (error) => {
      this.error = error.message;
      console.log(this.error);
      this.isError = true;
    }
    )
};

  getForecastWeather() {
    return this.weatherService
      .getForecastWeatherByCityName(this.cityName)
      .subscribe(
        (data) => {
          this.forecastInfo = data;
          this.forecastWeather = data?.list;
          this.forecastTimezone = this.changeForecastTimeZone(
            this.forecastWeather
          );
          this.weatherFiveDays = this.getFiveDaysWeather(
            this.forecastTimezone
          );
          this.isError = false;
        },
        (error) => {
          this.error = error.message;
          console.log(this.error);
          this.isError = true;
        }
      );
  }

  getWeather() {
    this.selectedDate = 0;
    this.getWeatherNow();
    this.getForecastWeather();
  }
  showForecastWeather() {
    this.isWeatherActive = false;
    this.isForecastActive = true;
    this.selectedDate = 0;
  }
  showCurrentWeather() {
    this.isWeatherActive = true;
    this.isForecastActive = false;
    if (this.currentWeather) {
      this.selectedDate = this.currentWeather.dt;
    }
  }
  getFiveDaysWeather(array: IHourWeather[]) {
    return array.filter(
      (elem) =>
        new Date(elem.dt * 1000).getHours() > 12 &&
        new Date(elem.dt * 1000).getHours() < 16
    );
  }
  getsWeatherIntoThreeHour(array: IHourWeather[], date: number) {
    return array.filter(
      (elem) =>
        new Date(elem.dt * 1000).getDate() == new Date(date * 1000).getDate()
    );
  }
  
  changeForecastTimeZone(local: IHourWeather[]) {
    return local.map((elem) => {
      return {
        ...elem,
        dt:
          elem.dt +
          new Date(elem.dt * 1000).getTimezoneOffset() * 60 +
          this.forecastInfo.city.timezone,
      };
    });
  }

  changeCurrentTime(local: IWeather) {
    return {
      ...local,
      sys: 
      { ...local.sys,
        sunrise: local.sys.sunrise +
        new Date(local.sys.sunrise * 1000).getTimezoneOffset() * 60 +
        this.currentWeather.timezone, 
        sunset: local.sys.sunset +
        new Date(local.sys.sunset * 1000).getTimezoneOffset() * 60 +
        this.currentWeather.timezone, 
      },
      dt:
        local.dt +
        new Date(local.dt * 1000).getTimezoneOffset() * 60 +
        this.currentWeather.timezone, 
    };
  }
}

  

       