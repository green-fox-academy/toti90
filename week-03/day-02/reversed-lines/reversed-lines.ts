`use strict`
export{};

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
const content = fs.readFileSync("reversed-lines.txt", 'utf8')

function reversed(file:any) {
  let split = file.split("\n")
  let result = ""
  for (let i=0;i<split.length;i++) {
    for (let j=split[i].length;j>0;j--) {
      result += split[i].slice(j-1,j)
    } result += `\n`
  }
  return result
}

console.log(reversed(content))