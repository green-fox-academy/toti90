import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { EnvServiceProvider } from './env.service.provider';
import { WeatherApiService } from './weather-api.service';
import { SearchComponent } from './search/search.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    SearchComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EnvServiceProvider,WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
