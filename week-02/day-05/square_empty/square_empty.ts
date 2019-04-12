'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function squareEmpty(x: number, y: number, size: number) {
  if (size < 14) {
    return
  }
  ctx.lineWidth = Math.floor(size / 15);
  ctx.strokeRect(x + size / 2, y + size / 2, size, size);
  ctx.stroke();
  const position_1 = { x: x, y: y };
  const position_2 = { x: x + size, y: y };
  const position_3 = { x: x, y: y + size };
  const position_4 = { x: x + size, y: y + size };
  squareEmpty(position_1.x, position_1.y, size / 2);
  squareEmpty(position_2.x, position_2.y, size / 2);
  squareEmpty(position_3.x, position_3.y, size / 2);
  squareEmpty(position_4.x, position_4.y, size / 2);

}

squareEmpty(0, 0, 300)
