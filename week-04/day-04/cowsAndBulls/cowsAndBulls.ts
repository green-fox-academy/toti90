`use strict`

export class CowsAndBulls {
  public answer: number;
  public isPlaying: boolean;
  public numberOfGuesses: number;

  constructor(pAnswer: number = Math.floor(1000 + Math.random() * 9000)) {
    this.answer = pAnswer;
    this.isPlaying = true;
    this.numberOfGuesses = 1;
  }

  guess(playerGuess: number): string {
    if(playerGuess.toString().length !== 4) {
      return 'Please guess a 4 long number'
    }
    if (!this.isPlaying) {
      return `You havent got more round. You lost the game`
    }
    let guessString: string = playerGuess.toString()
    let answerString: string = this.answer.toString()
    let cows: number = 0;
    let bulls: number = 0;
    for (let i: number = 0; i < answerString.length; i++) {
      if (guessString[i] === answerString[i]) {
        cows++
      } else if (answerString.indexOf(guessString[i]) !== -1) {
        bulls++
      }
    }
    if (this.numberOfGuesses === 8) {
      this.isPlaying = false
    }
    this.numberOfGuesses++
    if (cows === 4) {
      this.isPlaying = false;
      return `YEAAAH YOU WIN`
    }
    return `${cows} cow,${bulls} bull`
  }

}
let game = new CowsAndBulls(3462)
const inputReader = require('readline-sync');
let userNumber:number
while (game.isPlaying) {
  userNumber = inputReader.question("Please guess a four number digit: ");
  console.log(`Round ${game.numberOfGuesses}\nYour number: ${userNumber}\nYour result is: ${game.guess(userNumber)}`);
}
if (game.numberOfGuesses === 9) {
  console.log("You lost, you havent got more round")
}