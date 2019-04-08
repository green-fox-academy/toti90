`use strict`;
export { };

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function advancedBubble(arr: number[], descending = false) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                let number = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = number
            }
        }
    } if (!descending) {
        return arr
    }
    else {
        return arr.reverse()
    }
}


//  Example:
console.log(advancedBubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]


