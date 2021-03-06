`use strict`
export{}

// Create an Animal class
//   Every animal has a hunger value, which is a whole number
//   Every animal has a thirst value, which is a whole number
//   when creating a new animal object these values are created with the default 50 value
//   Every animal can eat() which decreases their hunger by one
//   Every animal can drink() which decreases their thirst by one
//   Every animal can play() which increases both by one

export class Animal {
  hunger: number = 50;
  thirst: number = 50;

  eat() {
    this.hunger--
  } 
  drink() {
    this.thirst--
  }
  play() {
    this.hunger++
    this.thirst++
  }
}

// let tiger = new Animal()
// console.log(`After initialization: tiger hunger is: ${tiger.hunger}, and thirst is: ${tiger.thirst}`);
// tiger.eat()
// console.log(`After eat: tiger hunger is: ${tiger.hunger}, and thirst is: ${tiger.thirst}`);
// tiger.drink()
// console.log(`After drink: tiger hunger is: ${tiger.hunger}, and thirst is: ${tiger.thirst}`);
// tiger.play()
// console.log(`After play: tiger hunger is: ${tiger.hunger}, and thirst is: ${tiger.thirst}`);




