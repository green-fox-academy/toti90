`use strict`

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTen(num: number) {
  // throw error if user try divide by zero
  if (num === 0) {
    throw new Error("fail")
  }
  //return the correct result
  return 10 / num
}
//try the function and catch the error
try {
  console.log(divideTen(0))
} catch (e) {
  console.log(e.message)
}



