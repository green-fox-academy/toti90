`use strict`;

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');



function ticTacResult(file:any) {
  let content = fs.readFileSync(file, 'utf8')
  let splitContent = content.split("\n")
  let match:String[][] = [splitContent[0],splitContent[1],splitContent[2]]
  let rows = []
  let diagonal = []
  for (let i=0;i<3;i++) {
    rows.push([match[0][i],match[1][i],match[2][i]].join(""))
  }
  diagonal.push([match[0][0],match[1][1],match[2][2]].join(""))
  diagonal.push([match[0][2],match[1][1],match[2][0]].join(""))

  for (let i=0;i<3;i++) {
    if (rows[i] == "OOO" || splitContent[i] == "OOO" || diagonal[i] == "OOO") {
      return "O wins"
    } else if (rows[i] == "XXX" || splitContent[i] == "XXX" || diagonal[i] == "XXX") {
      return "X wins"
    } 
    
  }
  return "draw"
  
}



console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"



