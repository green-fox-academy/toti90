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
let elements = ["Bread", "Milk", "Orange", "Tomato"]
let buttons = ["Up", ">", "X", "Down"]
let selected = 0;
for (let i=0;i<elements.length;i++) {
  for (let j = 0; j<3;j++) {
    let row = document.createElement('tr')
    let rowContent = document.createElement('td')
    if (j === 0) {
      rowContent.innerHTML = elements[i]
      row.appendChild(rowContent)
      tables[0].appendChild(row)
      if (i === selected) {
        rowContent.setAttribute('class', 'selected')
      }
    }
    else if (j === 2) {
      rowContent.innerHTML = ""
      row.appendChild(rowContent)
      tables[2].appendChild(row)
    
    } else {
      let button = document.createElement('button')
      button.innerHTML = buttons[i]
      rowContent.appendChild(button)
      row.appendChild(rowContent)
      tables[1].appendChild(row)
    }
  }
}
let leftAmount = 3
let buttonDown = document.querySelectorAll('button')[3]
buttonDown.onclick = () => {
  if (selected < leftAmount) {
    document.querySelectorAll('table')[0].querySelectorAll('td')[selected].removeAttribute('class')
    selected++
    document.querySelectorAll('table')[0].querySelectorAll('td')[selected].setAttribute('class', 'selected')
  }
};

let buttonUp = document.querySelectorAll('button')[0]
buttonUp.onclick = () => {
  if (selected > 0) {
    document.querySelectorAll('table')[0].querySelectorAll('td')[selected].removeAttribute('class')
    selected--
    document.querySelectorAll('table')[0].querySelectorAll('td')[selected].setAttribute('class', 'selected')
  }
};

let buttonDelete = document.querySelectorAll('button')[2]
buttonDelete.onclick = () => {
  let selElement = document.querySelectorAll('table')[0].querySelectorAll('tr')[selected]
  document.querySelectorAll('table')[0].removeChild(selElement)
  let row = document.createElement('tr')
  let rowContent = document.createElement('td')
  rowContent.innerHTML = ""
  row.appendChild(rowContent)
  tables[0].appendChild(row)
  selected = 0
  leftAmount--
  if (leftAmount > -1) {
    document.querySelectorAll('table')[0].querySelectorAll('td')[selected].setAttribute('class', 'selected')
  }
};
let amountRightTable=0
let buttonRight = document.querySelectorAll('button')[1]
buttonRight.onclick = () => {
  let selElement = document.querySelectorAll('table')[0].querySelectorAll('tr')[selected]
  document.querySelectorAll('table')[2].querySelectorAll('td')[amountRightTable].innerHTML = selElement.querySelector('td').innerHTML
  document.querySelectorAll('table')[0].removeChild(selElement)
  let row = document.createElement('tr')
  let rowContent = document.createElement('td')
  rowContent.innerHTML = ""
  row.appendChild(rowContent)
  tables[0].appendChild(row)
  selected = 0;
  leftAmount--
  if (leftAmount > -1) {
    document.querySelectorAll('table')[0].querySelectorAll('td')[selected].setAttribute('class', 'selected')
  }
  amountRightTable++
};