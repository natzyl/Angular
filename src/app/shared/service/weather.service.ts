import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IForecastWeather, IWeather } from '../model/weather.model';

const API_KEY = "bdb863465dda817edb68632a0d14b6b6";
const API_URL = "https://api.openweathermap.org/data/2.5";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherByCityName(cityName: string): Observable<IWeather> {
    return this.httpClient.get<any>(`${API_URL}/weather?q=${cityName}&units=metric&appid=${API_KEY}`);
  }

getForecastWeatherByCityName(cityName: string): Observable<IForecastWeather> {
  return this.httpClient.get<IForecastWeather>(`${API_URL}/forecast?q=${cityName}&units=metric&appid=${API_KEY}`);
  }
}

