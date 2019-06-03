`use strict`;

var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
  reject(new Error('Error message 1'))
});

promise.then(console.log)

var promise2 = Promise.resolve('SECRET VALUE');
var promise3 = Promise.reject('SECRET VALUE ERROR');

promise2.then(console.log)
promise3.catch(console.log)