import { canvas, ctx } from "./canvas";

export const drawKnobs = () => {
  drawCircle(canvas.width * 0.403, canvas.height * 0.79, 19, "red");
  drawCircle(canvas.width * 0.669, canvas.height * 0.79, 19, "orange");
};

// const drawRect = (leftX, topY, width, height, color) => {
//   ctx.fillStyle = color;
//   ctx.fillRect(leftX, topY, width, height);
// };

const drawCircle = (centerX, centerY, radius, drawColor) => {
  ctx.fillStyle = drawColor;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  ctx.fill();
};
