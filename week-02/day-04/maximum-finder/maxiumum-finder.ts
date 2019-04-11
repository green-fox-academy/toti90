`use strict`

// Write a function that finds the largest element of an array using recursion.

function max(arr:number[]):number {
    if (arr.length === 1) {
        return arr[0]
    }
    if (arr[0]>=arr[1]) {
        arr.splice(1,1)
        return max(arr)
    } else {
        arr.splice(0,1)
        return max(arr)
    }
}

let a = [5,4,2,6,8,3,12,9]
console.log(max(a))





