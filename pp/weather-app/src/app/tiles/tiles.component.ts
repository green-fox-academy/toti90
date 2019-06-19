import { Component, OnInit, Input } from '@angular/core';
import { City } from './city.model';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  city: City

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private apiWeather: WeatherApiService) {
  }
  ngOnInit() {
    this.apiWeather.currentCity.subscribe(city => this.city=city)
  }

}
