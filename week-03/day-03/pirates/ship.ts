import { Pirate } from "./pirate";

`use strict`
export { }

export class Ship {
  crew: Pirate[] = []; //one ship conatin many pirates
  numberOfLivePireate: number = 0; //this show how many pirates are in live on the ship

  // Add fillShip method, fill with random number(1-10) of pirates
  fillShip() {
    let number = Math.floor(Math.random() * 10 + 1);
    let pirates = [];

    //Add new pirate to the ship, and the first one will be the captain
    for (let i = 0; i < number; i++) {
      let pirate = new Pirate();
      pirates.push(pirate);
      if (i === 0) {
        pirate.isCaptain = true;
      }
    }
    this.crew = pirates;
    this.numberOfLivePireate = this.crew.length;
  }

  // Add print method, print number of rums that captain drunk and his state as well, and the number of pirates live on ship
  print() {
    console.log(`Captain consumed ${this.crew[0].drunk} rum(s), and his state is: ${this.crew[0].howItGoingMate()}`);
    console.log(`Number of alive pirates is: ${this.crew.length}`);
  }

  //Add battle method, generate score, choose who win, kill some pirate on looser ship, and drink som rum for winners
  battle(otherShip: Ship) {
    let win = true; // return value generated
    let score1 = this.crew.length - this.crew[0].drunk; //calculate score from length and captain consumed rum
    let score2 = otherShip.crew.length - otherShip.crew[0].drunk;
    let winnerShip: Pirate[];
    let looserShip: Pirate[];
    //Choose which ship won and set winner and loosership
    if (score1 > score2) {
      winnerShip = this.crew;
      looserShip = otherShip.crew;
    } else {
      winnerShip = otherShip.crew;
      looserShip = this.crew;
      win = false; //set return value to false if other ship win
    }
    //Generate random number of death pirate, and substract from the original numberoflives
    let numberOfDeath = Math.floor(Math.random() * looserShip.length);
    win ? otherShip.numberOfLivePireate -= numberOfDeath : this.numberOfLivePireate -= numberOfDeath;

    //kill the pirates, never kill the captain
    for (let i = 1; i <= numberOfDeath; i++) {
      looserShip[i].die();
    }
    //drop the dead pirates from loosership
    looserShip.splice(1, numberOfDeath);

    //drink some rum for winnership (0-9) with random person
    let numberOfRums = Math.floor(Math.random() * 10);
    while (numberOfRums !== 0) {
      let randomPersonIndex = Math.floor(Math.random() * (winnerShip.length));
      winnerShip[randomPersonIndex].drinkSomeRum();
      numberOfRums--;
    }

    return win;
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


