'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(list:string[]) {
    for (let i =0; i<list.length; i++) {
        if (list[i] === "do") {
            list[i] = "cannot"
        } else if (list[i] === "cannot") {
            list[i] = "do"
        }
    }return list.join(" ")
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;