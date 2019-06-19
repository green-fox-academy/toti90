export class City{
  name: String;
  temperature: String;
  country: String;
  icon: String;
  forecast: String[][]
  // fIcon: String[];
  // fTemp: String[];
  // fMessage: String[]
  

  constructor(name: String, country:String, temperature: String, icon:String, 
    forecast:String[][] = []) {
    this.name = name
    this.country = country
    this.temperature = temperature
    this.icon = icon
    this.forecast = forecast
    // this.fIcon = forecastIcon
    // this.fTemp = forecastTemp
    // this.fMessage = forecastMessage
  }
}