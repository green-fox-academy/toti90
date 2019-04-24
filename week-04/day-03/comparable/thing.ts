`use strict`

import { Comparable, Printable } from './comparable'

class Thing implements Comparable, Printable {
  private name: string;
  private completed: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  compareTo(other: Thing): number {
    if (this.completed === other.completed && this.name === other.name) {
      return 0
    }
    else if (this.completed === other.completed && this.name > other.name) {
      return 1
    }
    else if (this.completed === other.completed && this.name < other.name) {
      return -1
    }
    else if (this.completed !== other.completed && this.completed) {
      return -1
    } else {
      return 1
    }
  }

  printAllFields() {
    console.log(this.name)
  }

}

export { Thing };

let l1 = new Thing("get milk")
let l2 = new Thing("wash dishes")
let l3 = new Thing("do homework")
let l4 = new Thing("lightning talk")
let l5 = new Thing("feed the dog")
l2.complete()
l4.complete()



let result = [l1, l2, l3, l4, l5].sort(function (a: Thing, b: Thing): number {
  return a.compareTo(b);
});

for (let todo of [l1, l2, l3, l4, l5]) {
  todo.printAllFields();
}

