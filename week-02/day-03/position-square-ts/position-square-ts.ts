'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function positionSquare(x:number,y:number) {
    for (let i=1;i<4;i++) {
        ctx.fillRect(x*i*2,y*i*2,50,50);
    }
}

positionSquare(50,50);