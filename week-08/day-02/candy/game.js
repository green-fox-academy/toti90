`use strict`;

const createCandyBtn = document.querySelector('.create-candies')
const candyNum = document.querySelector('.candies')
const lollypopBtn = document.querySelector('.buy-lollypops')
const lollypopNum = document.querySelector('.lollypops')
const candiePerSecond = document.querySelector('.speed')
const candyRain = document.querySelector('.candy-machine')

let candies = 0;
let lollypops = 0;
lollypopBtn.disabled = true;
let speed = 0

function generateCandy(num) {
  candies += num
  candyNum.innerHTML = candies
  candies > 4 ? lollypopBtn.disabled = false:''
}

const generateLollypop = () => {
  lollypops++
  candies -= 5
  lollypopNum.innerHTML = `🍭`.repeat(lollypops)
  candyNum.innerHTML = candies
  candies < 5 ? lollypopBtn.disabled = true:''
  if (lollypops%2 === 0) {
    candiePerSecond.innerHTML = parseInt(candiePerSecond.innerHTML)+1
  }
  }
setInterval( () => { generateCandy(Math.floor(parseInt(candiePerSecond.innerHTML)))}, 1000);

createCandyBtn.addEventListener('click', () => {
  generateCandy(1)
})

lollypopBtn.addEventListener('click', generateLollypop)

candyRain.addEventListener('click', () => {
  speed++
  console.log(speed)
  candiePerSecond.innerHTML = parseInt(candiePerSecond.innerHTML)*10
})







