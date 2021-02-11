import { canvas, ctx } from './canvas';

export let GAME_MODE = false;

class Button {
    constructor(button) {
        this.button = button;
        this.x = canvas.width * this.button.leftX - this.button.width/3;
        this.y = canvas.height * this.button.topY;
        this.txtPosX = this.x + this.button.width * 0.1;
        this.txtPosY = this.y + 25;
    }

    animate() {
        this.draw();
    }

    draw() {
        // if button has an icon, render the icon, otherwise create a button with title
        if (this.button.img) {
            let img = new Image();
            img.src = `src/images/FOOD/${this.button.img}.png`;
            ctx.drawImage(img, this.x, this.y, this.button.width, this.button.height);
        } else {
            ctx.strokeRect(this.x, this.y, this.button.width, this.button.height)
            ctx.fillStyle = 'black';
            ctx.font = '20px sans serif';
            ctx.fillText(this.button.title, this.txtPosX, this.txtPosY);
        }
    }

    handleClick(xmouse, ymouse) {
        if (
            this.x < xmouse &&
            this.x + this.button.width > xmouse &&
            this.y < ymouse &&
            this.y + this.button.height > ymouse
        ) { 
            console.log(`${this.button.title} has been clicked`);
            switch(this.button.title) {
                case 'LinkedIn':
                    window.open("https://www.linkedin.com/in/jameshansungpark/");
                    break;
                case 'Github':
                    window.open("https://github.com/jamhanpar");
                    break;
                case 'Play Game':
                    GAME_MODE = !GAME_MODE;
                    console.log(GAME_MODE);
                    break;
                default:
                    break;
            }
        }
    }
}

const buttons = {
    linkedIn: { title: 'LinkedIn', img: 'fruit34', leftX: 0.018, topY: 0.015, width: 40, height: 40 },
    github: { title: 'Github', img:'fruit30', leftX: 0.05, topY: 0.015, width: 40, height: 40 },
    playGame: { title: 'Play Game', img: '', leftX: 0.948, topY: 0.015, width: 110, height: 40  },
};

export const buttonNames = Object.keys(buttons);
export const buttonList = {};

export function drawButtons() {
    buttonNames.forEach(name => {
        buttonList[name] ||= new Button(buttons[name]);
        buttonList[name].animate();
    })
}