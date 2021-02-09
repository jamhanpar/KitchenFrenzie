import { drawEverything } from './scripts/canvas';

window.onload = function () {
  const framesPerSecond = 60;
  setInterval(() => redraw(), 1000/framesPerSecond);
};

const redraw = () => {
  drawEverything();
}