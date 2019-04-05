'use strict';
//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
function substr(str: string, keyword: string) {
    let indexofNumber = str.indexOf(keyword);
    if (indexofNumber !== -1) {
        return indexofNumber;
    }else {
        return "Your searched word couldn't be found in the original sentence";
    };
}
//  Example
// should print: `17`
console.log(substr("this is what I'm searching in", "searching"));
// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));