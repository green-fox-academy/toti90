`use strict`

export class CowsAndBulls {
  public answer: number;
  public isPlaying: boolean;
  public numberOfGuesses: number;

  constructor(pAnswer: number) {
    this.answer = pAnswer;
    this.isPlaying = true;
    this.numberOfGuesses = 0;
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
    if (this.numberOfGuesses === 7) {
      this.isPlaying = false
    }
    this.numberOfGuesses++
    return `${cows} cow,${bulls} bull`
  }

}
