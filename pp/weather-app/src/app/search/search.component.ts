import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { TilesComponent } from '../tiles/tiles.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cityName: string = ""

  constructor(private apiWeather: WeatherApiService) { }

  ngOnInit() {
  }

  change() {
    this.apiWeather.changeCity(this.cityName)
    this.cityName=""
  }

}
