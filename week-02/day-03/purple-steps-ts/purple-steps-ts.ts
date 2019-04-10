'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

ctx.fillStyle = "rgb(221,160,221)"
ctx.strokeStyle = "black"
let size:number = 15;
for (let i = 1; i<20; i++) {
    ctx.fillRect(i*size+10,i*size+10,size,size);
    ctx.beginPath();
    ctx.moveTo(i*size+10,i*size+10);
    ctx.lineTo(i*size+10+size,i*size+10);
    ctx.lineTo(i*size+10+size,i*size+10+size);
    ctx.lineTo(i*size+10,i*size+10+size);
    ctx.lineTo(i*15+10,i*15+10);
    ctx.stroke();
}

