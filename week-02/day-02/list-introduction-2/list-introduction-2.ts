`use strict`;

// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
// Create a new list ('List B') with the values of List A
// Print out whether List A contains Durian or not
// Remove Durian from List B
// Add Kiwifruit to List A after the 4th element
// Compare the size of List A and List B
// Get the index of Avocado from List A
// Get the index of Durian from List B
// Add Passion Fruit and Pummelo to List B in a single statement
// Print out the 3rd element from List A

let listA = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB = listA;
console.log(listA.indexOf("Durian") !== -1 ? "listA contain Durian":"listA NOT contain Durian");
listB.splice(listB.indexOf("Durian"),1);
listA.splice(4,0,"Kiwifruit");
console.log(listA.length === listB.length ? "same size":"different size");
console.log(listA.indexOf("Avocado"));
console.log(listB.indexOf("Durian"));
listB.splice(listB.length,0,"Passion Fruit", "Pammelo");
console.log(listA[2]);






