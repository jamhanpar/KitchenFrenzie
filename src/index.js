import { canvas, drawCanvas } from "./scripts/canvas";

export let INTERVALID;

window.onload = function () {
  const framesPerSecond = 60;
  
  window.addEventListener("resize", () => {resizeCanvas()});
  
  INTERVALID = setInterval(() => {drawCanvas()}, 1000 / framesPerSecond);
};

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();

  // refactor using debouncing concept
}

resizeCanvas();