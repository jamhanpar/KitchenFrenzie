import { canvas, ctx } from './canvas';

class Ball {
    constructor() {
        this.x = canvas.width * 0.5;
        this.y = canvas.height * 0.5;
        this.width = 60;
        this.height = 60;
        this.radius = 8;
        this.color = 'red';
        this.velocityX = 8;
        this.velocityY = 3;
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

        if (this.y + this.height > canvas.height || this.y < 0) {
          this.velocityY = -this.velocityY;
        }
    }

    resetBall() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
    }
}

export let ball;

export function animateBall() {
    console.log(ball);
    ball ||= new Ball();
    ball.animate();
}