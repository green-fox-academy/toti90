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
let user
window.onload = () => {
  Swal.fire({
    title: 'Please add your name',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    confirmButtonText: 'Login',
    showLoaderOnConfirm: true,
    preConfirm: (login) => {
      if (login) {
        user = login
        score.innerHTML = `${login}'s SCORE: 0`
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
      }
      
  })

}

function getQuestion() {
  bar += percent
  myBar.style.width = `${bar}%`
  myBarNumber.innerHTML = `${originalQuestionNumber - availableQuestions.length + 1}/${originalQuestionNumber}`
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
    let availableAnswers = [0, 1, 2, 3]
    questionLabel.innerHTML = data.question
    answerBtns.forEach((button) => {
      let rand = Math.floor(Math.random() * availableAnswers.length)
      let randAns = availableAnswers[rand]
      button.innerHTML = `${answers[randAns].answer}`
      availableAnswers.splice(rand, 1)
      button.onclick = () => {
        button.classList.remove('default')
        let pushedAnswer = event.target.innerHTML
        let correctAnswer = answers.filter(answer => answer.is_correct)[0].answer
        if (correctAnswer === pushedAnswer) {
          event.target.classList.add('correct')
          let scoreValue = (parseInt(score.innerHTML.match(/(\d+)/)[0])) + 1
          score.innerHTML = `SCORE: ${scoreValue++}`
          Swal.mixin({
            toast: true,
            showConfirmButton: false,
            timer: 1000
          }).fire({
            type: 'success',
            title: 'Right Answer'
          })
          setTimeout(() => {
            getQuestion()
          }, 1500)

        } else {
          event.target.classList.add('incorrect')
          Swal.fire({
            confirmButtonText: 'Next Question',
            type: 'error',
            title: 'Wrong Answer',
            text: `Correct answer was: ${correctAnswer}`,
            preConfirm: () => {
              getQuestion()
            }
          })
        }
        availableQuestions = availableQuestions.filter(question => question !== availableQuestions[randomQuestion])
        if (availableQuestions.length === 0) {
          Swal.fire({
            type: 'info',
            confirmButtonText: 'New Game',
            title: 'Finished quiz game',
            text: `${user} your final score is: ${(score.innerHTML.match(/(\d+)/))[0]}`,
            preConfirm: () => {
              location.reload()
            }
          })
        }
      }
    })

  }
  httpRequest.send();
}
