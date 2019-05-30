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
      let idNum = data[i]['id']
      let ul = document.createElement('ul')
      ul.classList.add(`ul${idNum}`)
      for (let element of Object.keys(data[i])) {
        let li = document.createElement('li')
        li.classList.add(`${element}${idNum}`)
        li.innerHTML = `${element}: ${data[i][element]}`
        ul.appendChild(li)
      }
      let buttonUp = document.createElement('button')
      buttonUp.addEventListener('click', voteUp)
      data[i].vote > 0 ? buttonUp.classList.add('votedUp') : ''
      buttonUp.setAttribute('number', `${idNum}`)
      buttonUp.classList.add(`buttonUp${idNum}`)
      buttonUp.innerHTML = "Vote up"
      let buttonDown = document.createElement('button')
      buttonDown.addEventListener('click', voteDown)
      data[i].vote < 0 ? buttonDown.classList.add('votedDown') : ''
      buttonDown.setAttribute('number', `${idNum}`)
      buttonDown.classList.add(`buttonDown${idNum}`)
      buttonDown.innerHTML = "Vote down"
      content.appendChild(ul)
      content.appendChild(buttonUp)
      content.appendChild(buttonDown)
      if (user === data[i]['owner_name']) {
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete post'
        deleteButton.addEventListener('click', deletePost)
        deleteButton.setAttribute(`delete`, `${idNum}`)
        deleteButton.classList.add(`delete${idNum}`)
        content.appendChild(deleteButton)
        let updateButton = document.createElement('button')
        updateButton.innerHTML = 'Update post'
        updateButton.classList.add(`update${idNum}`)
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

//Add new Post
document.querySelector('.submit').addEventListener('click', () => {
  let input = document.querySelectorAll('input')
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

//Delete post

const deletePost = () => {
  const deletedPost = event.target.getAttribute('delete')
  httpRequest.open('Delete', `http://localhost:3100/posts/${deletedPost}`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    content.removeChild(document.querySelector(`.ul${deletedPost}`))
    content.removeChild(document.querySelector(`.buttonUp${deletedPost}`))
    content.removeChild(document.querySelector(`.buttonDown${deletedPost}`))
    content.removeChild(document.querySelector(`.delete${deletedPost}`))
    content.removeChild(document.querySelector(`.update${deletedPost}`))
  }
  httpRequest.send();
}



