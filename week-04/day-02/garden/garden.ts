`use strict`;

import { Plant } from './plant';

export class Garden {
  plants: Plant[];

  constructor() {
    this.plants = [];
  }

  addPlant(plant: Plant) {
    this.plants.push(plant);
  }

  print() {
    for (let plant of this.plants) {
      plant.printInfo();
    }
    console.log('');
  }

  waterPlants(amount: number) {
    console.log(`Watering with ${amount}`)
    let size = 0
    for (let plant of this.plants) {
      plant.isNeedWater ? size++ : '';
    }
    for (let plant of this.plants) {
      plant.watering(amount / size);
    }
  }
}