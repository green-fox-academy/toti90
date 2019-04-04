'use strict';

let lineCount: number = 8;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i = 1; i <= lineCount; i++) {
    if (i ==1 || i == lineCount) {
        console.log("%".repeat(lineCount));
    } else {
        console.log("%" + " ".repeat(lineCount-2) + "%");
    }
}