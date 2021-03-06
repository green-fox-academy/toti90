'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
    { name: 'vodka', inStock: 1, needsCooling: true },
    { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
    { name: 'fresh_cream', inStock: 1, needsCooling: true },
    { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
    { name: 'mint_leaves', inStock: 0, needsCooling: false },
    { name: 'sugar', inStock: 0, needsCooling: false },
    { name: 'lime juice', inStock: 0, needsCooling: true },
    { name: 'soda', inStock: 0, needsCooling: true }
];

function printer(list: any[]) {
    console.log(`+--------------------+---------------+----------+`);
    console.log(`| Ingreditent        | Needs cooling | In stock |`);
    console.log(`+--------------------+---------------+----------+`);
    for (let i = 0; i < list.length; i++) {
        if (list[i].inStock === 1 && list[i].needsCooling === true) {
            console.log("|"+list[i].name+" ".repeat(20-(list[i].name.length))+"|"+list[i].needsCooling+" ".repeat(12-(list[i].needsCooling))+"|"+list[i].inStock+" ".repeat(10-(list[i].inStock))+"|")
        } else if (list[i].inStock !== 1 && list[i].needsCooling === true){
            console.log("|"+list[i].name+" ".repeat(20-(list[i].name.length))+"|"+list[i].needsCooling+" ".repeat(12-(list[i].needsCooling))+"|"+list[i].inStock+" ".repeat(9-(list[i].inStock))+"|")
        } else if (list[i].inStock === 1 && list[i].needsCooling === false){
            console.log("|"+list[i].name+" ".repeat(20-(list[i].name.length))+"|"+list[i].needsCooling+" ".repeat(10-(list[i].needsCooling))+"|"+list[i].inStock+" ".repeat(9-(list[i].inStock))+"|")
        } else if (list[i].inStock !== 1 && list[i].needsCooling === false){
            console.log("|"+list[i].name+" ".repeat(20-(list[i].name.length))+"|"+list[i].needsCooling+" ".repeat(10-(list[i].needsCooling))+"|"+list[i].inStock+" ".repeat(9-(list[i].inStock))+"|")
        }
    }
    console.log(`+--------------------+---------------+----------+`);
}

printer(ingredients)
