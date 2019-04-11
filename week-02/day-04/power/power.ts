`use strict`;
// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the 
// n power, so powerN(3, 2) is 9 (3 squared).

function power(base:number, n:number):number {
    if (n === 1) {
        return base
    }
    return base * power(base, n-1)
}

console.log(power(2,1));
