`use strict`;

const welcome_header = document.querySelector('#welcome_header')
const url = window.location.search


let httpRequest = new XMLHttpRequest();

window.onload = () => {
  httpRequest.open('GET', `http://localhost:3100/posts`, true);
  httpRequest.setRequestHeader('username', url.match(/\=(\w*)/)[1])
  httpRequest.send()
  httpRequest.onload = (response) => {
    welcome_header.innerHTML = `Welcome on board ${url.match(/\=(\w*)/)[1]}`
    let data = JSON.parse(httpRequest.responseText)
    console.log(data)
  }}