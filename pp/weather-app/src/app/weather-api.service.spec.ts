import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { WeatherApiService } from './weather-api.service';

fdescribe('WeatherApiService', () => {

let service: WeatherApiService

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [WeatherApiService]
  });
  service = TestBed.get(WeatherApiService)
  })
});
