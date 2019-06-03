`use strict`;

document.querySelector('button').addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => createP(data.value.joke))
    .catch(err => console.error(err))
}) 

const createP = (sentence) => {
  let container = document.querySelector('.container')
  let p = document.createElement('p')
  p.innerHTML = sentence
  container.appendChild(p)
}