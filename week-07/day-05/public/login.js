`use strict`;

const login_input = document.querySelector('#login_input')
const login_button = document.querySelector('#login_button')


let httpRequest = new XMLHttpRequest();

window.onload = () => {
  
}

login_button.addEventListener('click', function(event) {
  httpRequest.open('GET', `http://localhost:3100/auth`, true);
  httpRequest.setRequestHeader('username', login_input.value)
  httpRequest.send()
  httpRequest.onload = (response) => {
    if (response.target.status === 201) {
      alert(httpRequest.responseText)
    } else if (response.target.status === 200) {
      window.open(httpRequest.responseURL, '_self')
    }
  }
})