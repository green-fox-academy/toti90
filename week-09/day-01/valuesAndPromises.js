`use strict`;

function attachTitle(value) {
  return `DR. ${value}`
}

var fulfilled = new Promise(function (fulfill, reject) {
  fulfill('MANHATTAN')
});

fulfilled
  .then(attachTitle)
  .then(console.log)