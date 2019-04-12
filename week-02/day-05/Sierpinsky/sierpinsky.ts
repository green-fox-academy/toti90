'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function sierpinsky(x: number, y: number, size: number) {
  if (size < 1) {
    return
  }
  ctx.fillRect(x + size, y + size, size, size);
  const position_1 = { x: x, y: y };
  const position_2 = { x: x + size, y: y };
  const position_3 = { x: x + 2 * size, y: y };
  const position_4 = { x: x, y: y + size };
  const position_5 = { x: x + 2 * size, y: y + size };
  const position_6 = { x: x, y: y + 2 * size };
  const position_7 = { x: x + size, y: y + 2 * size };
  const position_8 = { x: x + 2 * size, y: y + 2 * size };
  sierpinsky(position_1.x, position_1.y, size / 3);
  sierpinsky(position_2.x, position_2.y, size / 3);
  sierpinsky(position_3.x, position_3.y, size / 3);
  sierpinsky(position_4.x, position_4.y, size / 3);
  sierpinsky(position_5.x, position_5.y, size / 3);
  sierpinsky(position_6.x, position_6.y, size / 3);
  sierpinsky(position_7.x, position_7.y, size / 3);
  sierpinsky(position_8.x, position_8.y, size / 3);
}

sierpinsky(0, 0, 200)