var require: any
const inputReader = require('readline-sync');

let userSaysThisThing: string = inputReader.question("Please enter your name: ");

console.log("Your name is: " + userSaysThisThing);