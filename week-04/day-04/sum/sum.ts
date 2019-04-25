`use strict`

export class Numbers {
  numbers:number[]

  constructor(pNumbers:number[]) {
    this.numbers = pNumbers
  }

  sum():number {
    if (this.numbers.length === 0) {
      return 0
    } else if (this.numbers.length === 1) {
      return this.numbers[0]
    }
    return this.numbers.reduce((acc,curr) => acc+curr)
  }
}