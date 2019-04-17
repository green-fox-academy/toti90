`use strict`
export{}

// Create a Counter class
//   which has an integer property
//   when creating it should have a default value 0 or we can specify it when creating
//   we can add(number) to increase the counter's value by a whole number
//   or we can add() without parameters just increasing the counter's value by one
//   and we can get() the current value as string
//   also we can reset() the value to the initial value

class Counter {
  private integer: number;
  private initial:number;

  constructor(integer:number = 0) {
    this.initial = integer
    this.integer = integer
  }

  public add(addNum:number = 1): void {
    this.integer += addNum
  }

  public get(): string {
    return `${this.integer}`
  }

  public reset(): void {
    this.integer = this.initial
  }
}

let counter1 = new Counter()
let counter2 = new Counter(30)
console.log(`counter1 is: ${counter1.get()}, counter2 is: ${counter2.get()}`);
counter1.add(20)
counter2.add(20)
console.log(`counter1 is: ${counter1.get()}, counter2 is: ${counter2.get()}`);
counter1.add()
counter2.add()
console.log(`counter1 is: ${counter1.get()}, counter2 is: ${counter2.get()}`);
counter1.reset()
counter2.reset()
console.log(`counter1 is: ${counter1.get()}, counter2 is: ${counter2.get()}`);
