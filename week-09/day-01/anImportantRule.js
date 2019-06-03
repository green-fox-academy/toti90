'use strict';

function iterate(num) {
 console.log(num);
 return num + 1;
}

function alwaysThrows() {
 throw new Error('OH NOES');
}

function onReject(error) {
 console.log(error.message);
}

Promise.resolve(iterate(1))
.then(data=>iterate(data))
.then(data=>iterate(data))
.then(data=>iterate(data))
.then(data=>iterate(data))
.then(data=>alwaysThrows(data))
.then(data=>iterate(data))
.then(data=>iterate(data))
.then(data=>iterate(data))
.then(data=>iterate(data))
.then(data=>iterate(data))
.catch(onReject);