`use strict`

class Domino {
  values: number[] = [];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }

  getValue(index?:number):any {
    if (index === undefined) {
      return this.values
    } else {
      return this.values[index]
    }
  }
}

export {Domino};