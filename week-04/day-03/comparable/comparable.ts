`use strict`;

export interface Comparable {
  compareTo(other: Comparable): number;
  /*
  * returns negative number if this is smaller than other
  * returns 0 if they are the same
  * returns positive number if this is greater than other
  */
}

class Domino implements Comparable {
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

  compareTo(other: Domino): number {
    if (this.getValue(0) < other.getValue(0)) {
      return -1
    } else if (this.getValue(0) === other.getValue(0)) {
      return 0
    } else {
      return 1
    }
  }

}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

let result = dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
});



