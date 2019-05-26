`use strict`;

const welcome_header = document.querySelector('#welcome_header')
const url = window.location.search
const content = document.querySelector('#content')



let httpRequest = new XMLHttpRequest();

window.onload = () => {
  httpRequest.open('GET', `http://localhost:3100/posts`, true);
  httpRequest.setRequestHeader('username', url.match(/\=(\w*)/)[1])
  httpRequest.send()
  httpRequest.onload = (response) => {
    welcome_header.innerHTML = `Welcome on board ${url.match(/\=(\w*)/)[1]}`
    let data = JSON.parse(httpRequest.responseText)
    for (let i=0; i<data.length;i++) {
      let ul = document.createElement('ul')
      for (let element of Object.keys(data[i])) {
        let li = document.createElement('li')
        li.classList.add(`${element}`)
        li.innerHTML = `${element}: ${data[i][element]}`
        ul.appendChild(li)
      }
      let buttonUp = document.createElement('button')
      buttonUp.classList.add('up')
      buttonUp.innerHTML="Vote up"
      let buttonDown = document.createElement('button')
      buttonDown.classList.add('down')
      buttonDown.innerHTML="Vote down"
      content.appendChild(ul)
      content.appendChild(buttonUp)
      content.appendChild(buttonDown)
    }
  }
}