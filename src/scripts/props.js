import { canvas, ctx } from "./canvas";
import { GAME_MODE } from "./button";

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
      if (this.x > canvas.width-this.width || this.x < 0) this.velocityX = -this.velocityX;
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
    ctx.drawImage(
      img,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  wobble() {
    // refactor if time permits
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
    ctx.translate(
      this.x + this.width / 2,
      this.y + this.height / 2
    );
    ctx.rotate(this.angle);
    // after you rotate, brings canvas back to its origin position
    ctx.translate(
      -this.x - this.width / 2,
      -this.y - this.height / 2
    );
    this.drawImage();
    ctx.restore();
  }

  handleClick(xmouse, ymouse) {
    // console.log(
    //   this.x,
    //   this.y,
    //   this.x + this.width,
    //   this.y + this.height
    // );
    // console.log(`${this.item.name} has been clicked`);

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
  pepper: { name: 'pepper', img: "tool33", posWRatio: 0.19, posHRatio: 0.65, wRatio: 0.025, hRatio: 0.04 },
  salt: { name: 'salt', img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 },
  selterWater: { name: 'selterWater', img: "tool13", posWRatio: 0.29, posHRatio: 0.595, wRatio: 0.03, hRatio: 0.10 },
  cuttingBoard: { name: 'cuttingBoard', img: "tool14", posWRatio: 0.33, posHRatio: 0.83, wRatio: 0.455, hRatio: 0.15 },
  knife: { name: 'knife', img: "tool24", posWRatio: 0.57, posHRatio: 0.86, wRatio: 0.19, hRatio: 0.06 },
  cup: { name: 'cup', img: "tool10", posWRatio: 0.90, posHRatio: 0.78, wRatio: 0.055, hRatio: 0.07 },
  plate: { name: 'plate', img: "tool02", posWRatio: 0.825, posHRatio: 0.9, wRatio: 0.19, hRatio: 0.07 },
  steak: { name: 'steak', img: "meat05", posWRatio: 0.87, posHRatio: 0.92, wRatio: 0.03, hRatio: 0.03 },
  spoon: { name: 'spoon', img: "tool07", posWRatio: 0.80, posHRatio: 0.89, wRatio: 0.03, hRatio: 0.07 },
  fork: { name: 'fork', img: "tool08", posWRatio: 0.93, posHRatio: 0.89, wRatio: 0.03, hRatio: 0.07 },
  egg: { name: 'egg', img: "egg02", posWRatio: 0.50, posHRatio: 0.66, wRatio: 0.055, hRatio: 0.03 },
  pot: { name: 'pot', img: "tool18",  posWRatio: 0.575, posHRatio: 0.62, wRatio: 0.18, hRatio: 0.08 },
  teaPot: { name: 'teaPot', img: "tool31",  posWRatio: 0.93, posHRatio: 0.625, wRatio: 0.12, hRatio: 0.07 },
  skillet: { name: 'skillet', img: "tool17",  posWRatio: 0.415, posHRatio: 0.66, wRatio: 0.18, hRatio: 0.05 },
  towel: { name: 'towel', img: "tool15",  posWRatio: 0.055, posHRatio: 0.74, wRatio: 0.05, hRatio: 0.06 },
};

export const propNames = Object.keys(props);
export const drawnProps = {};

// iterate through props using propNames and draw each item and add it to drawnProps object
export function drawProps() {
  propNames.forEach((item) => {
    drawnProps[item] ||= new Prop(props[item]);
    drawnProps[item].update();
  });
}

// refactor to include a switch ('animateAll', 'animateItem', 'dormantAll')
// toggle all items to animated
export function animateAllItems() {
  propNames.forEach((item) => {
    console.log('Inside AnimatedAllItems: ' + GAME_MODE)
    drawnProps[item].animationToggle = GAME_MODE ? true : false;
    drawnProps[item].update();
  });
}