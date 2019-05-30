`use strict`;

const welcome_header = document.querySelector('#welcome_header')
const url = window.location.search
const content = document.querySelector('#content')
const logOut = document.querySelector('#logout_button')
const postBtn = document.querySelector('.postPost')
const titleInput = document.querySelector('.titleInput')
const urlInput = document.querySelector('.urlInput')


let user = url.match(/\=(\w*)/)[1]

let httpRequest = new XMLHttpRequest();

window.onload = () => {
  windowRender()
}
let data

function windowRender() {
  httpRequest.open('GET', `http://localhost:3100/posts`, true);
  httpRequest.setRequestHeader('username', user)
  httpRequest.send()
  httpRequest.onload = (response) => {
    welcome_header.innerHTML = `Welcome on board ${user}`
    data = JSON.parse(httpRequest.responseText)
    for (let i = 0; i < data.length; i++) {
      let ul = document.createElement('ul')
      for (let element of Object.keys(data[i])) {
        let li = document.createElement('li')
        li.classList.add(`${element}${i + 1}`)
        li.innerHTML = `${element}: ${data[i][element]}`
        ul.appendChild(li)
      }
      let buttonUp = document.createElement('button')
      buttonUp.addEventListener('click', voteUp)
      data[i].vote > 0 ? buttonUp.classList.add('votedUp') : ''
      buttonUp.setAttribute('number', `${i + 1}`)
      buttonUp.classList.add(`buttonUp${i + 1}`)
      buttonUp.innerHTML = "Vote up"
      let buttonDown = document.createElement('button')
      buttonDown.addEventListener('click', voteDown)
      data[i].vote < 0 ? buttonDown.classList.add('votedDown') : ''
      buttonDown.setAttribute('number', `${i + 1}`)
      buttonDown.classList.add(`buttonDown${i + 1}`)
      buttonDown.innerHTML = "Vote down"
      content.appendChild(ul)
      content.appendChild(buttonUp)
      content.appendChild(buttonDown)
      if (user === data[i]['owner_name']) {
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete post'
        content.appendChild(deleteButton)
        let updateButton = document.createElement('button')
        updateButton.innerHTML = 'Update post'
        content.appendChild(updateButton)
      }
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
  let buttonNumb = button.getAttribute('number')
  httpRequest.open('PUT', `http://localhost:3100/posts/${buttonNumb}/upvote`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    let data = JSON.parse(httpRequest.responseText)
    document.querySelector(`.vote${buttonNumb}`).innerHTML = `vote: ${data['vote']}`
    document.querySelector(`.score${buttonNumb}`).innerHTML = `score: ${data['score']}`
    let downButton = document.querySelector(`.buttonDown${buttonNumb}`)
    let isDownButtonPressed = downButton.getAttribute('class').includes('votedDown')
    isDownButtonPressed ? downButton.classList.remove('votedDown') : ''
    data['vote'] === '0' ? button.classList.remove('votedUp') : button.classList.add('votedUp')
  }
  httpRequest.send()
}

const voteDown = () => {
  let button = window.event.target
  let buttonNumb = button.getAttribute('number')
  httpRequest.open('PUT', `http://localhost:3100/posts/${buttonNumb}/downvote`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    let data = JSON.parse(httpRequest.responseText)
    document.querySelector(`.vote${buttonNumb}`).innerHTML = `vote: ${data['vote']}`
    document.querySelector(`.score${buttonNumb}`).innerHTML = `score: ${data['score']}`
    let upButton = document.querySelector(`.buttonUp${buttonNumb}`)
    let isUpButtonPressed = upButton.getAttribute('class').includes('votedUp')
    isUpButtonPressed ? upButton.classList.remove('votedUp') : ''
    data['vote'] === '0' ? button.classList.remove('votedDown') : button.classList.add('votedDown')
  }
  httpRequest.send()
}

const post = () => {
  let postTitle = titleInput.value
  let postUtl = urlInput.value
  httpRequest.open('POST', `http://localhost:3100/posts`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
  }
  httpRequest.send()
}

let input = document.querySelectorAll('input')

document.querySelector('.submit').addEventListener('click', () => {
  var body = {
    "title": `${input[0].value}`,
    "url": `${input[1].value}`
  }
  httpRequest.open('POST', `http://localhost:3100/posts`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    location.reload(windowRender())
    //console.log(JSON.parse(response.target.responseText)[0])
  }
  httpRequest.send(JSON.stringify(body));
})

