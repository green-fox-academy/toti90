import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import {BehaviorSubject } from 'rxjs';
import { City } from './tiles/city.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  city: City

  private citySource = new BehaviorSubject<City>(this.city)
  currentCity = this.citySource.asObservable()

  constructor(
    private http: HttpClient,
    private env: EnvService) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Budapest&APPID=${this.env.apiKey}`)
    .subscribe(response => {
      this.citySource.next(new City(response["name"], response["sys"]["country"], `${Math.round(response["main"]["temp"] - 273)} °C`, "cloudy"))
    })
    }

  getApiObserve(cityName: String) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.env.apiKey}`)
    .subscribe(response => {
      this.citySource.next(new City(response["name"], response["sys"]["country"], `${Math.round(response["main"]["temp"] - 273)} °C`, "cloudy"))
    })
  }

  

  
}
