import { canvas, ctx } from './canvas';

const greenRect = () => {
    colorRect(200, 200, 50, 50, "green");
}
const redRect = colorRect(200, 200, 50, 50, "red");
var rect1 = { x: 5, y: 5, width: 50, height: 50 };
var rect2 = { x: 20, y: 10, width: 10, height: 10 };

function colorRect(leftX, topY, width, height, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(leftX, topY, width, height);
}

if (
  rect1.x < rect2.x + rect2.width &&
  rect1.x + rect1.width > rect2.x &&
  rect1.y < rect2.y + rect2.height &&
  rect1.y + rect1.height > rect2.y
) {
  console.log('collided')
}

// filling in the values =>

if (5 < 30 && 55 > 20 && 5 < 20 && 55 > 10) {
  console.log('not collided')
}
