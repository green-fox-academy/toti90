`use strict`
export { }

import { Pirate } from "./pirate";
import { Ship } from "./ship";

class Armada {
  fleet: Ship[] = []; //Generate fleet with ships

  //fill armada with random number (1-5) of ships
  fillArmada() {
    let number = Math.floor(Math.random() * 5 + 1);
    let ships: Ship[] = [];
    for (let i = 0; i < number; i++) {
      let ship = new Ship();
      ship.fillShip(); //Use fillShip method from ship.ts
      ships.push(ship);
    }
    this.fleet = ships;
  }

  //Battle between two armada
  war(other: Armada): boolean {
    let thisFleet = this.fleet;
    let otherFleet = other.fleet;
    let firstShip = 0;
    let secondShip = 0;
    //Do battle until one of the armada use last ship
    while (firstShip !== thisFleet.length && secondShip !== otherFleet.length) {
      if (thisFleet[firstShip].battle(otherFleet[secondShip])) {
        secondShip++;
      } else {
        firstShip++;
      }
    }
    //Generate return value, if this aramada win then true, else false
    if (thisFleet.length === firstShip) {
      return false;
    } else {
      return true;
    }
  }

}

let armada1 = new Armada()
let armada2 = new Armada()
armada1.fillArmada()
armada2.fillArmada()
console.log(armada1.war(armada2))


