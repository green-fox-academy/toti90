import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { WeatherApiService } from './weather-api.service';

fdescribe('WeatherApiService', () => {

  let service: WeatherApiService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherApiService]
    });
    service = TestBed.get(WeatherApiService)
    httpMock = TestBed.get(HttpTestingController);
  })

  it('should be equal', () => {
    service.currentCity.subscribe((city) => {
      // console.log(city.name)
    })
    const req = httpMock.expectOne('https://api.openweathermap.org/data/2.5/weather?q=Budapest&APPID=100cb1887e2abc22cbc5d54fc670e448')
    // expect(req.request.method).toBe('GET');
    // req.flush({
    //   name: 'Budapest'
    // });

    // httpMock.verify();
  })



});
