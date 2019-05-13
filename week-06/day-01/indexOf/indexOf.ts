`use strict`

export function indexOf(list:any[], search:any): number {
  let number = 0
  for (let i of list) {
    if (i === search) {
      return number
    } else {
      number++
    }
  }
  return -1
}