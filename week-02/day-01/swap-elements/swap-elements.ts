`use strict`;

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: String[] = ["Arthur", "Boe", "Chloe"];

let firstElement = abc[0];
let thirdElement = abc[2];
abc.pop();
abc.shift();
abc.splice(1, 0, firstElement);
abc.splice(0, 0, thirdElement);
console.log(abc);

