`use strict`
export{}

import { Pirate } from "./pirate";
import { Ship } from "./ship";

class Armada {
  fleet: Ship[] = [];


  fillArmada() {
    let number = Math.floor(Math.random()*5+1)
    let ships:Ship[] = []
    for (let i=0;i<number;i++){
      let ship = new Ship()
      ship.fillShip()
      ships.push(ship)
    }
    this.fleet = ships
  }

  war(other: Armada): boolean {
    let thisFleet = this.fleet
    console.log(`this fleet: ${thisFleet}`);
    let otherFleet = other.fleet
    console.log(`other fleet: ${otherFleet}`);
    console.log(`----------`)
    let firstShip = 0
    let secondShip = 0
    while (firstShip !== thisFleet.length && secondShip !== otherFleet.length) {
      console.log(`firstShip start of iteration: ${firstShip}, and this fleet lenght is: ${thisFleet.length}`)
      console.log(`secondShip start of iteration: ${secondShip}, and other fleet length is: ${otherFleet.length}`)
      console.log(`lenght of this fleet ${firstShip}th ship: ${thisFleet[firstShip].crew.length}`)
      console.log(`lenght of other fleet ${secondShip}th ship: ${otherFleet[secondShip].crew.length}`)
      if (thisFleet[firstShip].battle(otherFleet[secondShip])) {
        console.log(` number of person in second after battle ${otherFleet[secondShip].crew.length}`)
        console.log(`this fleet win`)
        console.log(`----------`)
        secondShip++
      } else {
        console.log(` number of person in first ship after battle ${thisFleet[firstShip].crew.length}`)
        console.log(`other fleet win`)
        console.log(`----------`)
        firstShip++
      }
    } 
    console.log(`firstShip end of iteration: ${firstShip}`)
    console.log(`firstShip end of iteration: ${secondShip}`)
    if (thisFleet.length === firstShip) {
      return false
    } else {
      return true
    }
  }

}

let armada1 = new Armada()
let armada2 = new Armada()
armada1.fillArmada()
armada2.fillArmada()
console.log(armada1.war(armada2))


