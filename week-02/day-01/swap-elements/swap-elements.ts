`use strict`;

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: String[] = ["Arthur", "Boe", "Chloe"];

let firstElement = abc[0];
abc.shift();
abc.splice(1, 0, firstElement);
console.log(abc);

