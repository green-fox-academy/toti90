`use strict`;

const welcome_header = document.querySelector('#welcome_header')
const url = window.location.search
const content = document.querySelector('#content')
const logOut = document.querySelector('#logout_button')

let user = url.match(/\=(\w*)/)[1]

let httpRequest = new XMLHttpRequest();

window.onload = () => {
  windowRender()
}

function windowRender() {
  httpRequest.open('GET', `http://localhost:3100/posts`, true);
  httpRequest.setRequestHeader('username', user)
  httpRequest.send()
  httpRequest.onload = (response) => {
    welcome_header.innerHTML = `Welcome on board ${user}`
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
      buttonUp.addEventListener('click', voteUp)
      data[i].vote > 0 ? buttonUp.classList.add('votedUp'):''
      buttonUp.setAttribute('number', `${i+1}`)
      buttonUp.innerHTML="Vote up"
      let buttonDown = document.createElement('button')
      buttonDown.addEventListener('click', ()=>{voteDown()})
      data[i].vote < 0 ? buttonDown.classList.add('votedDown'):''
      buttonDown.setAttribute('number', `${i+1}`)
      buttonDown.innerHTML="Vote down"
      content.appendChild(ul)
      content.appendChild(buttonUp)
      content.appendChild(buttonDown)
    }
  }
}

logOut.addEventListener('click', (event) => {
  httpRequest.open('GET', `http://localhost:3100/login`, true);
  httpRequest.send()
  httpRequest.onload = (response) => {
      window.open(httpRequest.responseURL, '_self')
  }
})

const voteUp = () => {
  let button = window.event.target
  httpRequest.open('PUT', `http://localhost:3100/posts/${button.getAttribute('number')}/upvote`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.send()
  httpRequest.abort()
  location.reload(windowRender())
}

const voteDown = () => {
  httpRequest.open('PUT', `http://localhost:3100/posts/${window.event.target.getAttribute('number')}/downvote`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.send()
  httpRequest.abort()
  location.reload(windowRender())
  
}
