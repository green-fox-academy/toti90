`use strict`

export class CowsAndBulls {
  public answer: number;
  public isPlaying: boolean;
  public numberOfGuesses: number;

  constructor(pAnswer:number) {
    this.answer = pAnswer;
    this.isPlaying = true;
    this.numberOfGuesses = 0;
  }

}