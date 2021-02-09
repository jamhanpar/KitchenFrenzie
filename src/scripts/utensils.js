import { canvas, ctx } from './canvas';

export const drawUtensils = () => {
    // drawRect(canvas.width*0.18, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'red');
    // drawRect(canvas.width*0.20, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
    // drawRect(canvas.width*0.22, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
}

const drawRect = (leftX, topY, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(leftX, topY, width, height);
};