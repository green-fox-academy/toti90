`use strict`


import {CowsAndBulls} from './cowsAndBulls'
let game = new CowsAndBulls(3042)
console.log(game.answer)
const inputReader = require('readline-sync');
let userNumber:number
while (game.isPlaying) {
  userNumber = inputReader.question("Please guess a four different number digit: ");
  console.log(`-----------`)
  console.log(`Round ${game.numberOfGuesses}. You have got ${8-game.numberOfGuesses} round left\nYour number: ${userNumber}\nYour result is: ${game.guess(userNumber)}`);
}
if (game.numberOfGuesses === 9) {
  console.log("You lost, you havent got more round")
}

