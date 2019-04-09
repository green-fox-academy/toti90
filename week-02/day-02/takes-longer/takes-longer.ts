'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let plusString: String = "always takes longer than";

let quoteArray = quote.split(" ");
quote = quoteArray.slice(0,3).join(" ") + " " + plusString + " " + quoteArray.slice(3).join(" ");

console.log(quote);