import { drawFood } from "./food";
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
    drawFood(),
    drawUtensils(),
    drawPots(),
    drawProps(),
    drawKnobs()
};

const drawCanvas = () => {
    // ctx.fillStyle = 'orange';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
