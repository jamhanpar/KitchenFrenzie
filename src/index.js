import { canvas, drawCanvas } from "./scripts/canvas";

window.onload = function () {
  const framesPerSecond = 60;
  
  window.addEventListener("resize", resizeCanvas);
  
  setInterval(() => {
    drawCanvas()
  }, 1000 / framesPerSecond);
};

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();
}

resizeCanvas();