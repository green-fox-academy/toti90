'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(l1: string[],l2: string[]) {
    let result: string[] = []
    for (let i=0 ;i<Math.max(...[l1.length, l2.length]); i++) {
        if (l1[i] !== undefined && l2[i] !== undefined){
            result.push(l1[i]);
            result.push(l2[i]);
        } else if (l1[i] !== undefined) {
            result.push(l1[i]);
        } else {
            result.push(l2[i]);
        }
    }
    return result
}

console.log(makingMatches(girls, boys));

export = makingMatches;