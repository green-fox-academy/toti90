'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function hexagonStar(x: number, y: number, size: number) {
  if (size < 2) {
    return
  }
  ctx.beginPath();
  ctx.strokeStyle = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2 + size, y + size);
  ctx.lineTo(x + size, y + 2 * size);
  ctx.lineTo(x, y + 2 * size);
  ctx.lineTo(x - size / 2, y + size);
  ctx.closePath();
  ctx.stroke();
  const position_1 = { x: x, y: y };
  const position_2 = { x: x + size * (2 / 3), y: y };
  const position_3 = { x: x + size, y: y + 2 * size / 3 };
  const position_4 = { x: x + size * (2 / 3), y: y + 4 * size / 3 };
  const position_5 = { x: x, y: y + 4 * size / 3 };
  const position_6 = { x: x - size * (2 / 6), y: y + 2 * size / 3 };
  hexagonStar(position_1.x, position_1.y, size / 3);
  hexagonStar(position_2.x, position_2.y, size / 3);
  hexagonStar(position_3.x, position_3.y, size / 3);
  hexagonStar(position_6.x, position_6.y, size / 3);
  hexagonStar(position_4.x, position_4.y, size / 3);
  hexagonStar(position_5.x, position_5.y, size / 3);
}

hexagonStar(150, 0, 300)