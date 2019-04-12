'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function tree(size: number) {
  if (size < 25) {
    return
  }
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -size);
  ctx.stroke();
  ctx.translate(0, -size);
  ctx.save();
  ctx.rotate(30 * (Math.PI / 180));
  tree(size * 0.8);
  ctx.restore();
  ctx.save();
  ctx.rotate(-30 * (Math.PI / 180));
  tree(size * 0.8);
  ctx.restore();
  ctx.save();
  tree(size * 0.8);
  ctx.restore();
}
ctx.fillStyle = "blue"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeStyle = "yellow"
ctx.translate(canvas.width / 2, canvas.height)
tree(100)

