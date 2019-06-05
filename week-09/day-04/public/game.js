`use strict`;
let httpRequest = new XMLHttpRequest();
const main = document.querySelector('.main-container')
const questionDiv = document.querySelector('.question-container')
const questionLabel = document.querySelector('h2')
const answerBtns = document.querySelectorAll('button')

window.onload = () => {
  httpRequest.open('GET', `http://localhost:3000/api/game`, true);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  httpRequest.onload = (response) => {
    let data = JSON.parse(httpRequest.responseText)
    console.log(data.answer)
    questionLabel.innerHTML =  data.question
    answerBtns.forEach((button,index) => button.innerHTML = `${data.answer[index].answer}`)
  }
  httpRequest.send();
}