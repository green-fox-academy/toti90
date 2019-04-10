'use strict';
export{};
const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];
// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function studentFunc2(list:any[]) {
    let members:string[] = [];
    let counts: number = 0
    list = list.filter(x => x["candies"]>2)
    list.map(x => members.push(x["name"]))
    list.map(x =>  counts += x["candies"])
    return `they has got more than 4 candies: ${members}\nand average they have got ${counts/members.length} candies`
}

console.log(studentFunc2(students));
