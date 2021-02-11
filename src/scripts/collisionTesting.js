import { canvas, ctx } from './canvas';
import { getDistance } from './utils';

class Circle {
  constructor (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  update() {
    this.draw();
  }

  draw() {
    // what is the purpose of beginPath and closePath?
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

// Implementation
let c1;
let c2;

export function init() {
  c1 = new Circle(300, 300, 100, "black");
  c2 = new Circle(undefined, undefined, 30, "black");
}

// Animation Loop
export function animate() {
  // what does this do?
  // requestAnimationFrame(animate);
  c1.update();
  c2.x = mouse.x;
  c2.y = mouse.y;
  c2.update();
  
  if (getDistance(c1.x, c1.y, c2.x, c2.y) < c1.radius + c2.radius) {
    c1.color = 'red';
    c2.color = 'red';
    console.log('true');
  } else {
    c1.color = 'black';
    c2.color = "black";
    console.log("false");
  }
  c1.update();
  c2.update();
}

export function run() {
  init();
  animate();
}

let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
})