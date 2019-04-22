import { Person } from "./person";

`use strict`

export class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(name: string = "Jane Doe", age:number=30, gender:string="famale",previousOrganization:string ="The School of Life") {
    this.name = name
    this.age = age
    this.gender = gender
    this.previousOrganization = previousOrganization
  }

  getGoal() {
    console.log("Be a junior software developer")
  }

  introduce() {
    console.log(`Hi I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already`)
  }

  skipDays(numberOfDays:number) {
    this.skippedDays += numberOfDays
  }
}