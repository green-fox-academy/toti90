`use strict`
export{}

// Reuse your Animal class
// Create a Farm class
//   it has list of Animals
//   it has slots which defines the number of free places for animals
//   breed() -> creates a new animal if there's place for it
//   slaughter() -> removes the least hungry animal

import { Animal } from './Animal'

class Farm {
  animalList: Animal[];
  slot: number = 1;

  constructor(animalList:Animal[]) {
    this.animalList = animalList
  }

  breed() {
    let animal = new Animal()
    if (this.slot !== 0) {
      this.animalList.push(animal)
      this.slot--
    }
    else {
      console.log("No more free places in the farm")
    }
  }

  slaughter() {
    let hungers = []
    for (let i =0;i<this.animalList.length;i++) {
      hungers.push(this.animalList[i].hunger)
    }
    let min = Math.min(...hungers)
    let leastHunger = hungers.indexOf(min)
    this.animalList.splice(leastHunger,1)
    return this.animalList
  }
}

let animal1 = new Animal()
let animal2 = new Animal()
let farm1 = new Farm([animal1,animal2])
console.log(farm1.animalList);
farm1.breed()
console.log(farm1.animalList);
animal1.eat()
console.log(farm1.animalList);

farm1.slaughter()
console.log(farm1.animalList)


