`use strict`

let promise = new Promise(function (resolve,reject) {
  setTimeout(() => {reject(new Error('REJECTED!'))}, 300)
})

function onReject(error) {
    console.log(error.message)
}

promise
  .then((data => onReject(data)),(reject => onReject(reject)))