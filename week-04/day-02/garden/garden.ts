`use strict`;

import{Flower} from './flower'
import{Tree} from './tree'
import { Plant } from './plant';

export class Garden {
  flowers: Flower[]
  trees: Tree[]

  constructor() {
    this.flowers = []
    this.trees = []
  }

  addPlant(plant:Plant) {
    if (plant.type === 'Flower') {
      this.flowers.push(plant)
    } else if (plant.type === 'Tree'){
      this.trees.push(plant)
    }
  }

  print() {
    for (let flower of this.flowers) {
      flower.printInfo()
    }
    for (let tree of this.trees) {
      tree.printInfo()
    }
  }

  waterPlants(amount:number) {
    console.log(`Watering with ${amount}`)
    let size = 0
    for (let flower of this.flowers) {
      flower.isNeedWater ? size++:''
    }
    for (let tree of this.trees) {
      tree.isNeedWater ? size++:''
    }
    let water = amount/size
    for (let flower of this.flowers) {
      flower.watering(water)
    }
    for (let tree of this.trees) {
      tree.watering(water)
    }
  }
}

