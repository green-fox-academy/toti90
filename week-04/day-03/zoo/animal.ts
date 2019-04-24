`use strict`;

abstract class Animal {
  abstract name:string;
  abstract age: number = 0;
  abstract breedForm:string;

  getName(): string {
    return this.name
  }

  breed()  {
    return this.breedForm
  }
}

class Mammal extends Animal {
  name:string;
  age:number = 0;
  breedForm:string;

  constructor(pName:string) {
    super()
    this.name = pName
    this.breedForm = "pushing miniature versions out"
  }
}
class Reptile extends Animal {
  name:string;
  age:number = 0;
  breedForm:string;

  constructor(pName:string) {
    super()
    this.name = pName
    this.breedForm = "laying eggs"
  }
}
class Bird extends Animal {
  name:string;
  age:number = 0;
  breedForm:string;

  constructor(pName:string) {
    super()
    this.name = pName
    this.breedForm = "laying eggs"
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());