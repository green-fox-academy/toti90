`use strict`
export { }

//Make Pirate class
export class Pirate {
  public drunk: number = 0; //how many rums drank by pirate
  isCaptain: boolean = false; //is it captain?

  //Make drink rum method, if dead can't drink rum, else drink one
  drinkSomeRum() {
    if (this.drunk === -1) {
      return "he's dead";
    }
    else { this.drunk++; }
  }

  //what's up method? Answer depends on drunk rum
  howItGoingMate() {
    if (this.drunk === -1) {
      return "he's dead";
    }
    else if (this.drunk < 5) {
      return "Pour me anudder!";
    }
    else {
      return "Arghh, I'ma Pirate. How d'ya d'ink its goin?";
    }
  }

  //Add die method and set drunk rum to -1
  die() {
    this.drunk = -1;
  }

  //Fight between two pirates, 1/3 chance to die pirate1, 1/3 to die pirate two, and 1/3 to die both of them
  brawl(otherPirate: Pirate) {
    let diePirate = Math.floor(Math.random() * 3 + 1); //Generate random number between 1 and 3
    if (diePirate === 1) {
      this.die();
    } else if (diePirate === 2) {
      otherPirate.die();
    } else {
      this.die();
      otherPirate.die();
    }
  }

}

// ----- TEST ------
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


