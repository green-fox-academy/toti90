'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(toNumber:number) :number {
    let sum = 0;
    for (let i = 1; i<=toNumber; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(4));

let result = (x => {
    let sum = 0;
    for (let i = 1; i<=x; i++) {
        sum += i;
    }
    return sum;
})

console.log(result(8));
