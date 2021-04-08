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
            img.src = `src/images/ICON/${this.button.img}.png`;
            ctx.drawImage(img, this.x, this.y, this.button.width, this.button.height);
        } else {
            if (this.button.border) {
                ctx.strokeRect(this.x, this.y, this.button.width, this.button.height)
                ctx.fillStyle = 'rgba(242,246,248,0.7)';
                ctx.fillRect(this.x, this.y, this.button.width, this.button.height)
            }
            
            ctx.fillStyle = 'black';
            ctx.font = '20px sans serif';

            if (this.button.title === 'Play') {
                ctx.fillText(this.button.title, this.x+40, this.y+25);
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
            switch (this.button.title) {
              case "LinkedIn":
                window.open("https://www.linkedin.com/in/jameshansungpark/");
                break;
              case "Github":
                window.open("https://github.com/jamhanpar/KitchenFrenzie");
                break;
              case "AngelList":
                window.open("https://angel.co/u/jameshansungpark");
                break;
              case "Play":
                toggleGameMode();
                document.getElementById("navbar-container").style.display = "none";
                document.getElementById("instructions-container").style.display = "none";
                break;
              default:
                break;
            }
        }
    }
}

// add new buttons
const buttons = {
    // linkedIn: { title: 'LinkedIn', img: 'linkedIn-icon', leftX: 0.02, topY: 0.015, width: 40, height: 40, border: false},
    // github: { title: 'Github', img:'github-icon', leftX: 0.05, topY: 0.015, width: 40, height: 40, border: false },
    // AngelList: { title: 'AngelList', img: 'angellist-icon', leftX: 0.08, topY: 0.015, width: 40, height: 40, border: false},
    playGame: { title: 'Play', img: '', leftX: 0.465, topY: 0.29, width: 110, height: 40, border: true },
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
        buttonNames.slice(0, 4).forEach(name => {
            buttonList[name].draw();
        })
    }
}

// toggle to game mode
export let GAME_MODE = false;

export function toggleGameMode() {
    GAME_MODE = !GAME_MODE;
    game.lives = 3;
    game.showEndGameMessage = false;
}