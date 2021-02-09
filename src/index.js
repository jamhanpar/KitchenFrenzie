import { drawEverything } from './scripts/canvas';

window.onload = function () {
  const framesPerSecond = 60;
  setInterval(drawEverything(), 1000 / framesPerSecond);
};