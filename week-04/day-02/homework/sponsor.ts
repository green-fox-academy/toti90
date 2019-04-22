`use strict`

export class Sponsor {
  name: string;
  age: number;
  gender: string;
  comapny: string;
  hiredStudents: number = 0;

  constructor(name:string = "Jane Doe", age: number = 30, gender:string = "female", company:string = "Google") {
    this.name = name
    this.age = age
    this.gender = gender
    this.comapny = company
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.comapny} and hired ${this.hiredStudents} students so far`);
  }

  hire() {
    this.hiredStudents++
  }

  getGoal() {
    console.log(`Hire brilliant junior software developers`);
    
  }
}