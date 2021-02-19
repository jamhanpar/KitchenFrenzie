import { canvas, ctx } from "./canvas";
import { paddle } from "./paddle";
import { game } from "./game";

class Ball {
  constructor() {
    this.x = window.innerWidth * 0.5;
    this.y = window.innerHeight * 0.5;
    this.width = 60;
    this.height = 60;
    this.radius = 8;
    this.color = "red";
    this.velocityX = 7;
    this.velocityY = 7;
  }

  animate() {
    this.move();
    this.draw();
  }

  draw() {
    let img = new Image();
    img.src = `src/images/FOOD/bread11.png`;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    if (this.x + this.width > canvas.width || this.x < 0) {
      this.velocityX = -this.velocityX;
    }

    if (this.y + this.height > canvas.height) {
      this.velocityY = -this.velocityY;
    }

    if (this.y < 0) {
      game.lives--;
      if (game.lives === 0) game.updateShowMessage;
      this.resetBall();
    }
  }

  resetBall() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.velocityX = 5;
    this.velocityY = 5;
  }
}

export const ball = new Ball();

function checkBallPaddleCollision() {
  if (
    ball.y < paddle.y + paddle.height &&
    ball.x > paddle.x &&
    ball.x < paddle.x + paddle.width
  ) {
    ball.velocityY = -ball.velocityY;
    ball.velocityX = -ball.velocityX;
    let deltaX = ball.x - (paddle.x + paddle.width / 2);
    ball.velocityX = deltaX * 0.25;
  }
}

export function animateBall() {
  checkBallPaddleCollision();
  ball.animate();
}
