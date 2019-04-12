'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function circle(x:number,y:number,size:number):void {
  if (size < 6) {
    return
  }
  ctx.beginPath();
  ctx.arc(x,y,size,0,Math.PI*2)
  ctx.stroke()
  const position_1 = {x:x,y:y-size/2}
  const position_2 = {x:x-Math.cos(Math.PI/6)*size/2,y:y+Math.sin(Math.PI/6)*size/2}
  const position_3 = {x:x+Math.cos(Math.PI/6)*size/2,y:y+Math.sin(Math.PI/6)*size/2}
  circle(position_1.x,position_1.y,size/2)
  circle(position_2.x,position_2.y,size/2)
  circle(position_3.x,position_3.y,size/2)
}
circle(300,300,300)
