import { canvas, ctx } from './canvas';
import { game } from './game';

class Button {
    constructor(button) {
        this.button = button;
        this.x = canvas.width * this.button.leftX;
        this.y = canvas.height * this.button.topY;
        if (this.button.title === 'x') {
            this.x -= 3;
            this.y -= 14;
        }
    }

    draw() {
        // if button has an icon, render the icon, otherwise create a button with title
        if (this.button.img) {
            let img = new Image();
            img.src = `src/images/FOOD/${this.button.img}.png`;
            ctx.drawImage(img, this.x, this.y, this.button.width, this.button.height);
        } else {
            if (this.button.border) ctx.strokeRect(this.x, this.y, this.button.width, this.button.height)
            
            ctx.fillStyle = 'black';
            ctx.font = '20px sans serif';

            if (this.button.title === 'Play Game') {
                ctx.fillText(this.button.title, this.x+10, this.y+25);
            } else if (this.button.title === 'x') {
                ctx.fillText(this.button.title, this.x+3, this.y+14);
            } else {
                ctx.fillText(this.button.title, this.x, this.y);
            }
        }
    }

    handleClick(xmouse, ymouse) {
        if (
            this.x < xmouse &&
            this.x + this.button.width > xmouse &&
            this.y < ymouse &&
            this.y + this.button.height > ymouse
            ) { 
            console.log(`${this.button} button clicked`);
            // console.log(`${this.button.title} has been clicked`);
            switch(this.button.title) {
                case 'LinkedIn':
                    window.open("https://www.linkedin.com/in/jameshansungpark/");
                    break;
                case 'Github':
                    window.open("https://github.com/jamhanpar");
                    break;
                case 'Play Game':
                    console.log('game is played')
                    toggleGameMode();
                    break;
                case 'x':
                    console.log('x button clicked')
                    // refresh page after click
                    window.location.reload(false);
                    break;
                default:
                    break;
            }
        }
    }
}

// add new buttons
const buttons = {
    linkedIn: { title: 'LinkedIn', img: 'fruit34', leftX: 0.018, topY: 0.015, width: 40, height: 40, border: false },
    github: { title: 'Github', img:'fruit30', leftX: 0.05, topY: 0.015, width: 40, height: 40, border: false },
    playGame: { title: 'Play Game', img: '', leftX: 0.95, topY: 0.015, width: 110, height: 40, border: true },
    exitGame: { title: 'x', img: '', leftX: 0.990, topY: 0.015, width: 16, height: 18, border: false },
};

// button names and list of button objects
export const buttonNames = Object.keys(buttons);
export const buttonList = {};

function initializeProps() {
    buttonNames.forEach(name => {
        buttonList[name] ||= new Button(buttons[name]);
    })
}

// draw all buttons
export function drawButtons() {
    initializeProps();
    if (!GAME_MODE) {
        buttonNames.slice(0, 3).forEach(name => {
            buttonList[name].draw();
        })
    } else {
        buttonList['exitGame'].draw();
    }
}

// toggle to game mode
export let GAME_MODE = false;

export function toggleGameMode() {
    GAME_MODE = !GAME_MODE;
    game.lives = 3;
    game.showEndGameMessage = false;
}