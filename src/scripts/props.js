import { canvas, ctx } from "./canvas";
import { ball } from "./ball";
import { game } from "./game";

class Prop {
  constructor(item) {
    // sample of item: { img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 }
    this.item = item;
    this.animationToggle = false;
    this.x = canvas.width * this.item.posWRatio;
    this.y = canvas.height * this.item.posHRatio;
    this.width = canvas.height * this.item.wRatio;
    this.height = canvas.height * this.item.hRatio;
    this.pctPi = Math.PI / 180;
    this.angle = 0 * this.pctPi;
    this.counter1 = 0;
    this.counter2 = 16;
    this.velocityX = 5;
  }

  update() {
      if (this.animationToggle) {
        this.wobble();
        if (this.x > canvas.width - this.width || this.x < 0)
          this.velocityX = -this.velocityX;
        this.x += this.velocityX;
      } else {
        this.drawImage();
      }
  }

  turnAnimationToggle() {
    this.animationToggle = !this.animationToggle;
    if (this.animationToggle) this.update();
  }

  drawImage() {
      let useAnimatedImg = this.animationToggle ? "a" : "";
  
      let img = new Image();
      img.src = `src/images/FOOD/${this.item.img}${useAnimatedImg}.png`;
      ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  wobble() {
    // refactor to include random angles > 30, if time permits
    if (this.counter1 < 15) {
      this.angle += 2 * this.pctPi;
      this.counter1 += 1;
    } else if (this.counter1 === 15) {
      this.counter2 = 15;
      this.counter1 += 1;
    }

    if (this.counter2 <= 15 && this.counter2 !== -15) {
      this.angle -= 2 * this.pctPi;
      this.counter2 -= 1;
    } else if (this.counter2 === -15) {
      this.counter1 = -15;
      this.counter2 = 16;
    }

    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.angle);
    // after you rotate, brings canvas back to its origin position
    ctx.translate(-this.x - this.width / 2, -this.y - this.height / 2);
    this.drawImage();
    ctx.restore();
  }

  handleClick(xmouse, ymouse) {
    if (
      this.x < xmouse &&
      this.x + this.width > xmouse &&
      this.y < ymouse &&
      this.y + this.height > ymouse
    ) {
      // when mouse clicks on area of the item
      this.turnAnimationToggle();
      this.update();
    }
  }
}

