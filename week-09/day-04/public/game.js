`use strict`;


const main = document.querySelector('.main-container')
const questionDiv = document.querySelector('.question-container')
const questionLabel = document.querySelector('h2')
const answerBtns = document.querySelectorAll('button')
const score = document.querySelector('h1')
const myBar = document.querySelector('#myBar')
const myBarNumber = document.querySelector('#myBarNumber')
let bar = 0
let percent
let availableQuestions = []
let originalQuestionNumber
window.onload = () => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `http://localhost:3000/api/questionsNumber`, false);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  httpRequest.onload = (response) => {
    let datas = JSON.parse(httpRequest.responseText)
    datas.forEach(data => availableQuestions.push(data.id))
    percent = (1 / (availableQuestions.length)) * 100
    originalQuestionNumber = availableQuestions.length
  }
  httpRequest.send()
  getQuestion()
}

function getQuestion() {
  bar += percent
  myBar.style.width = `${bar}%`
  myBarNumber.innerHTML = `${originalQuestionNumber-availableQuestions.length+1}/${originalQuestionNumber}`
  let httpRequest = new XMLHttpRequest();
  let randomQuestion = Math.floor(Math.random() * availableQuestions.length)
  answerBtns.forEach((button) => {
    button.classList.remove('correct'); button.classList.remove('incorrect');
    button.classList.add('default')
  })
  httpRequest.open('GET', `http://localhost:3000/api/game/${availableQuestions[randomQuestion]}`, true);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  httpRequest.onload = (response) => {
    let data = JSON.parse(httpRequest.responseText)
    let answers = data.answer
    questionLabel.innerHTML = data.question
    answerBtns.forEach((button, index) => {
      button.innerHTML = `${answers[index].answer}`
      button.onclick = () => {
        button.classList.remove('default')
        let pushedAnswer = event.target.innerHTML
        let correctAnswer = answers.filter(answer => answer.is_correct)[0].answer
        if (correctAnswer === pushedAnswer) {
          event.target.classList.add('correct')
          let scoreValue = parseInt(score.innerHTML.match(/(\d)/)[0]) + 1
          score.innerHTML = `SCORE: ${scoreValue++}`
          Swal.fire({
            type: 'success',
            title: 'YEAHH',
            text: 'Right Answer!',
            showConfirmButton: false,
            timer: 1500
          })

        } else {
          event.target.classList.add('incorrect')
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            showConfirmButton: false,
            text: 'Something went wrong!',
            timer: 1500
          })
        }
        availableQuestions = availableQuestions.filter(question => question !== availableQuestions[randomQuestion])
        if (availableQuestions.length === 0) {
          console.log('end of the game')
        } else {
          setTimeout(() => {
            getQuestion()
          }, 1500)
        }
      }
    })
  }
  httpRequest.send();
}
