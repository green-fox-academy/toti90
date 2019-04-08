'use strict';
//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one
function substr(str: string, keyword: string) {
    let lengthOfKey: number = keyword.length;
    let start = -1;
    for (let i=1;i<str.length;i++) {
        if (str.slice(i,i+lengthOfKey) === keyword) {
            start = i;
        } 
    } return start;
}
//  Example
// should print: `17`
console.log(substr2("this is what I'm searching in", "searching"));
// should print: `-1`
console.log(substr2("this is what I'm searching in", "not"));

function substr2(str: string, keyword: string) {
    let lengthOfKey: number = keyword.length;
    let start = -1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === keyword[0]) {
            for (let j = 1; j <= lengthOfKey; j++) {
                if (str[i + j] === keyword[j] && str[i + lengthOfKey] !== undefined) {
                    start = i;
                }
            }
        } return start;
    }