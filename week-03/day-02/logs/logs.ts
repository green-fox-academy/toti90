`use strict`
export{};

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

let content = fs.readFileSync("log.txt", 'utf8')
console.log(content.split("\n").length)
function uniqueIp(file:any) {
  const fileArray = file.split("\n")
  let result = []
  for (let i = 0;i<fileArray.length;i++) {
    let startIndex = fileArray[i].search(/[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{2,3}/g)
    if (startIndex !== -1 && result.indexOf(fileArray[i].slice(startIndex,startIndex+11)) === -1) {
      result.push(fileArray[i].slice(startIndex,startIndex+11))
    }
  }
  return result
}
console.log(uniqueIp(content).length)
