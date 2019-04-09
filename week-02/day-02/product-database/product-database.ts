`use strict`;

// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.
//     Product name (key)	Price (value)
//     Eggs	                200
//     Milk	                200
//     Fish	                400
//     Apples	            150
//     Bread	            50
//     Chicken	            550
// Create an application which solves the following problems.
// How much is the fish?
// What is the most expensive product?
// What is the average price?
// How many products' price is below 300?
// Is there anything we can buy for exactly 125?
// What is the cheapest product?

let shopL: any = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550
}

function shopFunction(obj:any) {
    let fishPrice = obj["Fish"];
    let maxPrice = Math.max(...Object.keys(obj).map(x => obj[x]))
    let moreThan300 = Object.keys(obj).filter(x => obj[x]>300)
    let exactly125 = Object.keys(obj).filter(x => obj[x]===125)
    let minPrice = Math.min(...Object.keys(obj).map(x => obj[x]))
    let minItem = Object.keys(obj).filter(x => (obj[x] === minPrice));
    return `Fish price is ${fishPrice}\nmax Price is: ${maxPrice}\nPrice is more than 300: ${moreThan300.length} product
We can buy ${exactly125.length !== 0 ? exactly125:"nothing"} for 125\nThe cheapest item is ${minItem}`
}

console.log(shopFunction(shopL));
