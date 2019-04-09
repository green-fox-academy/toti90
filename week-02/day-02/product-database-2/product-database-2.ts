`use strict`;
export{};
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
// Which products cost less than 201? (just the name)
// Which products cost more than 150? (name + price)

let shopL: any = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550
}

function shopL2(obj: any) {
    let LessThan201 = Object.keys(obj).filter(x => obj[x]<201);
    let moreThan150Names = Object.keys(obj).filter(x => obj[x]>150);
    let answer = ``;
    for (let i=0;i<moreThan150Names.length; i++) {
        answer += `${moreThan150Names[i]}'s price is ${obj[moreThan150Names[i]]}\n`
    }
    return `${LessThan201} product is less than 201 \nand ${answer}`;
}

console.log(shopL2(shopL));

