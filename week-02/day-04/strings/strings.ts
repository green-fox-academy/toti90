`use strict`

// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars 
// have been changed to 'y' chars.

function stringF(s:string):string {
    if (s.length === 1) {
        if (s === "x") {
            return "y"
        }
            return s
    }if (s[0] === "x") {
        return "y".concat(stringF(s.slice(1,s.length))) 
    }
    return s[0].concat(stringF(s.slice(1,s.length))) 
}


console.log(stringF("x"))

