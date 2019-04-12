`use strict`;
export{};

// We are going to represent a shopping list in a list containing strings.

// Create a list with the following items.
// Eggs, milk, fish, apples, bread and chicken
// Create an application which solves the following problems.
// Do we have milk on the list?
// Do we have bananas on the list?

let shoppingList = ["eggs", "milk", "fish", "apples", "bread", "chicken"];

function shop(item:any, list: string[]){
    return list.indexOf(item) !== -1 ? `${item} is in the list`: `no ${item} in the list`
}

console.log(shop("eggs", shoppingList));
console.log(shop("bananas", shoppingList));
