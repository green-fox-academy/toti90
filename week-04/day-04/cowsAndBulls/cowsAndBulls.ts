`use strict`

export class CowsAndBulls {
  // add constructor and fields(answer, isPlaying, numberOfGuess)
  public answer: number;
  public isPlaying: boolean;
  public numberOfGuesses: number;

  constructor(pAnswer: number = Math.floor(1000 + Math.random() * 9000)) {
    this.answer = pAnswer;
    this.isPlaying = true;
    this.numberOfGuesses = 1;
  }
  //make a guess function where user can guess and get answer back as a string
  guess(playerGuess: number): string {
    let guessString: string = playerGuess.toString() //convert user number guess to string

    //Check if the guessNumber is not 4 digit long, contain a not number character or contain two or more same digit
    //And bigger than 0
    if (playerGuess.toString().length !== 4 || isNaN(playerGuess) || new Set(guessString.split("")).size !== 4 || playerGuess<0) {
      return 'Please guess a 4 DIFFERENT digit positive number'
    }

    //Check iSPlaying boolen if that is true or not?
    if (!this.isPlaying) {
      return `You havent got more round. You lost the game`
    }

    let answerString: string = this.answer.toString() //convert answer number guess to string

    //declare varibale to good guesses
    let cows: number = 0; 
    let bulls: number = 0;

    //check all values in a guess number
    for (let i: number = 0; i < answerString.length; i++) {
      //if guess number is in right position add one cow
      if (guessString[i] === answerString[i]) {
        cows++
      // else if in the answer add one bulls
      } else if (answerString.indexOf(guessString[i]) !== -1) {
        bulls++
      }
    }
    //if goes to 8th guess, set isPlaying boolean to false
    if (this.numberOfGuesses === 8) {
      this.isPlaying = false
    }
    this.numberOfGuesses++

    //check win?
    if (cows === 4) {
      this.isPlaying = false;
      return `YEAAAH YOU WIN`
    }

    //return the string with number of cows and bulls
    return `${cows} cow,${bulls} bull`
  }

}