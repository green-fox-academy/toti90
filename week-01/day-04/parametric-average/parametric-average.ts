'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
let numberExample:number = 5
let startedNumber = 0;
let summa = 0;
for (let i =1; i <= numberExample; i++) {
   summa += i; 
}

console.log("Sum: " + summa);
console.log("Average: " + summa/numberExample);
