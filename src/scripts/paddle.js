import { canvas, ctx } from "./canvas";

class Paddle {
  constructor(paddleWidth) {
    this.x = canvas.width / 2;
    this.y = 30;
    this.width = paddleWidth;
    this.height = 30;
    this.color = "black";
  }

  animate(posX) {
    this.draw(posX);
  }

  draw(posX) {
    posX ||= this.x;

    let img = new Image();
    img.src = `src/images/FOOD/tool26a.png`;
    ctx.drawImage(img, posX, this.y, this.width, this.height);
  }
}

let paddle;

export function animatePaddle(paddlePosX, paddleWidth) {
  paddle ||= new Paddle(paddleWidth);
  paddle.animate(paddlePosX);
}