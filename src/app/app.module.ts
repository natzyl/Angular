import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './components/data/data.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';
import { ErrorWeatherComponent } from './components/error-weather/error-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    HourlyWeatherComponent,
    ForecastWeatherComponent,
    ErrorWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
