import { canvas, ctx } from './canvas';
import Item from './item';

const ANIMATED = true;

const nonAnimated = {
  salt: { img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 },
  pepper: { img: "tool33", posWRatio: 0.21, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 },
  cuttingBoard: { img: "tool14", posWRatio: 0.33, posHRatio: 0.83, wRatio: 0.455, hRatio: 0.15 },
  knife: { img: "tool24", posWRatio: 0.57, posHRatio: 0.86, wRatio: 0.19, hRatio: 0.06 },
  pot: { img: "tool18",  posWRatio: 0.58, posHRatio: 0.58, wRatio: 0.18, hRatio: 0.13 },
};

const propNames = [ 'salt', 'pepper', 'cuttingBoard', 'knife', 'pot' ]
export const drawnProps = {}

export function drawItems() {
  propNames.forEach(item => {
    drawnProps[item] ||= new Item(nonAnimated[item]);
    drawnProps[item].drawImage();
  })
}

export function moveItems() {
    drawnProps['salt'].update();
  }

// export const drawFood = () => {
//     drawRect(canvas.width*0.18, canvas.height*0.655, canvas.width*0.025, canvas.height*0.04, 'red');
//     drawRect(canvas.width*0.21, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
//     drawRect(canvas.width*0.22, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
//     drawRect(canvas.width*0.24, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'green');
//     drawRect(canvas.width*0.26, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'blue');

//     drawRect(canvas.width*0.96, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
//     drawRect(canvas.width*0.94, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
//     drawRect(canvas.width*0.92, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'red');
//     drawRect(canvas.width*0.77, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
//     drawRect(canvas.width*0.75, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
//     drawRect(canvas.width*0.73, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'green');
//     drawRect(canvas.width*0.71, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'blue');
// }

// const drawRect = (leftX, topY, width, height, color) => {
//   ctx.fillStyle = color;
//   ctx.fillRect(leftX, topY, width, height);
// };