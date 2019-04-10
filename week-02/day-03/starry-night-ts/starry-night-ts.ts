'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0,0,canvas.width, canvas.height);
let numberOfStars = 1000;

for (let i=0;i<numberOfStars;i++) {
    let postitionX = Math.floor(Math.random()*canvas.width)
    let postitionY = Math.floor(Math.random()*canvas.width)
    let random255 = Math.floor(Math.random()*255)
    let color = `rgb(${random255},${random255},${random255})`
    ctx.fillStyle = color
    ctx.fillRect(postitionX,postitionY,2,2)
}