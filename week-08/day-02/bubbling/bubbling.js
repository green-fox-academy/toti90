`use strict`

const bubbling = document.querySelector('nav')
const img = document.querySelector('.img-inspector')

let x = 0;
let y = 0;
let zoom = 200

bubbling.addEventListener('click', (event) => {
  const {action, direction} = event.target.dataset
  if (action === 'move') {
    console.log(direction)
    switch(direction) {
      case 'up':
        img.style.backgroundPositionY = `${y -= 10}px`
        break;
      case 'down':
        img.style.backgroundPositionY = `${y += 10}px`
        break;
      case 'left':
        img.style.backgroundPositionX = `${x -= 10}px`
        break;
      case 'right':
        img.style.backgroundPositionX = `${x += 10}px`
        break;
    }
  } else if (action === 'zoom') {
    switch(direction) {
      case 'in':
        img.style.backgroundSize= `${zoom += 10}%`
        break;
      case 'out':
          img.style.backgroundSize= `${zoom -= 10}%`
        break;
  }
}
});

