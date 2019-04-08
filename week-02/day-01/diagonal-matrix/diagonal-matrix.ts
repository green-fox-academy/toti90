`use strict`;
export{};

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 6;

let result: number[][] = [];
for (let i = 1; i<=size; i++) {
    let row = new Array(size).fill(0,0,size);
    row.splice(size-i,1,1);
    result.push(row);
}

console.log(result);