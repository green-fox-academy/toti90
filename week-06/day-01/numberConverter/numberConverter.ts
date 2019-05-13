`use strict`

export function numberConverter(number:number): string {
  let numberArr = ["one","two","three","four","five","six","seven","eight","nine"]
  let splittedStringArray = number.toString().split("")
  let result = ""
  for (let i of splittedStringArray) {
    result += numberArr[parseInt(i)-1]
    result += " "
  }
  return result
}

console.log(numberConverter(745))