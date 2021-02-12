import { calculateMousePos } from './utils';
import { propNames, drawnProps, drawProps, animateAllItems } from "./props";
import { animateBall } from "./ball";
import { animatePaddle } from "./paddle";
import { buttonNames, buttonList, drawButtons, GAME_MODE } from "./button";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = "100%";
// canvas.height = "100%";

export const drawCanvas = () => {
  clearCanvas()
  if (GAME_MODE) {
    animateAllItems()
    animateBall()
    animatePaddle()
  } else {
    drawProps()
    drawButtons()
  }
};

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("click", function(e) {
  e.preventDefault();

  const mouse = calculateMousePos(e);

  propNames.forEach(item => {
    drawnProps[item].handleClick(mouse.x, mouse.y);
  })

  if (!GAME_MODE) {
    buttonNames.forEach(name => {
      buttonList[name].handleClick(mouse.x, mouse.y);
    })
  }
});