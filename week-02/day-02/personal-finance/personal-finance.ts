`use strict`;
// We are going to represent our expenses in a list containing integers.
// Create a list with the following items.
// 500, 1000, 1250, 175, 800 and 120
// Create an application which solves the following problems.
// How much did we spend?
// Which was our greatest expense?
// Which was our cheapest spending?
// What was the average amount of our spendings?

let expenses = [500,1000,1250,175,800,120];

function app(arr:number[]) {
    let sum = 0;
    arr.map(x => sum+=x);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let average = Math.floor(sum/arr.length)
    return `Summary spent: ${sum}\nthe most expensive item price is: ${max} 
the cheapest item price is: ${min} \nand the average spending is: ${average}`;
}

console.log(app(expenses));