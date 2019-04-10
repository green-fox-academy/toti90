'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

ctx.fillStyle = "rgb(221,160,221)"
ctx.strokeStyle = "black"
let sizeD:number = 15;
let position = sizeD;
for (let i = 1; i<7; i++) {
    ctx.fillRect(position+(i-1)*sizeD,position+(i-1)*sizeD,i*sizeD,i*sizeD);
    position = position+(i-1)*sizeD;
    ctx.beginPath();
    ctx.moveTo(position,position);
    ctx.lineTo(position+sizeD*i,position);
    ctx.lineTo(position+sizeD*i,position+sizeD*i);
    ctx.lineTo(position,position+sizeD*i);
    ctx.lineTo(position,position);
    ctx.stroke();
}