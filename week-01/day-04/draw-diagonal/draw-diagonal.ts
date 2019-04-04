'use strict';
let lineCount: number = 1;
// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
let freeSpaces = lineCount-2;
for (let i = 1; i<=lineCount; i++) {
    if (i ==1 || i == lineCount) {
        console.log("%".repeat(lineCount));
    } else {
        console.log("%" + " ".repeat(i-2) + "%" + " ".repeat(freeSpaces-(i-1)) + "%");
    }
}