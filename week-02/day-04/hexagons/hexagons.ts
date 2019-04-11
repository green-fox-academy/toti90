'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function hexagons(x,y,size) {
    if (size < 2) {
        return
    }
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+size,y)
    ctx.lineTo(x+size/2+size,y+size)
    ctx.lineTo(x+size,y+2*size)
    ctx.lineTo(x, y+2*size)
    ctx.lineTo(x-size/2,y+size)
    ctx.closePath()
    ctx.stroke()
    const position_1 = {x:x, y:y}
    const position_2 = {x:x+size/2+size/4, y:y+size/2}
    const position_3 = {x:x,y:y+size}
    hexagons(position_1.x,position_1.y,size/2)
    hexagons(position_2.x, position_2.y, size/2)
    hexagons(position_3.x,position_3.y,size/2)
}

hexagons(150,0,300)