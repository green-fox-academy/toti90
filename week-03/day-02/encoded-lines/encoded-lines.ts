`use strict`
export{};

// Create a method that decrypts encoded-lines.txt

const fs = require('fs');
const content = fs.readFileSync("encoded.txt", 'utf8')

function encode(file:any) {
  let split = file.split("\n")
  let result = ""
  for (let i=0;i<split.length;i++) {
    for (let j=0;j<split[i].length;j++) {
      if (split[i][j] !== " ") {
        result += String.fromCharCode(split[i].charCodeAt(j)-1)
      } else {
        result += " "
      }
    } result += `\n`
  }
  return result
}

console.log(encode(content))