'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
ctx.fillStyle = "Yellow"
ctx.fillRect(0,0,canvas.width,canvas.height)
function drawRect(x,y,size) {
    if (size < 10) {
        return 
    }
    ctx.moveTo(x,y+size/3)
    ctx.lineTo(x+size,y+size/3)
    ctx.moveTo(x,y+size/3*2)
    ctx.lineTo(x+size,y+size/3*2)
    ctx.moveTo(x+size/3,y)
    ctx.lineTo(x+size/3,y+size)
    ctx.moveTo(x+size/3*2,y)
    ctx.lineTo(x+size/3*2,y+size)
    ctx.stroke()
    let pos_1 = {x:x, y:y+size/3}
    let pos_2 = {x:x+size/3, y:y}
    let pos_3 = {x:x+size/3, y:y+size/3*2}
    let pos_4 = {x:x+size/3*2, y:y+size/3}
    drawRect(pos_1.x,pos_1.y,size/3)
    drawRect(pos_2.x,pos_2.y,size/3)
    drawRect(pos_3.x,pos_3.y,size/3)
    drawRect(pos_4.x,pos_4.y,size/3)
}

drawRect(0,0,canvas.height)




