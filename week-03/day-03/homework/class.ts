import { Agent } from "http";

class Tree {
  type: string;
  leafColor: string;
  age: number;
  gender: string;
  isEverGreen: boolean;

  constructor(type:string, leafColor:string, gender:string, isEverGreen:boolean, age:number = 0) {
    // az age azért van a végén, mert optional paraméter és az csak a require paraméterek után lehet
    this.age = age //minden fa induljon 0-ról, ha nem ad a user neki age-t, ha ad akkor legyen az, amit a user ad
    this.type = type
    this.leafColor = leafColor
    this.gender = gender
    this.isEverGreen = isEverGreen
  }

  giveMeInfoAboutMyTree():void {
    console.log(`Yout tree is a(n) ${this.gender + ` ` + this.type} aged ${this.age} with ${this.leafColor} leaf and it is ${this.isEverGreen ? 'evergreen':'not evergreen'}`);
  }
}
const myFirstTree: Tree = new Tree('oak', 'greeeen', 'female', false)
myFirstTree.giveMeInfoAboutMyTree()
