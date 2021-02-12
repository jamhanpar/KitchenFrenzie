import { canvas, ctx } from "./canvas";
import { animateAllItems, checkDrawnPropsEmpty } from "./props";
import { animateBall } from "./ball";
import { animatePaddle } from "./paddle";

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

export const animateGame = () => {
  game.update();
  showMessage();
  if (game.showEndGameMessage) return;
  animateAllItems();
  animateBall();
  animatePaddle();
};

function showMessage() {
    ctx.fillStyle = "black";
    ctx.font = "20px serif";
  if (game.showEndGameMessage) {
    if (game.wonOrLost) {
      ctx.fillText("You Won!", canvas.width / 2 - 80, canvas.height / 2);
      return;
    } else {
      ctx.fillText("Better luck next time!", canvas.width / 2 - 110, canvas.height / 2
      );
      return;
    }
  } else {
    ctx.fillText("lives: ", canvas.width * 0.96, canvas.height * 0.017);
    ctx.fillText(game.lives, canvas.width * 0.98, canvas.height * 0.017);
  }
}
