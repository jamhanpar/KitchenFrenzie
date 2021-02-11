import { canvas, ctx } from "./canvas";

export const drawBoundaries = () => {
  drawRect( 0, canvas.height*0.12, canvas.width*0.287, canvas.height*0.60, "green");
  drawRect( canvas.width*0.287, canvas.height*0.36, canvas.width*0.41, canvas.height*0.36, "blue");
  drawRect( canvas.width*0.697, canvas.height*0.12, canvas.width*0.303, canvas.height*0.60, "green");
  drawRect( 0, canvas.height*0.72, canvas.width, canvas.height*0.087, "purple");
  drawRect( 0, canvas.height*0.807, canvas.width, canvas.height*0.194, "red");
};

const drawRect = (leftX, topY, width, height, color) => {
  ctx.strokeStyle = color;
  ctx.strokeRect(leftX, topY, width, height);
};
