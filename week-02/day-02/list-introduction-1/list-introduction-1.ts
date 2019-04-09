`use strict`;
// We are going to play with lists. Feel free to use the built-in methods where possible.

// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add William to the list
// Print out whether the list is empty or not
// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
// Print out the 3rd element
// Iterate through the list and print out each name
    // William
    // John
    // Amanda
// Iterate through the list and print
    // 1. William
    // 2. John
    // 3. Amanda
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
    // Amanda
    // William
// Remove all elements

let names: string[] = [];
console.log(names.length);
names.push("William");
console.log(names);
names.push("John", "Amanda");
console.log(names.length);
console.log("third name is: " + names[2]);
names.map(x => console.log(x));
names.map(x => console.log(`${names.indexOf(x)+1}. ${x}`));
names.splice(1,1);
names.reverse().map(x => console.log(x));
names.splice(0,names.length);








