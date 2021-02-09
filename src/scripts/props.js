import { canvas, ctx } from './canvas';

export const drawProps = () => {
    drawRect(canvas.width*0.05, canvas.height*0.83, canvas.width*0.23, canvas.height*0.15, 'green');
    drawRect(canvas.width*0.33, canvas.height*0.83, canvas.width*0.23, canvas.height*0.15, 'blue');
    drawRect(canvas.width*0.60, canvas.height*0.87, canvas.width*0.10, canvas.height*0.08, 'red');
    drawRect(canvas.width*0.75, canvas.height*0.83, canvas.width*0.20, canvas.height*0.15, 'orange');
    drawRect(canvas.width*0.05, canvas.height*0.49, canvas.width*0.09, canvas.height*0.09, 'orange');

    
}

const drawRect = (leftX, topY, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(leftX, topY, width, height);
};