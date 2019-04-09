`use strict`;
export{};

// Represent the following products with their prices
//     Product	Amount
//     Milk	1.07
//     Rice	1.59
//     Eggs	3.14
//     Cheese	12.60
//     Chicken Breasts	9.40
//     Apples	2.31
//     Tomato	2.58
//     Potato	1.75
//     Onion	1.10

// Represent Bob's shopping list
//     Product	Amount
//     Milk	3
//     Rice	2
//     Eggs	2
//     Cheese	1
//     Chicken Breasts	4
//     Apples	1
//     Tomato	2
//     Potato	1

// Represent Alice's shopping list
//     Product	Amount
//     Rice	1
//     Eggs	5
//     Chicken Breasts	2
//     Apples	1
//     Tomato	10

// Create an application which solves the following problems.

// How much does Bob pay?
// How much does Alice pay?
// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)


let shopList1 = {
    "Milk":	1.07,
    "Rice":	1.59,
    "Eggs":	3.14,
    "Cheese":	12.60,
    "Chicken Breasts":	9.40,
    "Apples":	2.31,
    "Tomato":	2.58,
    "Potato":	1.75,
    "Onion":	1.10,
}

let shopList2 = {
    "Milk":	3,
    "Rice":	2,
    "Eggs":	2,
    "Cheese":	1,
    "Chicken Breasts":	4,
    "Apples":	1,
    "Tomato":	2,
    "Potato":	1
}

let shopList3 = {
    "Rice":	1,
    "Eggs":	5,
    "Chicken Breasts":	2,
    "Apples":	1,
    "Tomato":	10
}

function shopApp(obj1:any,obj2:any,obj3:any) {
    let names = ["Tomi", "Bob", "Alice"]
    let bobsum = 0;
    let bobSum = Object.keys(obj1).map(x => bobsum+=obj1[x])
    let tomisum = 0;
    let tomiSum = Object.keys(obj1).map(x => tomisum+=obj1[x])
    let alicesum = 0;
    let aliceSum = Object.keys(obj3).map(x => alicesum+=obj3[x])
    let ricesNumbers = [obj1["Rice"],obj2["Rice"],obj3["Rice"]]
    let moreRiceBuyer = names[ricesNumbers.indexOf(Math.max(...ricesNumbers))]
    let itemNumbers = [Object.keys(obj1).length,Object.keys(obj2).length,Object.keys(obj3).length]
    let moreItemBuyers = names[itemNumbers.indexOf(Math.max(...itemNumbers))]
    let amountNumbers: number[] = [tomiSum[tomiSum.length-1], bobSum[bobSum.length-1], aliceSum[aliceSum.length-1]];
    let moreAmountBuyers = names[amountNumbers.indexOf(Math.max(...amountNumbers))]
    return `Bob pay sum: ${bobSum[bobSum.length-1]}\nAlice pay sum: ${aliceSum[aliceSum.length-1]}
${moreRiceBuyer} bought the most rice\n${moreItemBuyers} bought the most item\n${moreAmountBuyers} bough the most amount`;
}

console.log(shopApp(shopList1,shopList2,shopList3));
