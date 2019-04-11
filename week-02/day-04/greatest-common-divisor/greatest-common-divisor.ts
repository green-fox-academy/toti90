`use strict`;

// Find the greatest common divisor of two numbers using recursion.

function divisor(n1:number,n2:number):number {
    if (n2%n1 === 0) {
        return n1 
    }
    return divisor(n2%n1,n1)
}
console.log(divisor(3768, 1701));
