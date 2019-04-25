`use strict`
import { CowsAndBulls } from './cowsAndBulls'

//Generate readline sync
const inputReader = require('readline-sync');

//Do you want a random number?
let isRandom = inputReader.question("Do you want random number? Y/N ");

//If random number, then generate the instances of class until there is a 4 different digit number
//If not random, then generate the instance with the given number
if (isRandom === "Y" || isRandom === "y") {
  do { var game = new CowsAndBulls() }
  while (new Set(game.answer.toString().split("")).size !== 4)
} else {
  let answerNumber = inputReader.question("Please add a number to guess ");
  var game = new CowsAndBulls(answerNumber)
}


let userNumber: number

//do the loop, where you ask a number and give the result back from guess method until you dont loose or win
while (game.isPlaying) {
  userNumber = inputReader.question("Please guess a four different number digit: ");
  console.log(`-----------`)
  let result = game.guess(userNumber)
  console.log(`Round ${game.numberOfGuesses - 1}. You have got ${9 - game.numberOfGuesses} round left\nYour number: ${userNumber}\nYour result is: ${result}`);
  if (game.numberOfGuesses === 9 && result !== `YEAAAH YOU WIN`) {
    console.log(`You lost, you havent got more round. The answer was: ${game.answer}`)
  }
}
