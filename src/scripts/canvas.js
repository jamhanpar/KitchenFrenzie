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
  const width = 976;
  const height = 200;
  ctx.font = fontSize.toString() + 'px sans serif';
  ctx.fillStyle = 'rgba(212,176,128,0.7)';
  ctx.fillRect(canvas.width*0.5-width/2, canvas.height*0.5-height/2, width, height);
  ctx.fillStyle = "black";
  ctx.fillText("Made by James Park", canvas.width*0.021, canvas.height * 0.07);
  ctx.fillText("INSTRUCTIONS:", canvas.width / 12, canvas.height*0.27);
  ctx.fillText("To play the game, press the play button.", canvas.width / 12, canvas.height*0.30);
  ctx.fillText("Move your mouse left and right to deflect", canvas.width / 12, canvas.height*0.33);
  ctx.fillText("the bagel and calm the kitchen frenzy!", canvas.width / 12, canvas.height*0.36);
  ctx.fillText("Cooking can be very chaotic! Sometimes,", canvas.width / 12, canvas.height * 0.43);
  ctx.fillText("it's easier to explore 1 ingredient at a time.", canvas.width / 12, canvas.height * 0.46);
  ctx.fillText("To enjoy the unique animations,", canvas.width / 12, canvas.height*0.49);
  ctx.fillText("click each kitchenware/food and", canvas.width / 12, canvas.height*0.52);
  ctx.fillText("watch them run wild!", canvas.width / 12, canvas.height*0.55);
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
    console.log(buttonList['exitGame'])
    buttonList['exitGame'].handleClick(mouse.x, mouse.y);
  }
});