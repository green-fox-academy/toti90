`use strict`
export{};

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');


function countLines(fileName: string) {
  try {
    let text = fs.readFileSync(fileName, 'utf8')
    return console.log(text.split(`\n`).length)
  }
  catch (e) {
    let newError = new Error("0")
    console.log(parseInt(newError.message))
  }
}

countLines("myFilee.txt")