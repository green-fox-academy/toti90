'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function trinagle(x: number, y: number, size: number): void {
  if (size < 8) {
    return
  }
  ctx.beginPath();
  ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x, y);
  ctx.stroke();
  const position_1 = { x: x, y: y };
  const position_2 = { x: x + size / 2, y: y };
  const position_3 = { x: x + size / 4, y: y + size / 2 };
  trinagle(position_1.x, position_1.y, size / 2);
  trinagle(position_2.x, position_2.y, size / 2);
  trinagle(position_3.x, position_3.y, size / 2);
}

trinagle(0, 0, 600);