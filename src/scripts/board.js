import { canvas, ctx } from "./canvas";

export const drawBoard = () => {
  drawRect( canvas.width*0.28, canvas.height*0.36, canvas.width*0.42, canvas.height*0.45, "blue");
  drawRect( 0, canvas.height*0.81, canvas.width, canvas.height*0.19, "red");
  drawRect( 0, canvas.height*0.41, canvas.width*0.28, canvas.height*0.33, "green");
  drawRect( canvas.width*0.70, canvas.height*0.41, canvas.width*0.30, canvas.height*0.33, "green");
};

const drawRect = (leftX, topY, width, height, color) => {
  ctx.strokeStyle = color;
  ctx.strokeRect(leftX, topY, width, height);
};
