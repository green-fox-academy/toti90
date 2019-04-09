'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(list: number[], checklist: number[]) {
    let result: boolean = false
    for (let i = 0; i < checklist.length; i++) {
        if (list.indexOf(checklist[i]) !== -1) {
            result = true;
        } else {
            result = false;
            break;
        } 
    }return result
}

console.log(checkNums(listOfNumbers, [4, 8, 12, 13, 8]))

export{};
