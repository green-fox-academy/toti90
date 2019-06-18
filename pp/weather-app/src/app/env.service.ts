import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  // The values that are defined here are the default values that can
  // be overridden by env.js

  // API url
  public apiKey = 'b6907d289e10d714a6e88b30761fae22'

  // Whether or not to enable debug mode

  constructor() {
  }

}
