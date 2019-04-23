`use strict`;

export class Plant {
  type: string;
  color: string;
  water: number;
  isNeedWater: boolean;

  constructor(type: string, color: string) {
    this.type = type;
    this.color = color;
    this.water = 0;
    this.isNeedWater = true;
  }

  watering(amount: number) {
    this.water += amount;
  }

  printInfo() {
    console.log(this.isNeedWater ? `The ${this.color} ${this.type} needs water (amount of water: ${this.water})` : `The ${this.color} ${this.type} doesnt needs water (amount of water: ${this.water})`)
  }
}