`use strict`


import {CowsAndBulls} from './cowsAndBulls'
let game = new CowsAndBulls(3462)
const inputReader = require('readline-sync');
let userNumber:number
while (game.isPlaying) {
  userNumber = inputReader.question("Please guess a four number digit: ");
  console.log(typeof userNumber)
  console.log(`Round ${game.numberOfGuesses}\nYour number: ${userNumber}\nYour result is: ${game.guess(userNumber)}`);
}
if (game.numberOfGuesses === 9) {
  console.log("You lost, you havent got more round")
}
