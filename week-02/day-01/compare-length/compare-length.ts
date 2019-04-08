"use strict";

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList: number[] = [1,2,3];
let secondList: number[] = [4,5];

if (secondList.length > firstList.length) {
    console.log("Second list has got more element");
} else if (secondList.length === firstList.length){
    console.log("Same number of elements in each list");
} else {
    console.log("First list has got more element");
}

