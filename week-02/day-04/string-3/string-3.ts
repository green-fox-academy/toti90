`use strict`

// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

function stringFunction3(s:string):string {
    if (s.length === 1) {
        return s
    }
    return (s[0]+"*").concat(stringFunction3(s.slice(1,s.length))) 
}


console.log(stringFunction3("Tomi"))
