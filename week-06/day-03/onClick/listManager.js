/* Do not modify this file -->
  <!--
    1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
    2, Achive the same design by css
    3, Try not to use css classes
    4, Add some functionality to the buttons
        - If "Up" is clicked the selection should move up by one
        - If "Down" is clicked the selection should move down by one
        - If "X" is clicked the selected item should be removed and the first item should be selected
        - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
    5, Check all the edge cases, no error should be printed to the console
   */

//Create 3 same table
for (let i=0;i<3;i++) {
  let table = document.createElement('table')
  document.body.appendChild(table)
}
let tables = document.querySelectorAll('table')
let elements = ["Bread", "Milk", "Orange", "Tomato", "Pearl", "Ham"]
let buttons = ["Up", ">", "X", "Down"]
let selected = 0;
let leftAmount = elements.length-1
let amountRightTable=0

//Fill Tables

fillTable(0, elements)
fillTable(1,buttons,true)
fillTable(2," ".repeat(elements.length-1).split(" "))

//functions

function fillTable(tableIndex, contents, button, deleted) {
  if (button === true) {
    for (let x of contents) {
      tables[tableIndex].appendChild(makeRow(x,true))
    }
  }
  else {
    for (let x of contents) {
      tables[tableIndex].appendChild(makeRow(x))
    }
    if (tableIndex === 0 && !deleted) {
      selectRow(selected)
    }
  }
  
}


function makeRow(content, button) {
  let row = document.createElement('tr')
  let rowContent = document.createElement('td')
  if (button === true) {
    let button = document.createElement('button')
    button.innerHTML = content
    rowContent.appendChild(button)
    row.appendChild(rowContent)
  } else {
    rowContent.innerHTML = content
    row.appendChild(rowContent)
  }
  return row
}

function selectRow(selectRow) {
  document.querySelectorAll('table')[0].querySelectorAll('td')[selectRow].setAttribute('class', 'selected')
}

function unselectRow(selectRow) {
  document.querySelectorAll('table')[0].querySelectorAll('td')[selectRow].removeAttribute('class')
}

function deleteRow(deleteRow) {
  let selElement = document.querySelectorAll('table')[0].querySelectorAll('tr')[deleteRow]
  document.querySelectorAll('table')[0].removeChild(selElement)
}

//Buttons
let buttonDown = document.querySelectorAll('button')[3]
buttonDown.onclick = () => {
  if (selected < leftAmount) {
    unselectRow(selected)
    selected++
    selectRow(selected)
  }
};

let buttonUp = document.querySelectorAll('button')[0]
buttonUp.onclick = () => {
  if (selected > 0) {
    unselectRow(selected)
    selected--
    selectRow(selected)
  }
};

let buttonDelete = document.querySelectorAll('button')[2]
buttonDelete.onclick = () => {
  if (leftAmount === -1) {
    alert('you deleted/moved everything from original list')
    return
  }
  unselectRow(selected)
  deleteRow(selected)
  fillTable(0,[""], false, true)
  selected = 0
  leftAmount--
  if (leftAmount > -1) {
    selectRow(selected)
  }
};

let buttonRight = document.querySelectorAll('button')[1]
buttonRight.onclick = () => {
  if (leftAmount === -1) {
    alert('you deleted/moved everything from original list')
    return
  }
  unselectRow(selected)
  let selElement = document.querySelectorAll('table')[0].querySelectorAll('tr')[selected]
  document.querySelectorAll('table')[2].querySelectorAll('td')[amountRightTable].innerHTML = selElement.querySelector('td').innerHTML
  deleteRow(selected)
  fillTable(0,[""], false, true)
  selected = 0;
  leftAmount--
  if (leftAmount > -1) {
    selectRow(selected)
  }
  amountRightTable++
};

