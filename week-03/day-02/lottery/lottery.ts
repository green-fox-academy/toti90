`use strict`
export{};

// Create a method that find the 5 most common lottery numbers in lottery.csv
//Read the file
const fs = require('fs');
const content = fs.readFileSync("lottery.txt", 'utf8')

function lottery(file:any) {
  //split readed file to array at every new line
  let rows = content.split('\n')
  //make an empty array and find 5 lottery number in every row and add to it
  let numbers = []
  for (let i=0;i<rows.length;i++) {
    let indexZero = rows[i].search(/[0-9]{1,2};[0-9]{1,2};[0-9]{1,2};[0-9]{1,2};[0-9]{1,2}/g)
    numbers.push(rows[i].slice(indexZero,rows[i].length))
  }
  //conver ever string number to real number
  // let numbersNumber = []
  // for (let i=0;i<numbers.length;i++) {
  //   let rowNumbers = numbers[i].split(";")
  //   for (let j=0;j<5;j++) {
  //     numbersNumber.push(parseInt(rowNumbers[j]))
  //   }
  // }
  let occurances:any = {}
  for (let i = 0;i<numbers.length; i++) {
    if (occurances[numbers[i]] !== undefined) {
      occurances[numbers[i]]++
    } else {
      occurances[numbers[i]] = 1
    }
  }return Object.keys(occurances).sort(function(a,b){return occurances[a]-occurances[b]}).reverse().slice(0,5)
}

console.log(lottery(content))




