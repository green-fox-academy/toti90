`use strict`;

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function stringFunction(s:string):string {
    if (s.length === 1) {
        if (s === "x") {
            return ""
        }
            return s
    }if (s[0] === "x") {
        return "".concat(stringFunction(s.slice(1,s.length))) 
    }
    return s[0].concat(stringFunction(s.slice(1,s.length))) 
}


console.log(stringFunction("xsasdrxx"))

