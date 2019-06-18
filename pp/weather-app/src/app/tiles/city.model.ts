export class City{
  name: String;
  temperature: String;
  country: String;
  icon: String;

  constructor(name: String, country:String, temperature: String, icon:String ) {
    this.name = name
    this.country = country
    this.temperature = temperature
    this.icon = icon
  }
}