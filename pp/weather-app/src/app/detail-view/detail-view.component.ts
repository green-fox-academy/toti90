import { Component, OnInit } from '@angular/core';
import { City } from '../tiles/city.model';
import { WeatherApiService } from '../weather-api.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  city: City

  constructor(private apiWeather: WeatherApiService) { }

  ngOnInit() {
    this.apiWeather.currentCity.subscribe(city => this.city=city)
  }

}
