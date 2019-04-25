`use strict` 

export function fibonacci(index:number):number {
  if (index <= 0) {
    return 0
  }
  else if (index === 1 || index === 2) {
    return 1
  }
  return fibonacci(index-2)+fibonacci(index-1)
}


