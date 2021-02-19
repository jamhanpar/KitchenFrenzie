import { canvas, ctx } from "./canvas";
import { animateBall } from "./ball";
import { animatePaddle } from "./paddle";
import { animateAllItems, checkDrawnPropsEmpty } from "./props";
// import { GAME_MODE } from "./button";

class Game {
  constructor() {
    this.lives = 1;
    this.showEndGameMessage = false;
    this.wonOrLost = true;
  }

  update() {
    this.updateShowMessage();
  }

  updateShowMessage() {
    if (this.lives === 0) {
      this.showEndGameMessage = true;
      this.wonOrLost = false;
    } else if (checkDrawnPropsEmpty()) {
      this.showEndGameMessage = true;
    }
  }
}

export const game = new Game();
const collisionSound = new Audio();
collisionSound.src = "src/sfx/mechanical_clock_ticks.mp3";

export const animateGame = () => {
  collisionSound.play();
  game.update();
  showMessage();
  animateAllItems();
  animateBall();
  animatePaddle();
};

function showMessage() {
  ctx.fillStyle = "black";
  ctx.font = "20px serif";
  if (game.showEndGameMessage) {
    if (game.wonOrLost) {
      let winText = "You Won!";
      ctx.fillText(
        winText,
        canvas.width / 2 - ctx.measureText(winText).width / 2,
        canvas.height / 2
      );
      setTimeout(() => {
        window.location.reload(false);
      }, 3000);
      return;
    } else {
      let loseText = "You lose! Better luck next time!";
      ctx.fillText(
        loseText,
        canvas.width / 2 - ctx.measureText(loseText).width / 2,
        canvas.height / 2
      );
      setTimeout(() => {
        window.location.reload(false);
      }, 5000);
      return;
    }
  } else {
    ctx.fillText("lives: ", canvas.width * 0.96, canvas.height * 0.017);
    ctx.fillText(game.lives, canvas.width * 0.98, canvas.height * 0.017);
  }
}