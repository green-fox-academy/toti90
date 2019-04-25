`use strict`

//Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, 
//and numbers as values that shows how many occurrences there are.

export function countLetter(word:string):object {
  let wordArray:string[] = word.replace(/\s/g, "").split("");
  let result:any = {}
  wordArray.forEach((val,ind) => (result[val] === undefined) ? result[val]=1:result[val]++)
  return result
}
