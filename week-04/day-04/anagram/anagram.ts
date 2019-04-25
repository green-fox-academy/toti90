`use strict`

//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.

export function anagram (a:string,b:string):boolean {
  let stringOneArray:string[] = a.replace(/\s/g, "").split("");
  let stringTwoArray:string[] = b.replace(/\s/g, "").split("");
  return (stringOneArray.sort().join("") === stringTwoArray.sort().join(""))
}


