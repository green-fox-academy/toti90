`use strict`
export{};

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyText(from:string, to:string) {
  try {
    let text = fs.readFileSync(from, 'utf8')
    return fs.writeFileSync(to, text)
  }
  catch (e) {
    if (e.message.indexOf("permission") !== -1) {
      console.log(`unable to write ${to}`)
    } else if (e.message.indexOf("open") !== -1) {
      console.log(`unable to open ${from}`)
    }
  }
}
copyText("myFile.txt","yourFile.txt")

