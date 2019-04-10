'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function toCenter(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}
let size = 20;

for (let j = 0; j <= canvas.width/size ; j++) {
    toCenter(j * size, 0 * size);
    toCenter(0 * size, j * size);
    toCenter(canvas.width - j * size, canvas.width - 0 * size);
    toCenter(canvas.width - 0 * size, canvas.width - j * size);
}
