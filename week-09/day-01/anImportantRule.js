`use strict`;

function alwaysThrows() {
  let error = new Error('OH NOES')
  return error.message
}

function iterate(integer) {
  console.log(integer)
  integer++
  return integer
}

// let promise = new Promise((resolve,reject) => {
//   resolve(iterate(1))
// })

Promise.resolve(1).then(iterate).then(iterate).then(alwaysThrows).catch(console.log)
