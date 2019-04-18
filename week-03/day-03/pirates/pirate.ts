`use strict`
export{}

import { Ship } from "./ship";

export class Pirate {
  public drunk: number = 0;
  isCaptain: boolean = false;

  drinkSomeRum() {
    if (this.drunk === -1) {
      return "he's dead"
    }
    else {this.drunk++}
  }

  howItGoingMate() {
    if (this.drunk === -1) {
      return "he's dead"
    }
    else if (this.drunk < 5) {
      return "Pour me anudder!"
    }
    else {
      return "Arghh, I'ma Pirate. How d'ya d'ink its goin?"
    } 
  }

  die() {
    this.drunk = -1
  }

  brawl(otherPirate: Pirate) {
    let diePirate = Math.floor(Math.random()*3+1)
    if (diePirate === 1) {
      this.die()
    } else if (diePirate === 2) {
      otherPirate.die()
    } else {
      this.die()
      otherPirate.die()
    }
  }

}

// let pirate1 = new Pirate()
// let pirate2 = new Pirate()
// console.log(`Pirate 1 after initialization: ${pirate1.howItGoingMate()}`) 
// pirate1.drinkSomeRum()
// pirate1.drinkSomeRum()
// pirate1.drinkSomeRum()
// pirate1.drinkSomeRum()
// console.log(`Pirate 1 after 4 rums: ${pirate1.howItGoingMate()}`)
// pirate1.drinkSomeRum()
// console.log(`Pirate 1 after 5 rums: ${pirate1.howItGoingMate()}`)
// pirate1.brawl(pirate2)
// console.log(`Pirate 1 after brawl: ${pirate1.howItGoingMate()}`)
// console.log(`Pirate 2 after brawl: ${pirate2.howItGoingMate()}`)


