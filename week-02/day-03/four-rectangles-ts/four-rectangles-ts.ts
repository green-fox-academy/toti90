'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors = ["green", "red", "purple", "yellow"];

for (let i =0; i<colors.length; i++) {
    ctx.fillStyle = colors[i]
    ctx.fillRect(i*90+100,i*60+100, i*20+20, i*20+20);
}

