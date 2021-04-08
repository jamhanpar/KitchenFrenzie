import { calculateMousePos } from './utils';
import { propNames, drawnProps, drawProps } from "./props";
import { buttonNames, buttonList, drawButtons, GAME_MODE } from "./button";
import { animateGame } from "./game";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const drawCanvas = () => {
  clearCanvas()
  if (GAME_MODE) {
    animateGame()
  } else {
    writeInstructions()
    drawProps()
  }
  drawButtons()
};

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

function writeInstructions() {
  ctx.fillStyle = 'black';
  const fontSize = canvas.height * 0.015;
  const width = canvas.width * 0.33; // 996px;
  const height = canvas.height * 0.175; // 176px;
  // let text = "To start, press Play. Move your mouse left and right to control the rolling pin. Use the pin to deflect the bagel and calm the kitchen frenzy! Cooking can be chaotic! Sometimes, it's easier to explore one ingredient at a time. Click each kitchenware or ingredient and watch them run wild.";
  // let words = text.split(' ');
  let maxWidth = width-25;
  let lineHeight = height*0.15;
  let line = '';
  let y = canvas.height*0.43;

  ctx.font = fontSize.toString() + 'px Montserrat';
  ctx.fillStyle = "black";
  ctx.fillText("Made by James Park", canvas.width*0.021, canvas.height * 0.97);

  ctx.fillText(line, canvas.width*0.3475, y);
}

// click event listener
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
  } else {
    buttonList['exitGame'].handleClick(mouse.x, mouse.y);
  }
});