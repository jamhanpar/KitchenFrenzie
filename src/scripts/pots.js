import { canvas, ctx } from './canvas';

export const drawPots = () => {
    // drawRect(canvas.width*0.30, canvas.height*0.39, canvas.width*0.10, canvas.height*0.16, 'red');
    // drawRect(canvas.width*0.44, canvas.height*0.39, canvas.width*0.10, canvas.height*0.16, 'orange');
    // drawRect(canvas.width*0.58, canvas.height*0.39, canvas.width*0.10, canvas.height*0.16, 'yellow');
}

const drawRect = (leftX, topY, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(leftX, topY, width, height);
};