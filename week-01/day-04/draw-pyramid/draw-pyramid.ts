'use strict';

let lineCount: number = 6;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
for (let i = 1; i <= lineCount; i++) {
    console.log(" ".repeat(lineCount-i) + "*".repeat(i) + "*".repeat(i-1));
}