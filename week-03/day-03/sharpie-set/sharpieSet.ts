`use strict`
export{}

import { Sharpie } from './Sharpie'

// Reuse your Sharpie class
// Create SharpieSet class
//   it contains a list of Sharpie
//   countUsable() -> sharpie is usable if it has ink in it
//   removeTrash() -> removes all unusable sharpies

class SharpieSet {
  sharpieSet: Sharpie[];
  usable: boolean = true;

  constructor(sharpieSet: Sharpie[]) {
    this.sharpieSet = sharpieSet
  }

  countUsable():number {
    let count = 0;
    for (let i = 0;i<this.sharpieSet.length;i++) {
      this.sharpieSet[i].inkAmount !== 0 ? count++:""
    }return count
  }
  removeTrash():Sharpie[] {
    for (let i = 0;i<this.sharpieSet.length;i++) {
      this.sharpieSet[i].inkAmount === 0 ? this.sharpieSet.splice(i,1):""
    }return this.sharpieSet
  }
}

let sharpie1 = new Sharpie("black", 2.23)
let sharpie2 = new Sharpie("grey", 1.22)
let sharpieSet1 = new SharpieSet([sharpie1,sharpie2])
console.log(sharpieSet1.sharpieSet);
console.log(sharpieSet1.countUsable())
sharpie1.use()
sharpie1.use()
console.log(sharpieSet1.countUsable())
sharpieSet1.removeTrash()
console.log(sharpieSet1.sharpieSet)




