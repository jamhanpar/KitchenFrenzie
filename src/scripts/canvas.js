// import { run } from './collisionTesting';
// import { drawKnobs } from "./knobs";
// import { drawBoundaries } from "./boundaries";
import { propNames, drawnProps, drawProps, animateAllItems } from "./props";
import { animateBall } from "./ball";
import { buttonNames, buttonList, drawButtons, GAME_MODE } from "./button";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// canvas.width = "100%";
// canvas.height = "100%";

export const drawCanvas = () => {
  clearCanvas()
  // drawBoundaries()
  // drawKnobs()
  GAME_MODE ? animateAllItems() : drawProps();
  animateBall()
  drawButtons()
};

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("click", function(e) {
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  const root = document.documentElement;

  const mouseX = e.clientX - rect.left - root.scrollLeft;
  const mouseY = e.clientY - rect.top - root.scrollTop;

  propNames.forEach(item => {
    drawnProps[item].handleClick(mouseX, mouseY);
  })

  buttonNames.forEach(name => {
    buttonList[name].handleClick(mouseX, mouseY);
  })

  console.log(mouseX, mouseY)
  // return { 
  //   x: mouseX,
  //   y: mouseY
  // }
});