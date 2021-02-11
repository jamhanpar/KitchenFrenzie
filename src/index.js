import { canvas, drawCanvas } from "./scripts/canvas";

window.onload = function () {
  const framesPerSecond = 60;
  
  window.addEventListener("resize", resizeCanvas);
  
  setInterval(() => {
    drawCanvas()
  }, 1000 / framesPerSecond);
};

function resizeCanvas() {
  console.log("pre-resize", window.innerWidth, window.innerHeight, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();
  console.log("resized", window.innerWidth, window.innerHeight, canvas.width, canvas.height);
}

resizeCanvas();