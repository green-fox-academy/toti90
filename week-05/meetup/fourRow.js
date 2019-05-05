
let input = [ 'F_Yellow',
'G_Red',
'D_Yellow',
'C_Red',
'A_Yellow',
'A_Red',
'E_Yellow',
'D_Red',
'D_Yellow',
'F_Red',
'B_Yellow',
'E_Red',
'C_Yellow',
'D_Red',
'F_Yellow',
'D_Red',
'D_Yellow',
'F_Red',
'G_Yellow',
'C_Red',
'F_Yellow',
'E_Red',
'A_Yellow',
'A_Red',
'C_Yellow',
'B_Red',
'E_Yellow',
'C_Red',
'E_Yellow',
'G_Red',
'A_Yellow',
'A_Red',
'G_Yellow',
'C_Red',
'B_Yellow',
'E_Red',
'F_Yellow',
'G_Red',
'G_Yellow',
'B_Red',
'B_Yellow',
'B_Red' ]

// let columns = ["A", "B", "C", "D", "E", "F", "G"]
// let matrix = [[], [], [], [], [], [], []]

// for (drops of input) {
//   let row = columns.indexOf(drops.substr(0, 1))
//   if (drops.charAt(2) === 'Y') {
//     matrix[row].push(1)
//   } else if (drops.charAt(2) === 'R') {
//     matrix[row].push(5)
//   }
// }

function fillWithZeros(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    num = 6 - matrix[i].length
    for (let j = 0; j < num; j++) {
      matrix[i].push(0)
    }
  } return matrix
}

function checkRows(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length > 3) {
      for (let j = 0; j < matrix[i].length - 3; j++) {
        if ((matrix[i].slice(j, j + 4).reduce((prev, curr) => curr + prev, 0)) === 4) {
          return "Yellow win"
        } else if (((matrix[i].slice(j, j + 4).reduce((prev, curr) => curr + prev, 0)) === 20)) {
          return "Red win"
        }
      }
    }
  } return "Draw"
}

function rotateMatrix(matrix) {
  let rotatedMatrix = []
  for (let i = 0; i < 6; i++) {
    let row = []
    for (let j = 0; j < 7; j++) {
      row.push(matrix[j][i])
    }
    rotatedMatrix.push(row)
  }
  return rotatedMatrix
}

function diagonals(matrix) {
  let diagonal = []
  for (let i = 0; i < 4; i++) {
    let row_1 = []
    let row_2 = []
    let row_3 = []
    for (let j = 0; j < 4; j++) {
      row_1.push(matrix[i + j][j])
      row_2.push(matrix[i + j][j + 1])
      row_3.push(matrix[i + j][j + 2])
    }
    diagonal.push(row_1)
    diagonal.push(row_2)
    diagonal.push(row_3)
  }
  return diagonal
}
function diagonalsBack(matrix) {
  let diagonalBack = []
  for (let i = matrix.length - 1; i > 2; i--) {
    let row_1 = []
    let row_2 = []
    let row_3 = []
    for (let j = 0; j < 4; j++) {
      row_1.push(matrix[i - j][j])
      row_2.push(matrix[i - j][j + 1])
      row_3.push(matrix[i - j][j + 2])
    }
    diagonalBack.push(row_1)
    diagonalBack.push(row_2)
    diagonalBack.push(row_3)
  }
  return diagonalBack
}


// matrix = fillWithZeros(matrix)
// console.log(matrix)
// matrix = diagonalsBack(matrix)
// console.log(matrix)

function whoIsWinner(inputMatrix) {
  let columns = ["A", "B", "C", "D", "E", "F", "G"]
  let matrix = [[], [], [], [], [], [], []]

  for (drops of input) {
    let row = columns.indexOf(drops.substr(0, 1))
    if (drops.charAt(2) === 'Y') {
      matrix[row].push(1)
    } else if (drops.charAt(2) === 'R') {
      matrix[row].push(5)
    }
  }
  
  matrix = fillWithZeros(matrix)
  console.log(matrix)
  if (checkRows(matrix) !== "Draw") {
    return checkRows(matrix)
  }
  matrix_rotated = rotateMatrix(matrix)
  if (checkRows(matrix_rotated) !== "Draw") {
    return checkRows(matrix_rotated)
  }
  diagonal_1 = diagonals(matrix)
  if (checkRows(diagonal_1) !== "Draw") {
    return checkRows(diagonal_1)
  }
  diagonal_2 = diagonalsBack(matrix)
  return checkRows(diagonal_2)
}

console.log(whoIsWinner(input))





