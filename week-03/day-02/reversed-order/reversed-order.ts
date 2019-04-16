`use strict`
export{};

// Create a method that decrypts reversed-order.txt

const fs = require('fs');
const content = fs.readFileSync("reversed-order.txt", 'utf8')

function reversedLine(file:any) {
  let split = file.split("\n")
  let result = ""
  for (let i=split.length-1;i>0;i--) {
    result += split[i]
    result += `\n`
  }
  return result
}


console.log(reversedLine(content))