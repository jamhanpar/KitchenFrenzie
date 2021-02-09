import { canvas, ctx } from './canvas';

export const drawFood = () => {
    drawRect(canvas.width*0.18, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'red');
    drawRect(canvas.width*0.20, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
    drawRect(canvas.width*0.22, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
    drawRect(canvas.width*0.24, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'green');
    drawRect(canvas.width*0.26, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'blue');

    drawRect(canvas.width*0.96, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
    drawRect(canvas.width*0.94, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
    drawRect(canvas.width*0.92, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'red');
    drawRect(canvas.width*0.77, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
    drawRect(canvas.width*0.75, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
    drawRect(canvas.width*0.73, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'green');
    drawRect(canvas.width*0.71, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'blue');
}

const drawRect = (leftX, topY, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(leftX, topY, width, height);
};