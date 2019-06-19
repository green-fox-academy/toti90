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
    this.changeCity("Budapest")
    }

  changeCity(cityName: String) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.env.apiKey}`)
    .subscribe(response => {
      this.citySource.next(new City(response["name"], response["sys"]["country"], 
      `${Math.round(response["main"]["temp"] - 273)} °C`, 
      `http://openweathermap.org/img/w/${response["weather"][0]["icon"]}.png`,
      this.getDetails(response["name"])
      ))
    })
  }

  getDetails(cityName: String):String[][] {
    let result: String[][] = []
    this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${this.env.apiKey}`)
    .subscribe(response => {
      for (let i=0;i<response["list"].length;i+=8) {
        let forecast = response["list"][i]
        this.currentCity.subscribe(data => {
          let day: String[] = []
          day.push(`http://openweathermap.org/img/w/${forecast["weather"][0]["icon"]}.png`)
          day.push(`${Math.round(forecast["main"]["temp"] - 273)} °C`)
          day.push(`${forecast["weather"][0]["description"]}`)
          result.push(day)
        })
      }
    })
    return result
  }

  

  
}
