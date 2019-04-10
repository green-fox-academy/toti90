'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
let colors = ["red", "green", "yellow"]
function centerBox(x:number) {
    for (let i = 0; i<colors.length;i++) {
        ctx.fillStyle = colors[i]
        ctx.fillRect(canvas.width/2-x/2+i*x, canvas.height/2-x/2+i*x, x,x);
    }
}

centerBox(50);