export const props = {
  cuttingBoard: { name: 'cuttingBoard', img: "tool14", posWRatio: 0.33, posHRatio: 0.83, wRatio: 0.455, hRatio: 0.15 },
  pepper: { name: 'pepper', img: "tool33", posWRatio: 0.19, posHRatio: 0.65, wRatio: 0.025, hRatio: 0.04 },
  salt: { name: 'salt', img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 },
  selterWater: { name: 'selterWater', img: "tool13", posWRatio: 0.285, posHRatio: 0.595, wRatio: 0.03, hRatio: 0.10 },
  ginseng: { name: 'ginseng', img: "vegetable57", posWRatio: 0.35, posHRatio: 0.89, wRatio: 0.04, hRatio: 0.05 },
  redPepper: { name: 'redPepper', img: "vegetable23", posWRatio: 0.35, posHRatio: 0.82, wRatio: 0.09, hRatio: 0.06 },
  chiliPepper: { name: 'chiliPepper', img: "vegetable37", posWRatio: 0.44, posHRatio: 0.81, wRatio: 0.09, hRatio: 0.06 },
  onion: { name: 'onion', img: "vegetable35", posWRatio: 0.47, posHRatio: 0.81, wRatio: 0.05, hRatio: 0.07 },
  knife: { name: 'knife', img: "tool24", posWRatio: 0.57, posHRatio: 0.86, wRatio: 0.19, hRatio: 0.06 },
  cup: { name: 'cup', img: "tool10", posWRatio: 0.89, posHRatio: 0.82, wRatio: 0.05, hRatio: 0.06 },
  bowl: { name: 'bowl', img: "tool28", posWRatio: 0.15, posHRatio: 0.78, wRatio: 0.19, hRatio: 0.08 },
  oyster: { name: 'oyster', img: "seafood08", posWRatio: 0.190, posHRatio: 0.77, wRatio: 0.06, hRatio: 0.04 },
  shrimp: { name: 'shrimp', img: "seafood04", posWRatio: 0.21, posHRatio: 0.795, wRatio: 0.06, hRatio: 0.04 },
  clam: { name: 'clam', img: "seafood06", posWRatio: 0.165, posHRatio: 0.77, wRatio: 0.06, hRatio: 0.04 },
  crab: { name: 'crab', img: "seafood03", posWRatio: 0.17, posHRatio: 0.80, wRatio: 0.11, hRatio: 0.06 },
  plate: { name: 'plate', img: "tool01", posWRatio: 0.825, posHRatio: 0.9, wRatio: 0.19, hRatio: 0.07 },
  stringBeans: { name: 'stringBeans', img: "vegetable47", posWRatio: 0.84, posHRatio: 0.90, wRatio: 0.06, hRatio: 0.06 },
  steak: { name: 'steak', img: "meat05", posWRatio: 0.86, posHRatio: 0.90, wRatio: 0.06, hRatio: 0.06 },
  potatoes: { name: 'potatoes', img: "vegetable38", posWRatio: 0.88, posHRatio: 0.91, wRatio: 0.06, hRatio: 0.04 },
  spoon: { name: 'spoon', img: "tool07", posWRatio: 0.80, posHRatio: 0.89, wRatio: 0.03, hRatio: 0.07 },
  fork: { name: 'fork', img: "tool08", posWRatio: 0.93, posHRatio: 0.89, wRatio: 0.03, hRatio: 0.07 },
  egg: { name: 'egg', img: "egg02", posWRatio: 0.50, posHRatio: 0.66, wRatio: 0.055, hRatio: 0.03 },
  pot: { name: 'pot', img: "tool18",  posWRatio: 0.575, posHRatio: 0.62, wRatio: 0.18, hRatio: 0.08 },
  fish: { name: 'fish', img: "fish01",  posWRatio: 0.60, posHRatio: 0.60, wRatio: 0.11, hRatio: 0.07 },
  fish2: { name: 'fish2', img: "fish05",  posWRatio: 0.594, posHRatio: 0.63, wRatio: 0.10, hRatio: 0.04},
  potLid: { name: 'potLid', img: "tool25",  posWRatio: 0.57, posHRatio: 0.62, wRatio: 0.14, hRatio: 0.05 },
  squash: { name: 'squash', img: "vegetable32",  posWRatio: 0.75, posHRatio: 0.645, wRatio: 0.04, hRatio: 0.05 },
  pumpkin: { name: 'pumpkin', img: "vegetable31",  posWRatio: 0.765, posHRatio: 0.64, wRatio: 0.08, hRatio: 0.06 },
  teaCup: { name: 'teaCup', img: "tool30",  posWRatio: 0.915, posHRatio: 0.677, wRatio: 0.032, hRatio: 0.025 },
  teaPot: { name: 'teaPot', img: "tool31",  posWRatio: 0.93, posHRatio: 0.64, wRatio: 0.10, hRatio: 0.06 },
  pan: { name: 'pan', img: "tool17",  posWRatio: 0.415, posHRatio: 0.66, wRatio: 0.18, hRatio: 0.05 },
  meatOnAStick2: { name: 'meatOnAStick2', img: "meat06", posWRatio: 0.43, posHRatio: 0.65, wRatio: 0.07, hRatio: 0.06 },
  towel: { name: 'towel', img: "tool15",  posWRatio: 0.055, posHRatio: 0.74, wRatio: 0.05, hRatio: 0.06 }
};

export const propNames = Object.keys(props);
export const drawnProps = {};

// iterate through props using propNames and draw each item and add it to drawnProps object
function initializeProps() {
  propNames.forEach((item) => {
    drawnProps[item] ||= new Prop(props[item]);
  });
}

function checkPropsBallCollision() {
  let ballCenterX = ball.x + ball.width / 2;
  let ballCenterY = ball.y + ball.height / 2;

  propNames.forEach((item, i) => {
    let itemCenterX = drawnProps[item].x + drawnProps[item].width / 2;
    let itemCenterY = drawnProps[item].y + drawnProps[item].height / 2;

    if (
      Math.hypot(ballCenterX - itemCenterX, ballCenterY - itemCenterY) -
        drawnProps[item].width / 2 <
      1
    ) {
      ball.velocityY = -ball.velocityY;
      ball.velocityX = -ball.velocityX;
      let deltaX = ball.x - (drawnProps[item].x + drawnProps[item].width / 2);
      ball.velocityX = deltaX * 0.1;
      propNames.splice(i, 1);
    }
  });
}

export function checkDrawnPropsEmpty() {
  if (propNames.length === 0) {
    return true;
  }
  return false;
}

export function drawProps() {
  initializeProps();
  propNames.forEach((item) => {
    drawnProps[item].update();
  });
}

// refactor to include a switch ('animateAll', 'animateItem', 'dormantAll')
// toggle all items to animated
export function animateAllItems() {
  initializeProps();
  checkPropsBallCollision();
  propNames.forEach((item) => {
    drawnProps[item].animationToggle = true;
    drawnProps[item].update();
  });
}