'use strict';

let lineCount: number = 11;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let halfOfLine: number = Math.ceil(lineCount/2);
if (lineCount%2) {
    for (let i = 1; i <= lineCount; i++) {
        if (i <= halfOfLine) {
            console.log(" ".repeat(halfOfLine-i) + "*".repeat(i) + "*".repeat(i-1));
        } else {
            console.log(" ".repeat(i-halfOfLine) + "*".repeat(lineCount-i) + "*".repeat(lineCount-i+1));
        }
    }
}else {
    for (let i = 1; i <= lineCount; i++) {
        if (i <= halfOfLine) {
            console.log(" ".repeat(halfOfLine-i) + "*".repeat(2*i));
        } else {
            console.log(" ".repeat(i-(halfOfLine+1)) + "*".repeat(lineCount-i) + "*".repeat(2 + (lineCount-i)));
        }
    }
}
