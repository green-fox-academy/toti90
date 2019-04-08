"use strict";

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(giveNumber: number): number {
    let factorial = 1;
    for (let i = 2; i <= giveNumber; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorio(8));
