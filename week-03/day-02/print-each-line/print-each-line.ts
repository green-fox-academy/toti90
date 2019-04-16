`use strict`

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

function readFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, 'utf8')
  }
  catch (e) {
    let newError = new Error(`Unable to read file: ${fileName}`)
    console.log(newError.message)
  }

}

console.log(readFile("myFilee.txt"))
// if (some !== undefined) {
//   console.log(some)
// }


