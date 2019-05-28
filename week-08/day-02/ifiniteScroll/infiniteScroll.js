`use strict`;

const body = document.querySelector('body')

let scrollThreshold = 300;
let randomNumber
let min = 0;
window.onload = () => {
  randomNumber = Math.floor(20+Math.random()*10)
  for (let i = 0; i<randomNumber;i++) {
    let div = document.createElement('div')
    div.style.backgroundColor = randNum()
    body.appendChild(div)
  }
}

function randNum() {
  return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
}

window.addEventListener('scroll', () => {
  if (window.scrollY+scrollThreshold > randomNumber*200-800) {
    for (let i = 0; i<10;i++) {
      let div = document.createElement('div')
      div.style.backgroundColor = randNum()
      body.appendChild(div)
    }
    randomNumber = randomNumber+10
  }
  console.log(window.scrollY - scrollThreshold)
  console.log(min)
  if (window.scrollY - scrollThreshold < min) {
    for (let i = 0; i<10;i++) {
      let div = document.createElement('div')
      div.style.backgroundColor = randNum()
      body.insertAdjacentElement('afterbegin', div)
    }
    randomNumber = randomNumber+10
  }
})