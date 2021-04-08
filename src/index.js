import { canvas, drawCanvas } from "./scripts/canvas";

// import { canvas, drawCanvas } from "./scripts/canvas";
// import './styles/reset.css';
// import './styles/instructions.css';
// import './styles/styles.css';

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