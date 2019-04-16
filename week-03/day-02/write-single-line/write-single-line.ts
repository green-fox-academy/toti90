`use strict`
export {};

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');


function writeSingleLine(fileName: string, content:String) {
  try {
    return fs.writeFileSync(fileName, content)
  }
  catch (e) {
    let newError = new Error(`Unable to write file: ${fileName}`)
    console.log(newError.message)
  }
}
let myName = "Tamás"
writeSingleLine("myFile.txt", myName)
