'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let canvasSize = canvas.width;

function rainbowBox(x: number, y) {
    ctx.fillStyle = y
    ctx.fillRect(x,x,canvasSize-2*x,canvasSize-2*x)
}
let size = 1;
for (let i =0; i <(canvasSize/2)/size;i++) {
    rainbowBox(i*size, colors[i%7]);
}

// let size = 100;

// for (let i = 0; i < (canvas.width*canvas.height)/size; i++) {
//     if (i < 6) {
//         ctx.fillStyle = colors[Math.floor(Math.random() * 6)+1]
//         ctx.fillRect(i * size, 0, size, size)
//     } else if (i < 12) {
//         ctx.fillStyle = colors[Math.floor(Math.random() * 6)+1];
//         ctx.fillRect((i - 6) * size, 100, size, size)
//     } else if (i < 18) {
//         ctx.fillStyle = colors[Math.floor(Math.random() * 6)+1];
//         ctx.fillRect((i - 12) * size, 200, size, size)
//     } else {
//         ctx.fillStyle = colors[Math.floor(Math.random() * 6)+1];
//         ctx.fillRect((i - 18) * size, 300, size, size)
//     }
// }