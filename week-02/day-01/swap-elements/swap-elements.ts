`use strict`;

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: String[] = ["Arthur", "Boe", "Chloe"];

let firstElement = abc[0];
let thirdElement = abc[2];
abc[0] = thirdElement;
abc[2] = firstElement;
console.log(abc);

