`use strict`


const tableBody = document.querySelector('tbody')
const button = document.querySelector('button')
const fields = ['book_name', 'aut_name', 'cate_descrip', 'pub_name', 'book_price']
const catField = document.querySelector('#cat');
const pubField = document.querySelector('#pub')
const lessField = document.querySelector('#less')
const greaterField = document.querySelector('#great')
const searchFields = [catField,pubField,lessField,greaterField]

window.onload = () => {
  getContent()
}

button.addEventListener('click', function (event) {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
}
  getContent()
});


function getContent() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', makeURl());
  httpRequest.onload = function () {
  let data = JSON.parse(httpRequest.responseText);
  let tr = document.createElement('tr')
  for (let col of fields) {
  let td = document.createElement('td')
  td.classList.add('title')
  td.innerHTML = col
  tr.appendChild(td)
}
tableBody.appendChild(tr)
  for (let i=0;i<data.length;i++) {
    let tr = document.createElement('tr')
    for (let col of fields) {
      let td = document.createElement('td')
      td.innerHTML = data[i][col]
      tr.appendChild(td)
    }
    tableBody.appendChild(tr)
  }
}
httpRequest.send()
}

function makeURl() {
  let UrlRoot = `http://localhost:3000/booklist`
  let first = true;
  for (let field of searchFields) {
    if (field.value !== "") {
      if (!first) {
        UrlRoot+=`&${field.name}=${field.value}`
      } else {
        UrlRoot+=`?${field.name}=${field.value}`
        first = false;
      }
    }
  }
  console.log(UrlRoot)
  return UrlRoot

}