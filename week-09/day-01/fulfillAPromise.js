`use strict`;

let myPromise = new Promise(function (resolve) {
    setTimeout(() => {resolve('FULFILLED!')}, 300)
})

myPromise
  .then(response => console.log(response))

