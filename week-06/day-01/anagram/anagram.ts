`use strict`

export function anagram(wordOne:string,wordTwo:string):boolean {
  let sortOne = wordOne.toLowerCase().split("").sort().join("")
  let sortTwo = wordTwo.toLowerCase().split("").sort().join("")
  return (sortOne===sortTwo)
}