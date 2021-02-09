// import { ctx } from "./canvas";

// // drawing an image
// function drawItem(imgPath, x, y) {    
//     let img = new Image();
//     img.src = imgPath    
//     img.onload = function() {
//         ctx.drawImage(img, x, y)
//     }
// }

// export function drawAllIngredients() {
//     const salt = drawImage("src/images/FOOD/tool32.png", 50, 50);
// }

// // animating an image
// export class Item {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         ctx.drawImage("src/images/FOOD/bread02.png", this.x, this.y);
//     }

//     update() {
//         this.draw();
//         this.x += 20;
//         this.y += 40;
//     }
// }


// const croissant = new Item(50, 50);

// export function animateItem() {
//     croissant.update();
// }


const propNames = ["salt", "pepper", "cuttingBoard", "knife", "pot"];

export function drawItems() {
  propNames.forEach((item) => {
    console.log(item);
  });
}