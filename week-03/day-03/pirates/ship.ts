import { Pirate } from "./pirate";

`use strict`
export{}

export class Ship {
  crew: Pirate[] = [];
  numberOfLivePireate:number = 0;

  // constructor(captain?:Pirate) {
  //   this.captain = captain
  // }


  fillShip() {
    let number = Math.floor(Math.random()*10+1)
    let pirates = []

    for (let i=0;i<number;i++) {
      let pirate = new Pirate()
      pirates.push(pirate)
      if (i === 0) {
        pirate.isCaptain = true 
      } 
    }
    this.crew = pirates
    this.numberOfLivePireate = this.crew.length
  }

  print() {
    console.log(`Captain consumed ${this.crew[0].drunk} rum(s), and his state is: ${this.crew[0].howItGoingMate()}`)
    console.log(`Number of alive pirates is: ${this.crew.length}`)
  }

  battle(otherShip: Ship) {
    let win = true;
    let score1 = this.crew.length - this.crew[0].drunk
    let score2 = otherShip.crew.length - otherShip.crew[0].drunk
    let winnerShip: Pirate[]
    let looserShip: Pirate[]
    if (score1 > score2) {
      winnerShip = this.crew
      looserShip = otherShip.crew
    } else {
      winnerShip = otherShip.crew
      looserShip = this.crew
      win=false
    }
    let numberOfDeath = Math.floor(Math.random()*looserShip.length)
    win ? otherShip.numberOfLivePireate -= numberOfDeath: this.numberOfLivePireate -= numberOfDeath
    
    
    for (let i=1;i<=numberOfDeath;i++) {
      looserShip[i].die()
    }
    looserShip.splice(1,numberOfDeath)
    let numberOfRums = Math.floor(Math.random()*10)
    while (numberOfRums !== 0) {
      let randomPersonIndex = Math.floor(Math.random()*(winnerShip.length))
      winnerShip[randomPersonIndex].drinkSomeRum()
      numberOfRums--
    }
    return win
  }

}

// ----- TEST ------
// let ship1 = new Ship()
// let ship2 = new Ship()
// console.log(ship1.crew)
// console.log(ship2.crew)
// ship1.fillShip()
// ship2.fillShip()
// console.log(ship1.crew)
// console.log(ship2.crew)
// console.log(ship1.battle(ship2))
// console.log(ship1.crew)
// console.log(ship2.crew)


