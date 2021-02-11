import { canvas, ctx } from './canvas';

class Ball {
    constructor() {
        this.x = canvas.width * 0.5;
        this.y = canvas.height * 0.5;
        this.radius = 8;
        this.color = 'red';
        this.velocityX = 10;
        this.velocityY = 5;
    }

    animate() {
        this.move();
        this.draw();
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // arc(x, center of circl, radius, 0, radians, counter-clockwise)
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fill();
    }

    move() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x > canvas.width || this.x < 0) {
          this.velocityX = -this.velocityX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.velocityY = -this.velocityY;
        }
    }
}

let ball;

export function animateBall() {
    ball ||= new Ball();
    ball.animate();
}