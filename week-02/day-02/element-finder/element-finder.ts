'use strict';
// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(list:number[],num:number) {
    return list.indexOf(num) !== -1 ? "Hoorray":"Noooooo";
}

console.log(containsSeven(numbers,7));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;