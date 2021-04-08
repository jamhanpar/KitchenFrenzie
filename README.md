# Kitchen Frenzie
![alt text](https://github.com/jamhanpar/KitchenFrenzie/blob/main/dist/images/frontPage.png?raw=true)
During a season of COVID, I started to learn the joys of cooking and incorporating different ingredients as well as various kitchenware to perfect a few dishes. Kitchen Frenzie is a javascript game that encompasses some of the challenges in the kitchen using an entertaining approach. The objective of this project is to help me improve my Javascript skills as well as showcase some of the unique and fun effects you can create using Javascript.

# Demo
Checkout the live demo: https://www.jameshansungpark.com/KitchenFrenzie/

# App Features
## Mouse Movement Detection
As you move the mouse left and right, the rolling pin will move in vertical alignment with your mouse. This allows you to deflect the bagel and activate the ball and item collision.
![alt text](https://github.com/jamhanpar/KitchenFrenzie/blob/main/src/images/Kitchen_Frenzie_Intro_GIF.gif?raw=true)

## Prop (Kitchenware / Ingredients) Collision Detection
While in game mode, an event listener is constantly checking to see if the ball and an item has intersected and will remove the item on collision.

## Ball and Paddle Collision Detection
While in game mode, the ball will reverse it's velocity if it collides with the paddle. Depending on where the ball hits the paddle, the ball will accelerate more or less.

# Features in Progress
## Click Unique Animations - Work in Progress
Currently, you can click each kitchenware or ingredient and it will activate the game animation. Moving forward, I'd love to explore other interesting animations in the world of javascript and apply them to display unique animations for each item.

# Technologies & Implementation
### Prerequisites & Dependencies
- You have a basic understanding of vanilla Javascript and Javascript ES6.
- You have a basic understanding of event handlers.
- Webpack 4.44.2
- Sass 1.27.0
- NPM 6.4.1

### Functionality and MVPs
- User can click each element (kitchenware/ingredient) to initiate animation
- User can press start to play game
- User can move the mouse left and right to move the paddle
- Ingredients will self-destruct on collision with the ball (i.e. bagel)

### Wireframes
- /src
    - /assets
    - index.js
    - /js
        - Canvas.js
        - Game.js
        - Props.js
        - Paddle.js
        - Button.js
        - Ball.js
    - /stylesheets
        - main.css

### Architecture and Technology
- Javascript
- Google Fonts

### Implementation Timeline
- Day 1: User Instructions
- Day 2: Props and animation
- Day 3: Prop collision
- Day 4: Paddle & ball with collision
- Day 5: Game mode

### Bonus Features
- Click for unique animations
- Timer for game difficulty
- Add sound effects when objects collide with the bagel

### Run Instructions & Installations
- npm install
- npm run webpack:build
- npm run start
