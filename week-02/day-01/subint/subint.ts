`use strict`;
export {};

//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(num: number, arr: number[]) {
    let result: number[] = []
    for (let i = 0; i < arr.length; i++) {
        let arrS = arr[i].toString();
        let numS = num.toString();
        if (arrS.indexOf(numS) !== -1){
            result.push(i);
        }
    } return result
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'


