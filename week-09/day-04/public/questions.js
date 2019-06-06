`use strict`;

const questionsTableBody = document.querySelector('tbody')

window.onload = () => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `http://localhost:3000/api/questions`, true);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  httpRequest.onload = (response) => {
    let datas = JSON.parse(httpRequest.responseText)
    datas.forEach(data => {
      let row = document.createElement('tr')
      let questionCol = document.createElement('td')
      questionCol.innerHTML = data.question
      let deleteCol = document.createElement('td')
      let deleteButton = document.createElement('button')
      deleteButton.setAttribute('id', data.id)
      deleteButton.classList.add('deleteBtn')
      deleteButton.innerHTML = 'Delete'
      deleteButton.addEventListener('click', deleteQuestion)
      deleteCol.appendChild(deleteButton)
      row.appendChild(questionCol)
      row.appendChild(deleteCol)
      questionsTableBody.appendChild(row)
    })
  }
  httpRequest.send()
}

const deleteQuestion = (event) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('DELETE', `http://localhost:3000/api/questions/${event.target.id}`, true);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  httpRequest.onload = (response) => {
    questionsTableBody.removeChild(event.target.parentElement.parentElement)
    Swal.fire({
      showConfirmButton: false,
      timer: 1500,
      type: 'success',
      title: 'Question deleted successfully'
    })
  }
  httpRequest.send()
}

const submitButton = document.querySelector('.submitBtn')

submitButton.addEventListener('click', () => {
  let checkedRadio = [...document.querySelectorAll('#radio')]
  checkedRadio = checkedRadio.map((btn,index) => btn.checked ? index:null).filter(num => num!==null)
  console.log(checkedRadio)
  let sendQuestion = {
    "question": document.querySelector('#new').value,
    "answers": [
      {
        "answer_1": document.querySelector('#answer_1').value,
        "is_correct": checkedRadio == 0 ? 1:0
      },
      {
        "answer_2": document.querySelector('#answer_2').value,
        "is_correct": checkedRadio == 1 ? 1:0
      },
      {
        "answer_3": document.querySelector('#answer_3').value,
        "is_correct": checkedRadio == 2 ? 1:0
      },
      {
        "answer_4": document.querySelector('#answer_4').value,
        "is_correct": checkedRadio == 3 ? 1:0
      }
    ]
  }
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', `http://localhost:3000/api/questions`, true);
  httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  httpRequest.onload = (response) => {
    console.log(response)
    Swal.fire({
      showConfirmButton: false,
      timer: 1500,
      type: 'success',
      title: 'Question added successfully'
    })
  }
  httpRequest.send(JSON.stringify(sendQuestion))
})