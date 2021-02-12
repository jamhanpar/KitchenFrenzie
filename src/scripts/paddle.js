import { canvas, ctx } from "./canvas";
import { calculateMousePos } from "./utils";

class Paddle {
  constructor() {
    this.x = 30;
    this.y = 30;
    this.width = 200;
    this.height = 30;
    this.color = "black";
  }

  draw() {
    let img = new Image();
    img.src = `src/images/FOOD/tool26a.png`;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }
}

export const paddle = new Paddle();

export function animatePaddle() {
  paddle.x = mouse.x - paddle.width / 2;
  paddle.draw();
}

let mouse;

// move paddle based on mouse movement
window.addEventListener("mousemove", (e) => {
  mouse = calculateMousePos(e);
});