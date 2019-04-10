'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function studentFunc(obj:any, item:string) {
    let itemCount: number = 0;
    let ageSum: number = 0;
    students.map(x => itemCount+=x[item]);
    students.map(x => x["candies"] < 5 ? ageSum+=x["age"]:"");
    return `all ${item} is: ${itemCount}\nsum age of people who has less than five candies: ${ageSum}`;
}

console.log(studentFunc(students, "age"));
