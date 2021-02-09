import { canvas, ctx } from "./canvas";

class Item {
  constructor(item) {
    // sample of item: { img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 }
    this.item = item;
    this.animationToggle = false;
  }

  turnAnimationToggle() {
    this.animationToggle = !this.animationToggle; 
  }

  drawImage() {
    let useAnimatedImg = this.animationToggle ? "" : "a";

    let img = new Image();
    img.src = `src/images/FOOD/${this.item.img}${useAnimatedImg}.png`;
    ctx.drawImage(
        img,
        canvas.width * this.item.posWRatio,
        canvas.height * this.item.posHRatio,
        canvas.height * this.item.wRatio,
        canvas.height * this.item.hRatio
      )
    }

  update() {
    if (this.animationToggle) {
        this.item.posWRatio += 0.001;
    }
  }
}


const props = {
  salt: { img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 },
  pepper: { img: "tool33", posWRatio: 0.21, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 },
  cuttingBoard: { img: "tool14", posWRatio: 0.33, posHRatio: 0.83, wRatio: 0.455, hRatio: 0.15 },
  knife: { img: "tool24", posWRatio: 0.57, posHRatio: 0.86, wRatio: 0.19, hRatio: 0.06 },
  pot: { img: "tool18",  posWRatio: 0.58, posHRatio: 0.58, wRatio: 0.18, hRatio: 0.13 },
};
const propNames = ["salt", "pepper", "cuttingBoard", "knife", "pot"];
export const drawnProps = {};

// iterate through props using propNames and draw each item and add it to drawnProps object
export function drawItems() {
  propNames.forEach((item) => {
    drawnProps[item] ||= new Item(props[item]);
    drawnProps[item].drawImage();
  });
}

// refactor to include a switch ('animateAll', 'animateItem', 'dormantAll')
// toggle all items to animated
export function animateItems() {
  propNames.forEach((item) => {
    drawnProps[item].animationToggle = true;
  });
}

// animate a single item
export function animateItem() {
  drawnProps["salt"].update();
}

// toggle all items to dormant
export function dormantItems() {
  propNames.forEach((item) => {
    drawnProps[item].animationToggle = false;
  });
}
