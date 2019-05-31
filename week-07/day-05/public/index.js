`use strict`;

//sessionStorage

const welcome_header = document.querySelector('#welcome_header')
const url = window.location.search
const content = document.querySelector('#content')
const logOut = document.querySelector('#logout_button')
const postBtn = document.querySelector('.postPost')
const titleInput = document.querySelector('.titleInput')
const urlInput = document.querySelector('.urlInput')
const input = document.querySelectorAll('input')
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
      let div = document.createElement('div')
      div.classList.add('postContainer')
      div.classList.add(`div${idNum}`)
      let ul = document.createElement('ul')
      ul.classList.add(`ul${idNum}`)
      let buttonDiv = document.createElement('div')
      buttonDiv.classList.add('buttonDiv')
      for (let element of Object.keys(data[i])) {
        if (element === 'score') {
          let p = document.createElement('p')
          p.classList.add(`${element}${idNum}`)
          p.innerHTML = `${data[i][element]}`
          buttonDiv.appendChild(p)
        } else if (element === 'id' || element === 'vote'){
        } else if (element === 'owner_name') {
          let li = document.createElement('li')
          li.classList.add(`${element}${idNum}`)
          li.innerHTML = `${data[i][element]}'s post`
          ul.appendChild(li)
        }
        else {
          let li = document.createElement('li')
          li.classList.add(`${element}${idNum}`)
          li.innerHTML = `${data[i][element]}`
          ul.appendChild(li)
        }
        
      }
      
      let buttonUp = document.createElement('button')
      buttonUp.addEventListener('click', voteUp)
      buttonUp.setAttribute('number', `${idNum}`)
      buttonUp.classList.add(`buttonUp${idNum}`)
      buttonUp.classList.add(`btnUp`)
      let buttonUpPicture = document.createElement('i')
      buttonUpPicture.classList.add(`fas`)
      buttonUpPicture.classList.add(`fa-chevron-up`)
      data[i].vote > 0 ? buttonUpPicture.classList.add('votedUp') : ''
      buttonUp.appendChild(buttonUpPicture)
      let buttonDown = document.createElement('button')
      buttonDown.addEventListener('click', voteDown)
      buttonDown.classList.add(`btnDown`)
      buttonDown.setAttribute('number', `${idNum}`)
      buttonDown.classList.add(`buttonDown${idNum}`)
      let buttonDownPicture = document.createElement('i')
      buttonDownPicture.classList.add(`fas`)
      buttonDownPicture.classList.add(`fa-chevron-down`)
      data[i].vote < 0 ? buttonDownPicture.classList.add('votedDown') : ''
      buttonDown.appendChild(buttonDownPicture)
      div.appendChild(ul)
      buttonDiv.appendChild(buttonUp)
      buttonDiv.appendChild(buttonDown)
      div.appendChild(buttonDiv)
      if (user === data[i]['owner_name']) {
        let deleteButton = document.createElement('button')
        let buttonDeletePicture = document.createElement('i')
        buttonDeletePicture.classList.add(`fas`)
        buttonDeletePicture.classList.add(`fa-trash-alt`)
        deleteButton.addEventListener('click', deletePost)
        deleteButton.setAttribute(`delete`, `${idNum}`)
        deleteButton.classList.add(`delete${idNum}`)
        deleteButton.classList.add(`deleteBtn`)
        deleteButton.append(buttonDeletePicture)
        div.appendChild(deleteButton)
        let updateButton = document.createElement('button')
        let updateDeletePicture = document.createElement('i')
        updateDeletePicture.classList.add(`fas`)
        updateDeletePicture.classList.add(`fa-pen`)
        updateButton.addEventListener('click', updatePost)
        updateButton.setAttribute(`update`, `${idNum}`)
        updateButton.classList.add(`update${idNum}`)
        updateButton.classList.add(`updateBtn`)
        updateButton.appendChild(updateDeletePicture)
        div.appendChild(updateButton)
      }
      content.appendChild(div)
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
  let button = window.event.target.parentElement
  let buttonNumb = button.getAttribute('number')
  httpRequest.open('PUT', `http://localhost:3100/posts/${buttonNumb}/upvote`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    let data = JSON.parse(httpRequest.responseText)
    document.querySelector(`.score${buttonNumb}`).innerHTML = `${data['score']}`
    let downButton = document.querySelector(`.buttonDown${buttonNumb}`).firstChild
    let isDownButtonPressed = downButton.getAttribute('class').includes('votedDown')
    isDownButtonPressed ? downButton.classList.remove('votedDown') : ''
    data['vote'] === '0' ? button.firstChild.classList.remove('votedUp') : button.firstChild.classList.add('votedUp')
  }
  httpRequest.send()
}

const voteDown = () => {
  let button = window.event.target.parentElement
  let buttonNumb = button.getAttribute('number')
  httpRequest.open('PUT', `http://localhost:3100/posts/${buttonNumb}/downvote`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    let data = JSON.parse(httpRequest.responseText)
    document.querySelector(`.score${buttonNumb}`).innerHTML = `${data['score']}`
    let upButton = document.querySelector(`.buttonUp${buttonNumb}`).firstChild
    let isUpButtonPressed = upButton.getAttribute('class').includes('votedUp')
    isUpButtonPressed ? upButton.classList.remove('votedUp') : ''
    data['vote'] === '0' ? button.firstChild.classList.remove('votedDown') : button.firstChild.classList.add('votedDown')
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
  const deletedPost = event.target.parentElement.getAttribute('delete')
  httpRequest.open('Delete', `http://localhost:3100/posts/${deletedPost}`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    content.removeChild(document.querySelector(`.div${deletedPost}`))
  }
  httpRequest.send();
}

const updatePost = () => {
  const updatedPost = event.target.parentElement.getAttribute('update')
  console.log(updatedPost)
  var body = {
    "title": `${input[0].value}`,
    "url": `${input[1].value}`
  }
  httpRequest.open('PUT', `http://localhost:3100/posts/${updatedPost}`);
  httpRequest.setRequestHeader('username', user)
  httpRequest.onload = (response) => {
    location.reload(windowRender())
  }
  httpRequest.send(JSON.stringify(body));
}



