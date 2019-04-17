`use strict`

import { Thing } from './thing';
import { Fleet } from './fleet';

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

class fleetOfThing {
  private fleetOfThing: Fleet;

  constructor(list:string[]) {
    let fleet = new Fleet()
    for (let i = 0;i<list.length;i++) {
      fleet.add(new Thing(list[i]))
    }
    this.fleetOfThing = fleet
  }

  get() {
    return this.fleetOfThing
  }

  print() {
    for (let i=0;i<this.fleetOfThing.getThings().length;i++) {
      console.log(`${i+1}. ${this.fleetOfThing.getThings()[i].getCompleted() ? "[X]":"[ ]"} ${this.fleetOfThing.getThings()[i].getName()}`)
    }
  }

}

function complete(fleetOfThing:fleetOfThing,element:string) {
  for (let i = 0;i<fleetOfThing.get().getThings().length;i++) {
    fleetOfThing.get().getThings()[i].getName() === element ? fleetOfThing.get().getThings()[i].complete():""
  }
}


let FOT1 = new fleetOfThing(["Get milk", "Remove obstacles", "Stand up", "Eat Lunch"])
complete(FOT1, "Stand up")
complete(FOT1, "Eat Lunch")
FOT1.print()

