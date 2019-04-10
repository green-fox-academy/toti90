'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(100,100);
ctx.lineTo(200,100);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(200,100);
ctx.lineTo(200,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.moveTo(200,200);
ctx.lineTo(100,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(100,200);
ctx.lineTo(100,100);
ctx.stroke();
