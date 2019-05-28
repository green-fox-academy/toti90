'use strict';
const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
    ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
    ev.target.style.backgroundColor = 'blue';
});

myDiv.addEventListener("click", (e) => {
  e.clientX < 201 ? myDiv.dispatchEvent(new CustomEvent('left-side-click')):myDiv.dispatchEvent(new CustomEvent('right-side-click'))
});







