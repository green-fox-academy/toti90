import { Component, OnInit } from '@angular/core';
import { City } from './city.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  city: City
  cityName: String = "" 

  constructor(
    private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest&APPID=100cb1887e2abc22cbc5d54fc670e448')
    .subscribe((response)=>{
      this.city = new City (response["name"], response["sys"]["country"], `${Math.round(response["main"]["temp"]-273)} °C`, "cloudy")
    })
  }

  search() {
      this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=100cb1887e2abc22cbc5d54fc670e448`)
      .subscribe((response)=>{
        this.city = new City (response["name"], response["sys"]["country"], `${Math.round(response["main"]["temp"]-273)} °C`, "cloudy")
      })
  }

  

}
