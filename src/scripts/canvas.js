import { propNames, drawnProps, drawItems, animateItems } from "./item";
import { drawBoard } from "./board";
import { drawUtensils } from "./utensils";
import { drawProps } from "./props";
import { drawPots } from "./pots";
import { drawKnobs } from "./knobs";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");
canvas.width = "100%";
canvas.height = "100%";

export const drawEverything = () => {
  drawCanvas(),
  drawBoard(),
  drawUtensils(),
  drawPots(),
  drawProps(),
  drawKnobs(),
  drawItems()
};

const drawCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("click", function(e) {
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  propNames.forEach(item => {
    console.log(drawnProps[item].handleClick(x, y));
  })
});