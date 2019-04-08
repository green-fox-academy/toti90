'use strict';
// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

let nameToGreet = "Greenfox";

function greet(name?: string) {
    if (name) {
        return `Greetings, dear ${name}`;
    }else {
        return "There is no name to greet";
    }
}
console.log(greet(nameToGreet));