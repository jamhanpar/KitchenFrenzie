/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: INTERVALID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERVALID", function() { return INTERVALID; });
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");

var INTERVALID;

window.onload = function () {
  var framesPerSecond = 60;
  window.addEventListener("resize", function () {
    resizeCanvas();
  });
  INTERVALID = setInterval(function () {
    Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["drawCanvas"])();
  }, 1000 / framesPerSecond);
};

function resizeCanvas() {
  _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width = window.innerWidth;
  _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height = window.innerHeight;
  Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["drawCanvas"])(); // refactor using debouncing concept
}

resizeCanvas();

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/*! exports provided: ball, animateBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ball", function() { return ball; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateBall", function() { return animateBall; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paddle */ "./src/scripts/paddle.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Ball = /*#__PURE__*/function () {
  function Ball() {
    _classCallCheck(this, Ball);

    this.x = window.innerWidth * 0.5;
    this.y = window.innerHeight * 0.5;
    this.width = 60;
    this.height = 60;
    this.radius = 8;
    this.color = "red";
    this.velocityX = 7;
    this.velocityY = 7;
  }

  _createClass(Ball, [{
    key: "animate",
    value: function animate() {
      this.move();
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var img = new Image();
      img.src = "src/images/FOOD/bread11.png";
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.velocityX;
      this.y += this.velocityY;

      if (this.x + this.width > _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width || this.x < 0) {
        this.velocityX = -this.velocityX;
      }

      if (this.y + this.height > _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height) {
        this.velocityY = -this.velocityY;
      }

      if (this.y < 0) {
        _game__WEBPACK_IMPORTED_MODULE_2__["game"].lives--;
        if (_game__WEBPACK_IMPORTED_MODULE_2__["game"].lives === 0) _game__WEBPACK_IMPORTED_MODULE_2__["game"].updateShowMessage;
        this.resetBall();
      }
    }
  }, {
    key: "resetBall",
    value: function resetBall() {
      this.x = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2;
      this.y = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2;
      this.velocityX = 5;
      this.velocityY = 5;
    }
  }]);

  return Ball;
}();

var ball = new Ball();

function checkBallPaddleCollision() {
  if (ball.y < _paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].y + _paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].height && ball.x > _paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].x && ball.x < _paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].x + _paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].width) {
    ball.velocityY = -ball.velocityY;
    ball.velocityX = -ball.velocityX;
    var deltaX = ball.x - (_paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].x + _paddle__WEBPACK_IMPORTED_MODULE_1__["paddle"].width / 2);
    ball.velocityX = deltaX * 0.25;
  }
}

function animateBall() {
  checkBallPaddleCollision();
  ball.animate();
}

/***/ }),

/***/ "./src/scripts/button.js":
/*!*******************************!*\
  !*** ./src/scripts/button.js ***!
  \*******************************/
/*! exports provided: buttonNames, buttonList, drawButtons, GAME_MODE, toggleGameMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonNames", function() { return buttonNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonList", function() { return buttonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawButtons", function() { return drawButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_MODE", function() { return GAME_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleGameMode", function() { return toggleGameMode; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Button = /*#__PURE__*/function () {
  function Button(button) {
    _classCallCheck(this, Button);

    this.button = button;
    this.x = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * this.button.leftX;
    this.y = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.button.topY;

    if (this.button.title === 'x') {
      this.x -= 3;
      this.y -= 14;
    }
  }

  _createClass(Button, [{
    key: "draw",
    value: function draw() {
      // if button has an icon, render the icon, otherwise create a button with title
      if (this.button.img) {
        var img = new Image();
        img.src = "src/images/ICON/".concat(this.button.img, ".png");
        _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img, this.x, this.y, this.button.width, this.button.height);
      } else {
        if (this.button.border) {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(this.x, this.y, this.button.width, this.button.height);
          _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'rgba(242,246,248,0.7)';
          _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(this.x, this.y, this.button.width, this.button.height);
        }

        _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = 'black';
        _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = '20px sans serif';

        if (this.button.title === 'Play Game') {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(this.button.title, this.x + 11, this.y + 25);
        } else if (this.button.title === 'x') {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(this.button.title, this.x + 3, this.y + 14);
        } else {
          _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(this.button.title, this.x, this.y);
        }
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(xmouse, ymouse) {
      if (this.x < xmouse && this.x + this.button.width > xmouse && this.y < ymouse && this.y + this.button.height > ymouse) {
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

          case "Play Game":
            toggleGameMode();
            break;
          //   case "x":
          //     // refresh page after click
          //     window.location.reload(false);
          //     break;

          default:
            break;
        }
      }
    }
  }]);

  return Button;
}(); // add new buttons


var buttons = {
  linkedIn: {
    title: 'LinkedIn',
    img: 'linkedIn-icon',
    leftX: 0.02,
    topY: 0.015,
    width: 40,
    height: 40,
    border: false
  },
  github: {
    title: 'Github',
    img: 'github-icon',
    leftX: 0.05,
    topY: 0.015,
    width: 40,
    height: 40,
    border: false
  },
  AngelList: {
    title: 'AngelList',
    img: 'angellist-icon',
    leftX: 0.08,
    topY: 0.015,
    width: 40,
    height: 40,
    border: false
  },
  playGame: {
    title: 'Play Game',
    img: '',
    leftX: 0.475,
    topY: 0.55,
    width: 110,
    height: 40,
    border: true
  } // exitGame: { title: 'x', img: '', leftX: 0.990, topY: 0.015, width: 16, height: 18, border: false },

}; // button names and list of button objects

var buttonNames = Object.keys(buttons);
var buttonList = {};

function initializeProps() {
  buttonNames.forEach(function (name) {
    buttonList[name] || (buttonList[name] = new Button(buttons[name]));
  });
} // draw all buttons


function drawButtons() {
  initializeProps();

  if (!GAME_MODE) {
    buttonNames.slice(0, 4).forEach(function (name) {
      buttonList[name].draw();
    });
  }
} // toggle to game mode

var GAME_MODE = false;
function toggleGameMode() {
  GAME_MODE = !GAME_MODE;
  _game__WEBPACK_IMPORTED_MODULE_1__["game"].lives = 3;
  _game__WEBPACK_IMPORTED_MODULE_1__["game"].showEndGameMessage = false;
}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: canvas, ctx, drawCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCanvas", function() { return drawCanvas; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./props */ "./src/scripts/props.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/scripts/button.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");




var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var drawCanvas = function drawCanvas() {
  clearCanvas();

  if (_button__WEBPACK_IMPORTED_MODULE_2__["GAME_MODE"]) {
    Object(_game__WEBPACK_IMPORTED_MODULE_3__["animateGame"])();
  } else {
    writeInstructions();
    Object(_props__WEBPACK_IMPORTED_MODULE_1__["drawProps"])();
  }

  Object(_button__WEBPACK_IMPORTED_MODULE_2__["drawButtons"])();
};

var clearCanvas = function clearCanvas() {
  return ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function writeInstructions() {
  ctx.fillStyle = 'black';
  var fontSize = canvas.height * 0.015;
  var width = canvas.width * 0.33; // 996px;

  var height = canvas.height * 0.175; // 176px;

  var text = "To start, press Play. Move your mouse left and right to control the rolling pin. Use the pin to deflect the bagel and calm the kitchen frenzy! Cooking can be chaotic! Sometimes, it's easier to explore one ingredient at a time. Click each kitchenware or ingredient and watch them run wild.";
  var words = text.split(' ');
  var maxWidth = width - 25;
  var lineHeight = height * 0.15;
  var line = '';
  var y = canvas.height * 0.43;
  ctx.font = fontSize.toString() + 'px Montserrat';
  ctx.fillStyle = 'rgba(242,246,248,0.7)';
  ctx.fillRect(canvas.width * 0.5 - width / 2, canvas.height * 0.5 - height / 1.25, width, height); // // ctx.lineJoin = "round";
  // // ctx.lineWidth = 20;

  ctx.fillStyle = "black";
  ctx.fillText("Made by James Park", canvas.width * 0.021, canvas.height * 0.97);
  ctx.fillText("INSTRUCTIONS:", canvas.width * 0.3475, canvas.height * 0.395); // ctx.fillText("To start, press Play. Move your mouse left and right to control the rolling pin.", canvas.width*0.3475, canvas.height*0.43);
  // ctx.fillText("Use the pin to deflect the bagel and calm the kitchen frenzy!", canvas.width*0.3475, canvas.height*0.45);
  // ctx.fillText("Cooking can be chaotic! Sometimes, it's easier to explore one ingredient at a time.", canvas.width*0.3475, canvas.height*0.49);
  // ctx.fillText("Click each kitchenware or ingredient and watch them run wild.", canvas.width*0.3475, canvas.height*0.51);

  for (var i = 0; i < words.length; i++) {
    var testLine = line + words[i] + ' ';
    var metrics = ctx.measureText(testLine);
    var testWidth = metrics.width;

    if (testWidth > maxWidth && i > 0) {
      ctx.fillText(line, canvas.width * 0.3475, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }

  ctx.fillText(line, canvas.width * 0.3475, y);
} // click event listener


canvas.addEventListener("click", function (e) {
  e.preventDefault();
  var mouse = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["calculateMousePos"])(e);
  _props__WEBPACK_IMPORTED_MODULE_1__["propNames"].forEach(function (item) {
    _props__WEBPACK_IMPORTED_MODULE_1__["drawnProps"][item].handleClick(mouse.x, mouse.y);
  });

  if (!_button__WEBPACK_IMPORTED_MODULE_2__["GAME_MODE"]) {
    _button__WEBPACK_IMPORTED_MODULE_2__["buttonNames"].forEach(function (name) {
      _button__WEBPACK_IMPORTED_MODULE_2__["buttonList"][name].handleClick(mouse.x, mouse.y);
    });
  } else {
    _button__WEBPACK_IMPORTED_MODULE_2__["buttonList"]['exitGame'].handleClick(mouse.x, mouse.y);
  }
});

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: game, animateGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateGame", function() { return animateGame; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/scripts/ball.js");
/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paddle */ "./src/scripts/paddle.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props */ "./src/scripts/props.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./src/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.lives = 1;
    this.showEndGameMessage = false;
    this.wonOrLost = true;
  }

  _createClass(Game, [{
    key: "update",
    value: function update() {
      this.updateShowMessage();
    }
  }, {
    key: "updateShowMessage",
    value: function updateShowMessage() {
      if (this.lives === 0) {
        this.showEndGameMessage = true;
        this.wonOrLost = false;
      } else if (Object(_props__WEBPACK_IMPORTED_MODULE_3__["checkDrawnPropsEmpty"])()) {
        this.showEndGameMessage = true;
      }
    }
  }]);

  return Game;
}();

var game = new Game();
var collisionSound = new Audio();
collisionSound.src = "src/sfx/mechanical_clock_ticks.mp3";
var animateGame = function animateGame() {
  collisionSound.play();
  game.update();

  if (game.showEndGameMessage) {
    showMessage();
  } else {
    showLives();
    Object(_props__WEBPACK_IMPORTED_MODULE_3__["animateAllItems"])();
    Object(_ball__WEBPACK_IMPORTED_MODULE_1__["animateBall"])();
    Object(_paddle__WEBPACK_IMPORTED_MODULE_2__["animatePaddle"])();
  }
};

function showMessage() {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "20px montserrat";

  if (game.wonOrLost) {
    var winText = "You Won!";
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(winText, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(winText).width / 2, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2);
  } else {
    var loseText = "You lose! Better luck next time!";
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText(loseText, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2 - _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].measureText(loseText).width / 2, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2);
  }

  clearInterval(_index__WEBPACK_IMPORTED_MODULE_4__["INTERVALID"]);
  setTimeout(function () {
    return window.location.reload();
  }, 2000);
}

function showLives() {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = "black";
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].font = "20px montserrat";
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillText("lives: " + game.lives, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.485, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.075);
}

/***/ }),

/***/ "./src/scripts/paddle.js":
/*!*******************************!*\
  !*** ./src/scripts/paddle.js ***!
  \*******************************/
/*! exports provided: paddle, animatePaddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddle", function() { return paddle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animatePaddle", function() { return animatePaddle; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Paddle = /*#__PURE__*/function () {
  function Paddle() {
    _classCallCheck(this, Paddle);

    this.x = 30;
    this.y = 30;
    this.width = 200;
    this.height = 30;
    this.color = "black";
  }

  _createClass(Paddle, [{
    key: "draw",
    value: function draw() {
      var img = new Image();
      img.src = "src/images/FOOD/tool26a.png";
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img, this.x, this.y, this.width, this.height);
    }
  }]);

  return Paddle;
}();

var paddle = new Paddle();
function animatePaddle() {
  paddle.x = mouse.x - paddle.width / 2;
  paddle.draw();
}
var mouse; // move paddle based on mouse movement

window.addEventListener("mousemove", function (e) {
  mouse = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["calculateMousePos"])(e);
});

/***/ }),

/***/ "./src/scripts/props.js":
/*!******************************!*\
  !*** ./src/scripts/props.js ***!
  \******************************/
/*! exports provided: props, propNames, drawnProps, checkDrawnPropsEmpty, drawProps, animateAllItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propNames", function() { return propNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawnProps", function() { return drawnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDrawnPropsEmpty", function() { return checkDrawnPropsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawProps", function() { return drawProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateAllItems", function() { return animateAllItems; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ "./src/scripts/ball.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Prop = /*#__PURE__*/function () {
  function Prop(item) {
    _classCallCheck(this, Prop);

    // sample of item: { img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 }
    this.item = item;
    this.animationToggle = false;
    this.x = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * this.item.posWRatio;
    this.y = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.item.posHRatio;
    this.width = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.item.wRatio;
    this.height = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.item.hRatio;
    this.pctPi = Math.PI / 180;
    this.angle = 0 * this.pctPi;
    this.counter1 = 0;
    this.counter2 = 16;
    this.velocityX = 5;
  }

  _createClass(Prop, [{
    key: "update",
    value: function update() {
      if (this.animationToggle) {
        this.wobble();
        if (this.x > _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width - this.width || this.x < 0) this.velocityX = -this.velocityX;
        this.x += this.velocityX;
      } else {
        this.drawImage();
      }
    }
  }, {
    key: "turnAnimationToggle",
    value: function turnAnimationToggle() {
      this.animationToggle = !this.animationToggle;
      if (this.animationToggle) this.update();
    }
  }, {
    key: "drawImage",
    value: function drawImage() {
      var useAnimatedImg = this.animationToggle ? "a" : "";
      var img = new Image();
      img.src = "src/images/FOOD/".concat(this.item.img).concat(useAnimatedImg, ".png");
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "wobble",
    value: function wobble() {
      // refactor to include random angles > 30, if time permits
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

      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(this.x + this.width / 2, this.y + this.height / 2);
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(this.angle); // after you rotate, brings canvas back to its origin position

      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(-this.x - this.width / 2, -this.y - this.height / 2);
      this.drawImage();
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
    }
  }, {
    key: "handleClick",
    value: function handleClick(xmouse, ymouse) {
      if (this.x < xmouse && this.x + this.width > xmouse && this.y < ymouse && this.y + this.height > ymouse) {
        // when mouse clicks on area of the item
        this.turnAnimationToggle();
        this.update();
      }
    }
  }]);

  return Prop;
}();

var props = {
  cuttingBoard: {
    name: 'cuttingBoard',
    img: "tool14",
    posWRatio: 0.33,
    posHRatio: 0.83,
    wRatio: 0.455,
    hRatio: 0.15
  },
  pepper: {
    name: 'pepper',
    img: "tool33",
    posWRatio: 0.19,
    posHRatio: 0.65,
    wRatio: 0.025,
    hRatio: 0.04
  },
  salt: {
    name: 'salt',
    img: "tool32",
    posWRatio: 0.18,
    posHRatio: 0.655,
    wRatio: 0.025,
    hRatio: 0.04
  },
  selterWater: {
    name: 'selterWater',
    img: "tool13",
    posWRatio: 0.285,
    posHRatio: 0.595,
    wRatio: 0.03,
    hRatio: 0.10
  },
  ginseng: {
    name: 'ginseng',
    img: "vegetable57",
    posWRatio: 0.35,
    posHRatio: 0.89,
    wRatio: 0.04,
    hRatio: 0.05
  },
  redPepper: {
    name: 'redPepper',
    img: "vegetable23",
    posWRatio: 0.35,
    posHRatio: 0.82,
    wRatio: 0.09,
    hRatio: 0.06
  },
  chiliPepper: {
    name: 'chiliPepper',
    img: "vegetable37",
    posWRatio: 0.44,
    posHRatio: 0.81,
    wRatio: 0.09,
    hRatio: 0.06
  },
  onion: {
    name: 'onion',
    img: "vegetable35",
    posWRatio: 0.47,
    posHRatio: 0.81,
    wRatio: 0.05,
    hRatio: 0.07
  },
  knife: {
    name: 'knife',
    img: "tool24",
    posWRatio: 0.57,
    posHRatio: 0.86,
    wRatio: 0.19,
    hRatio: 0.06
  },
  cup: {
    name: 'cup',
    img: "tool10",
    posWRatio: 0.89,
    posHRatio: 0.82,
    wRatio: 0.05,
    hRatio: 0.06
  },
  bowl: {
    name: 'bowl',
    img: "tool28",
    posWRatio: 0.15,
    posHRatio: 0.78,
    wRatio: 0.19,
    hRatio: 0.08
  },
  oyster: {
    name: 'oyster',
    img: "seafood08",
    posWRatio: 0.190,
    posHRatio: 0.77,
    wRatio: 0.06,
    hRatio: 0.04
  },
  shrimp: {
    name: 'shrimp',
    img: "seafood04",
    posWRatio: 0.21,
    posHRatio: 0.795,
    wRatio: 0.06,
    hRatio: 0.04
  },
  clam: {
    name: 'clam',
    img: "seafood06",
    posWRatio: 0.165,
    posHRatio: 0.77,
    wRatio: 0.06,
    hRatio: 0.04
  },
  crab: {
    name: 'crab',
    img: "seafood03",
    posWRatio: 0.17,
    posHRatio: 0.80,
    wRatio: 0.11,
    hRatio: 0.06
  },
  plate: {
    name: 'plate',
    img: "tool01",
    posWRatio: 0.825,
    posHRatio: 0.9,
    wRatio: 0.19,
    hRatio: 0.07
  },
  stringBeans: {
    name: 'stringBeans',
    img: "vegetable47",
    posWRatio: 0.84,
    posHRatio: 0.90,
    wRatio: 0.06,
    hRatio: 0.06
  },
  steak: {
    name: 'steak',
    img: "meat05",
    posWRatio: 0.86,
    posHRatio: 0.90,
    wRatio: 0.06,
    hRatio: 0.06
  },
  potatoes: {
    name: 'potatoes',
    img: "vegetable38",
    posWRatio: 0.88,
    posHRatio: 0.91,
    wRatio: 0.06,
    hRatio: 0.04
  },
  spoon: {
    name: 'spoon',
    img: "tool07",
    posWRatio: 0.80,
    posHRatio: 0.89,
    wRatio: 0.03,
    hRatio: 0.07
  },
  fork: {
    name: 'fork',
    img: "tool08",
    posWRatio: 0.93,
    posHRatio: 0.89,
    wRatio: 0.03,
    hRatio: 0.07
  },
  egg: {
    name: 'egg',
    img: "egg02",
    posWRatio: 0.50,
    posHRatio: 0.66,
    wRatio: 0.055,
    hRatio: 0.03
  },
  pot: {
    name: 'pot',
    img: "tool18",
    posWRatio: 0.575,
    posHRatio: 0.62,
    wRatio: 0.18,
    hRatio: 0.08
  },
  fish: {
    name: 'fish',
    img: "fish01",
    posWRatio: 0.60,
    posHRatio: 0.60,
    wRatio: 0.11,
    hRatio: 0.07
  },
  fish2: {
    name: 'fish2',
    img: "fish05",
    posWRatio: 0.594,
    posHRatio: 0.63,
    wRatio: 0.10,
    hRatio: 0.04
  },
  potLid: {
    name: 'potLid',
    img: "tool25",
    posWRatio: 0.57,
    posHRatio: 0.62,
    wRatio: 0.14,
    hRatio: 0.05
  },
  squash: {
    name: 'squash',
    img: "vegetable32",
    posWRatio: 0.75,
    posHRatio: 0.645,
    wRatio: 0.04,
    hRatio: 0.05
  },
  pumpkin: {
    name: 'pumpkin',
    img: "vegetable31",
    posWRatio: 0.765,
    posHRatio: 0.64,
    wRatio: 0.08,
    hRatio: 0.06
  },
  teaCup: {
    name: 'teaCup',
    img: "tool30",
    posWRatio: 0.915,
    posHRatio: 0.677,
    wRatio: 0.032,
    hRatio: 0.025
  },
  teaPot: {
    name: 'teaPot',
    img: "tool31",
    posWRatio: 0.93,
    posHRatio: 0.64,
    wRatio: 0.10,
    hRatio: 0.06
  },
  pan: {
    name: 'pan',
    img: "tool17",
    posWRatio: 0.415,
    posHRatio: 0.66,
    wRatio: 0.18,
    hRatio: 0.05
  },
  meatOnAStick2: {
    name: 'meatOnAStick2',
    img: "meat06",
    posWRatio: 0.43,
    posHRatio: 0.65,
    wRatio: 0.07,
    hRatio: 0.06
  },
  towel: {
    name: 'towel',
    img: "tool15",
    posWRatio: 0.055,
    posHRatio: 0.74,
    wRatio: 0.05,
    hRatio: 0.06
  }
};
var propNames = Object.keys(props);
var drawnProps = {}; // iterate through props using propNames and draw each item and add it to drawnProps object

function initializeProps() {
  propNames.forEach(function (item) {
    drawnProps[item] || (drawnProps[item] = new Prop(props[item]));
  });
}

function checkPropsBallCollision() {
  var ballCenterX = _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].x + _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].width / 2;
  var ballCenterY = _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].y + _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].height / 2;
  propNames.forEach(function (item, i) {
    var itemCenterX = drawnProps[item].x + drawnProps[item].width / 2;
    var itemCenterY = drawnProps[item].y + drawnProps[item].height / 2;

    if (Math.hypot(ballCenterX - itemCenterX, ballCenterY - itemCenterY) - drawnProps[item].width / 2 < 1) {
      _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].velocityY = -_ball__WEBPACK_IMPORTED_MODULE_1__["ball"].velocityY;
      _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].velocityX = -_ball__WEBPACK_IMPORTED_MODULE_1__["ball"].velocityX;
      var deltaX = _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].x - (drawnProps[item].x + drawnProps[item].width / 2);
      _ball__WEBPACK_IMPORTED_MODULE_1__["ball"].velocityX = deltaX * 0.1;
      propNames.splice(i, 1);
    }
  });
}

function checkDrawnPropsEmpty() {
  if (propNames.length === 0) {
    return true;
  }

  return false;
}
function drawProps() {
  initializeProps();
  propNames.forEach(function (item) {
    drawnProps[item].update();
  });
} // refactor to include a switch ('animateAll', 'animateItem', 'dormantAll')
// toggle all items to animated

function animateAllItems() {
  initializeProps();
  checkPropsBallCollision();
  propNames.forEach(function (item) {
    drawnProps[item].animationToggle = true;
    drawnProps[item].update();
  });
}

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! exports provided: getDistance, calculateMousePos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistance", function() { return getDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateMousePos", function() { return calculateMousePos; });
// get distance between 2 objects (specifically circles)
function getDistance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
} // calculate mouse position

function calculateMousePos(e) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = e.clientX - rect.left - root.scrollLeft;
  var mouseY = e.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZGRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlscy5qcyJdLCJuYW1lcyI6WyJJTlRFUlZBTElEIiwid2luZG93Iiwib25sb2FkIiwiZnJhbWVzUGVyU2Vjb25kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2l6ZUNhbnZhcyIsInNldEludGVydmFsIiwiZHJhd0NhbnZhcyIsImNhbnZhcyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiQmFsbCIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJtb3ZlIiwiZHJhdyIsImltZyIsIkltYWdlIiwic3JjIiwiY3R4IiwiZHJhd0ltYWdlIiwiZ2FtZSIsImxpdmVzIiwidXBkYXRlU2hvd01lc3NhZ2UiLCJyZXNldEJhbGwiLCJiYWxsIiwiY2hlY2tCYWxsUGFkZGxlQ29sbGlzaW9uIiwicGFkZGxlIiwiZGVsdGFYIiwiYW5pbWF0ZUJhbGwiLCJhbmltYXRlIiwiQnV0dG9uIiwiYnV0dG9uIiwibGVmdFgiLCJ0b3BZIiwidGl0bGUiLCJib3JkZXIiLCJzdHJva2VSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmb250IiwiZmlsbFRleHQiLCJ4bW91c2UiLCJ5bW91c2UiLCJvcGVuIiwidG9nZ2xlR2FtZU1vZGUiLCJidXR0b25zIiwibGlua2VkSW4iLCJnaXRodWIiLCJBbmdlbExpc3QiLCJwbGF5R2FtZSIsImJ1dHRvbk5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImJ1dHRvbkxpc3QiLCJpbml0aWFsaXplUHJvcHMiLCJmb3JFYWNoIiwibmFtZSIsImRyYXdCdXR0b25zIiwiR0FNRV9NT0RFIiwic2xpY2UiLCJzaG93RW5kR2FtZU1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImNsZWFyQ2FudmFzIiwiYW5pbWF0ZUdhbWUiLCJ3cml0ZUluc3RydWN0aW9ucyIsImRyYXdQcm9wcyIsImNsZWFyUmVjdCIsImZvbnRTaXplIiwidGV4dCIsIndvcmRzIiwic3BsaXQiLCJtYXhXaWR0aCIsImxpbmVIZWlnaHQiLCJsaW5lIiwidG9TdHJpbmciLCJpIiwibGVuZ3RoIiwidGVzdExpbmUiLCJtZXRyaWNzIiwibWVhc3VyZVRleHQiLCJ0ZXN0V2lkdGgiLCJlIiwicHJldmVudERlZmF1bHQiLCJtb3VzZSIsImNhbGN1bGF0ZU1vdXNlUG9zIiwicHJvcE5hbWVzIiwiaXRlbSIsImRyYXduUHJvcHMiLCJoYW5kbGVDbGljayIsIkdhbWUiLCJ3b25Pckxvc3QiLCJjaGVja0RyYXduUHJvcHNFbXB0eSIsImNvbGxpc2lvblNvdW5kIiwiQXVkaW8iLCJwbGF5IiwidXBkYXRlIiwic2hvd01lc3NhZ2UiLCJzaG93TGl2ZXMiLCJhbmltYXRlQWxsSXRlbXMiLCJhbmltYXRlUGFkZGxlIiwid2luVGV4dCIsImxvc2VUZXh0IiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsIlBhZGRsZSIsIlByb3AiLCJhbmltYXRpb25Ub2dnbGUiLCJwb3NXUmF0aW8iLCJwb3NIUmF0aW8iLCJ3UmF0aW8iLCJoUmF0aW8iLCJwY3RQaSIsIk1hdGgiLCJQSSIsImFuZ2xlIiwiY291bnRlcjEiLCJjb3VudGVyMiIsIndvYmJsZSIsInVzZUFuaW1hdGVkSW1nIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJ0dXJuQW5pbWF0aW9uVG9nZ2xlIiwicHJvcHMiLCJjdXR0aW5nQm9hcmQiLCJwZXBwZXIiLCJzYWx0Iiwic2VsdGVyV2F0ZXIiLCJnaW5zZW5nIiwicmVkUGVwcGVyIiwiY2hpbGlQZXBwZXIiLCJvbmlvbiIsImtuaWZlIiwiY3VwIiwiYm93bCIsIm95c3RlciIsInNocmltcCIsImNsYW0iLCJjcmFiIiwicGxhdGUiLCJzdHJpbmdCZWFucyIsInN0ZWFrIiwicG90YXRvZXMiLCJzcG9vbiIsImZvcmsiLCJlZ2ciLCJwb3QiLCJmaXNoIiwiZmlzaDIiLCJwb3RMaWQiLCJzcXVhc2giLCJwdW1wa2luIiwidGVhQ3VwIiwidGVhUG90IiwicGFuIiwibWVhdE9uQVN0aWNrMiIsInRvd2VsIiwiY2hlY2tQcm9wc0JhbGxDb2xsaXNpb24iLCJiYWxsQ2VudGVyWCIsImJhbGxDZW50ZXJZIiwiaXRlbUNlbnRlclgiLCJpdGVtQ2VudGVyWSIsImh5cG90Iiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInhEaXN0IiwieURpc3QiLCJzcXJ0IiwicG93IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJtb3VzZVgiLCJjbGllbnRYIiwibGVmdCIsInNjcm9sbExlZnQiLCJtb3VzZVkiLCJjbGllbnRZIiwidG9wIiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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LEVBQXpCLEVBQTZCQyxFQUE3QixFQUFpQ0MsRUFBakMsRUFBcUM7QUFDeEMsTUFBSUMsS0FBSyxHQUFHRixFQUFFLEdBQUdGLEVBQWpCO0FBQ0EsTUFBSUssS0FBSyxHQUFHRixFQUFFLEdBQUdGLEVBQWpCO0FBRUEsU0FBT3ZELElBQUksQ0FBQzRELElBQUwsQ0FBVTVELElBQUksQ0FBQzZELEdBQUwsQ0FBU0gsS0FBVCxFQUFnQixDQUFoQixJQUFxQjFELElBQUksQ0FBQzZELEdBQUwsQ0FBU0YsS0FBVCxFQUFnQixDQUFoQixDQUEvQixDQUFQO0FBQ0gsQyxDQUVEOztBQUNPLFNBQVN6RixpQkFBVCxDQUEyQkgsQ0FBM0IsRUFBOEI7QUFDakMsTUFBTStGLElBQUksR0FBR2pMLE1BQU0sQ0FBQ2tMLHFCQUFQLEVBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUd2SCxRQUFRLENBQUN3SCxlQUF0QjtBQUNBLE1BQUlDLE1BQU0sR0FBR25HLENBQUMsQ0FBQ29HLE9BQUYsR0FBWUwsSUFBSSxDQUFDTSxJQUFqQixHQUF3QkosSUFBSSxDQUFDSyxVQUExQztBQUNBLE1BQUlDLE1BQU0sR0FBR3ZHLENBQUMsQ0FBQ3dHLE9BQUYsR0FBWVQsSUFBSSxDQUFDVSxHQUFqQixHQUF1QlIsSUFBSSxDQUFDUyxTQUF6QztBQUVBLFNBQU87QUFDSHRMLEtBQUMsRUFBRStLLE1BREE7QUFFSDlLLEtBQUMsRUFBRWtMO0FBRkEsR0FBUDtBQUlILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY2FudmFzLCBkcmF3Q2FudmFzIH0gZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcblxuZXhwb3J0IGxldCBJTlRFUlZBTElEO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBmcmFtZXNQZXJTZWNvbmQgPSA2MDtcbiAgXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtyZXNpemVDYW52YXMoKX0pO1xuICBcbiAgSU5URVJWQUxJRCA9IHNldEludGVydmFsKCgpID0+IHtkcmF3Q2FudmFzKCl9LCAxMDAwIC8gZnJhbWVzUGVyU2Vjb25kKTtcbn07XG5cbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGRyYXdDYW52YXMoKTtcblxuICAvLyByZWZhY3RvciB1c2luZyBkZWJvdW5jaW5nIGNvbmNlcHRcbn1cblxucmVzaXplQ2FudmFzKCk7IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgcGFkZGxlIH0gZnJvbSBcIi4vcGFkZGxlXCI7XHJcbmltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5jbGFzcyBCYWxsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMueCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC41O1xyXG4gICAgdGhpcy55ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC41O1xyXG4gICAgdGhpcy53aWR0aCA9IDYwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA2MDtcclxuICAgIHRoaXMucmFkaXVzID0gODtcclxuICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgdGhpcy52ZWxvY2l0eVggPSA3O1xyXG4gICAgdGhpcy52ZWxvY2l0eVkgPSA3O1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIHRoaXMubW92ZSgpO1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IGBzcmMvaW1hZ2VzL0ZPT0QvYnJlYWQxMS5wbmdgO1xyXG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYO1xyXG4gICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHlZO1xyXG5cclxuICAgIGlmICh0aGlzLnggKyB0aGlzLndpZHRoID4gY2FudmFzLndpZHRoIHx8IHRoaXMueCA8IDApIHtcclxuICAgICAgdGhpcy52ZWxvY2l0eVggPSAtdGhpcy52ZWxvY2l0eVg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICB0aGlzLnZlbG9jaXR5WSA9IC10aGlzLnZlbG9jaXR5WTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy55IDwgMCkge1xyXG4gICAgICBnYW1lLmxpdmVzLS07XHJcbiAgICAgIGlmIChnYW1lLmxpdmVzID09PSAwKSBnYW1lLnVwZGF0ZVNob3dNZXNzYWdlO1xyXG4gICAgICB0aGlzLnJlc2V0QmFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRCYWxsKCkge1xyXG4gICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcclxuICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xyXG4gICAgdGhpcy52ZWxvY2l0eVggPSA1O1xyXG4gICAgdGhpcy52ZWxvY2l0eVkgPSA1O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJhbGwgPSBuZXcgQmFsbCgpO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tCYWxsUGFkZGxlQ29sbGlzaW9uKCkge1xyXG4gIGlmIChcclxuICAgIGJhbGwueSA8IHBhZGRsZS55ICsgcGFkZGxlLmhlaWdodCAmJlxyXG4gICAgYmFsbC54ID4gcGFkZGxlLnggJiZcclxuICAgIGJhbGwueCA8IHBhZGRsZS54ICsgcGFkZGxlLndpZHRoXHJcbiAgKSB7XHJcbiAgICBiYWxsLnZlbG9jaXR5WSA9IC1iYWxsLnZlbG9jaXR5WTtcclxuICAgIGJhbGwudmVsb2NpdHlYID0gLWJhbGwudmVsb2NpdHlYO1xyXG4gICAgbGV0IGRlbHRhWCA9IGJhbGwueCAtIChwYWRkbGUueCArIHBhZGRsZS53aWR0aCAvIDIpO1xyXG4gICAgYmFsbC52ZWxvY2l0eVggPSBkZWx0YVggKiAwLjI1O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVCYWxsKCkge1xyXG4gIGNoZWNrQmFsbFBhZGRsZUNvbGxpc2lvbigpO1xyXG4gIGJhbGwuYW5pbWF0ZSgpO1xyXG59XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcbmNsYXNzIEJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGggKiB0aGlzLmJ1dHRvbi5sZWZ0WDtcclxuICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0ICogdGhpcy5idXR0b24udG9wWTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5idXR0b24udGl0bGUgPT09ICd4Jykge1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gMztcclxuICAgICAgICAgICAgdGhpcy55IC09IDE0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIC8vIGlmIGJ1dHRvbiBoYXMgYW4gaWNvbiwgcmVuZGVyIHRoZSBpY29uLCBvdGhlcndpc2UgY3JlYXRlIGEgYnV0dG9uIHdpdGggdGl0bGVcclxuICAgICAgICBpZiAodGhpcy5idXR0b24uaW1nKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IGBzcmMvaW1hZ2VzL0lDT04vJHt0aGlzLmJ1dHRvbi5pbWd9LnBuZ2A7XHJcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy5idXR0b24ud2lkdGgsIHRoaXMuYnV0dG9uLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uLmJvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuYnV0dG9uLndpZHRoLCB0aGlzLmJ1dHRvbi5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjQyLDI0NiwyNDgsMC43KSc7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuYnV0dG9uLndpZHRoLCB0aGlzLmJ1dHRvbi5oZWlnaHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICBjdHguZm9udCA9ICcyMHB4IHNhbnMgc2VyaWYnO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uLnRpdGxlID09PSAnUGxheSBHYW1lJykge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuYnV0dG9uLnRpdGxlLCB0aGlzLngrMTEsIHRoaXMueSsyNSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5idXR0b24udGl0bGUgPT09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuYnV0dG9uLnRpdGxlLCB0aGlzLngrMywgdGhpcy55KzE0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmJ1dHRvbi50aXRsZSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKHhtb3VzZSwgeW1vdXNlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLnggPCB4bW91c2UgJiZcclxuICAgICAgICAgICAgdGhpcy54ICsgdGhpcy5idXR0b24ud2lkdGggPiB4bW91c2UgJiZcclxuICAgICAgICAgICAgdGhpcy55IDwgeW1vdXNlICYmXHJcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMuYnV0dG9uLmhlaWdodCA+IHltb3VzZVxyXG4gICAgICAgICAgICApIHsgXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5idXR0b24udGl0bGUpIHtcclxuICAgICAgICAgICAgICBjYXNlIFwiTGlua2VkSW5cIjpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2phbWVzaGFuc3VuZ3BhcmsvXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkdpdGh1YlwiOlxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vamFtaGFucGFyL0tpdGNoZW5GcmVuemllXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIkFuZ2VsTGlzdFwiOlxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2FuZ2VsLmNvL3UvamFtZXNoYW5zdW5ncGFya1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJQbGF5IEdhbWVcIjpcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUdhbWVNb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICBjYXNlIFwieFwiOlxyXG4gICAgICAgICAgICAvLyAgICAgLy8gcmVmcmVzaCBwYWdlIGFmdGVyIGNsaWNrXHJcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gYWRkIG5ldyBidXR0b25zXHJcbmNvbnN0IGJ1dHRvbnMgPSB7XHJcbiAgICBsaW5rZWRJbjogeyB0aXRsZTogJ0xpbmtlZEluJywgaW1nOiAnbGlua2VkSW4taWNvbicsIGxlZnRYOiAwLjAyLCB0b3BZOiAwLjAxNSwgd2lkdGg6IDQwLCBoZWlnaHQ6IDQwLCBib3JkZXI6IGZhbHNlfSxcclxuICAgIGdpdGh1YjogeyB0aXRsZTogJ0dpdGh1YicsIGltZzonZ2l0aHViLWljb24nLCBsZWZ0WDogMC4wNSwgdG9wWTogMC4wMTUsIHdpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgYm9yZGVyOiBmYWxzZSB9LFxyXG4gICAgQW5nZWxMaXN0OiB7IHRpdGxlOiAnQW5nZWxMaXN0JywgaW1nOiAnYW5nZWxsaXN0LWljb24nLCBsZWZ0WDogMC4wOCwgdG9wWTogMC4wMTUsIHdpZHRoOiA0MCwgaGVpZ2h0OiA0MCwgYm9yZGVyOiBmYWxzZX0sXHJcbiAgICBwbGF5R2FtZTogeyB0aXRsZTogJ1BsYXkgR2FtZScsIGltZzogJycsIGxlZnRYOiAwLjQ3NSwgdG9wWTogMC41NSwgd2lkdGg6IDExMCwgaGVpZ2h0OiA0MCwgYm9yZGVyOiB0cnVlIH0sXHJcbiAgICAvLyBleGl0R2FtZTogeyB0aXRsZTogJ3gnLCBpbWc6ICcnLCBsZWZ0WDogMC45OTAsIHRvcFk6IDAuMDE1LCB3aWR0aDogMTYsIGhlaWdodDogMTgsIGJvcmRlcjogZmFsc2UgfSxcclxufTtcclxuXHJcbi8vIGJ1dHRvbiBuYW1lcyBhbmQgbGlzdCBvZiBidXR0b24gb2JqZWN0c1xyXG5leHBvcnQgY29uc3QgYnV0dG9uTmFtZXMgPSBPYmplY3Qua2V5cyhidXR0b25zKTtcclxuZXhwb3J0IGNvbnN0IGJ1dHRvbkxpc3QgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9wcygpIHtcclxuICAgIGJ1dHRvbk5hbWVzLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgYnV0dG9uTGlzdFtuYW1lXSB8fD0gbmV3IEJ1dHRvbihidXR0b25zW25hbWVdKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIGRyYXcgYWxsIGJ1dHRvbnNcclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCdXR0b25zKCkge1xyXG4gICAgaW5pdGlhbGl6ZVByb3BzKCk7XHJcbiAgICBpZiAoIUdBTUVfTU9ERSkge1xyXG4gICAgICAgIGJ1dHRvbk5hbWVzLnNsaWNlKDAsIDQpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkxpc3RbbmFtZV0uZHJhdygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHRvZ2dsZSB0byBnYW1lIG1vZGVcclxuZXhwb3J0IGxldCBHQU1FX01PREUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVHYW1lTW9kZSgpIHtcclxuICAgIEdBTUVfTU9ERSA9ICFHQU1FX01PREU7XHJcbiAgICBnYW1lLmxpdmVzID0gMztcclxuICAgIGdhbWUuc2hvd0VuZEdhbWVNZXNzYWdlID0gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyBjYWxjdWxhdGVNb3VzZVBvcyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBwcm9wTmFtZXMsIGRyYXduUHJvcHMsIGRyYXdQcm9wcyB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IGJ1dHRvbk5hbWVzLCBidXR0b25MaXN0LCBkcmF3QnV0dG9ucywgR0FNRV9NT0RFIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGFuaW1hdGVHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XHJcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Q2FudmFzID0gKCkgPT4ge1xyXG4gIGNsZWFyQ2FudmFzKClcclxuICBpZiAoR0FNRV9NT0RFKSB7XHJcbiAgICBhbmltYXRlR2FtZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHdyaXRlSW5zdHJ1Y3Rpb25zKClcclxuICAgIGRyYXdQcm9wcygpXHJcbiAgfVxyXG4gIGRyYXdCdXR0b25zKClcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ2FudmFzID0gKCkgPT4gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuZnVuY3Rpb24gd3JpdGVJbnN0cnVjdGlvbnMoKSB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XHJcbiAgY29uc3QgZm9udFNpemUgPSBjYW52YXMuaGVpZ2h0ICogMC4wMTU7XHJcbiAgY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGggKiAwLjMzOyAvLyA5OTZweDtcclxuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ICogMC4xNzU7IC8vIDE3NnB4O1xyXG4gIGxldCB0ZXh0ID0gXCJUbyBzdGFydCwgcHJlc3MgUGxheS4gTW92ZSB5b3VyIG1vdXNlIGxlZnQgYW5kIHJpZ2h0IHRvIGNvbnRyb2wgdGhlIHJvbGxpbmcgcGluLiBVc2UgdGhlIHBpbiB0byBkZWZsZWN0IHRoZSBiYWdlbCBhbmQgY2FsbSB0aGUga2l0Y2hlbiBmcmVuenkhIENvb2tpbmcgY2FuIGJlIGNoYW90aWMhIFNvbWV0aW1lcywgaXQncyBlYXNpZXIgdG8gZXhwbG9yZSBvbmUgaW5ncmVkaWVudCBhdCBhIHRpbWUuIENsaWNrIGVhY2gga2l0Y2hlbndhcmUgb3IgaW5ncmVkaWVudCBhbmQgd2F0Y2ggdGhlbSBydW4gd2lsZC5cIjtcclxuICBsZXQgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyk7XHJcbiAgbGV0IG1heFdpZHRoID0gd2lkdGgtMjU7XHJcbiAgbGV0IGxpbmVIZWlnaHQgPSBoZWlnaHQqMC4xNTtcclxuICBsZXQgbGluZSA9ICcnO1xyXG4gIGxldCB5ID0gY2FudmFzLmhlaWdodCowLjQzO1xyXG5cclxuICBjdHguZm9udCA9IGZvbnRTaXplLnRvU3RyaW5nKCkgKyAncHggTW9udHNlcnJhdCc7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI0MiwyNDYsMjQ4LDAuNyknO1xyXG4gIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGgqMC41LXdpZHRoLzIsIGNhbnZhcy5oZWlnaHQqMC41LWhlaWdodC8xLjI1LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAvLyAvLyBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XHJcbiAgLy8gLy8gY3R4LmxpbmVXaWR0aCA9IDIwO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmZpbGxUZXh0KFwiTWFkZSBieSBKYW1lcyBQYXJrXCIsIGNhbnZhcy53aWR0aCowLjAyMSwgY2FudmFzLmhlaWdodCAqIDAuOTcpO1xyXG4gIGN0eC5maWxsVGV4dChcIklOU1RSVUNUSU9OUzpcIiwgY2FudmFzLndpZHRoKjAuMzQ3NSwgY2FudmFzLmhlaWdodCowLjM5NSk7XHJcbiAgLy8gY3R4LmZpbGxUZXh0KFwiVG8gc3RhcnQsIHByZXNzIFBsYXkuIE1vdmUgeW91ciBtb3VzZSBsZWZ0IGFuZCByaWdodCB0byBjb250cm9sIHRoZSByb2xsaW5nIHBpbi5cIiwgY2FudmFzLndpZHRoKjAuMzQ3NSwgY2FudmFzLmhlaWdodCowLjQzKTtcclxuICAvLyBjdHguZmlsbFRleHQoXCJVc2UgdGhlIHBpbiB0byBkZWZsZWN0IHRoZSBiYWdlbCBhbmQgY2FsbSB0aGUga2l0Y2hlbiBmcmVuenkhXCIsIGNhbnZhcy53aWR0aCowLjM0NzUsIGNhbnZhcy5oZWlnaHQqMC40NSk7XHJcbiAgLy8gY3R4LmZpbGxUZXh0KFwiQ29va2luZyBjYW4gYmUgY2hhb3RpYyEgU29tZXRpbWVzLCBpdCdzIGVhc2llciB0byBleHBsb3JlIG9uZSBpbmdyZWRpZW50IGF0IGEgdGltZS5cIiwgY2FudmFzLndpZHRoKjAuMzQ3NSwgY2FudmFzLmhlaWdodCowLjQ5KTtcclxuICAvLyBjdHguZmlsbFRleHQoXCJDbGljayBlYWNoIGtpdGNoZW53YXJlIG9yIGluZ3JlZGllbnQgYW5kIHdhdGNoIHRoZW0gcnVuIHdpbGQuXCIsIGNhbnZhcy53aWR0aCowLjM0NzUsIGNhbnZhcy5oZWlnaHQqMC41MSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgbGV0IHRlc3RMaW5lID0gbGluZSArIHdvcmRzW2ldICsgJyAnO1xyXG4gICAgbGV0IG1ldHJpY3MgPSBjdHgubWVhc3VyZVRleHQodGVzdExpbmUpO1xyXG4gICAgbGV0IHRlc3RXaWR0aCA9IG1ldHJpY3Mud2lkdGg7XHJcblxyXG4gICAgaWYgKHRlc3RXaWR0aCA+IG1heFdpZHRoICYmIGkgPiAwKSB7XHJcbiAgICAgIGN0eC5maWxsVGV4dChsaW5lLCBjYW52YXMud2lkdGgqMC4zNDc1LCB5KTtcclxuICAgICAgbGluZSA9IHdvcmRzW2ldICsgJyAnO1xyXG4gICAgICB5ICs9IGxpbmVIZWlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaW5lID0gdGVzdExpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdHguZmlsbFRleHQobGluZSwgY2FudmFzLndpZHRoKjAuMzQ3NSwgeSk7XHJcbn1cclxuXHJcbi8vIGNsaWNrIGV2ZW50IGxpc3RlbmVyXHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgY29uc3QgbW91c2UgPSBjYWxjdWxhdGVNb3VzZVBvcyhlKTtcclxuXHJcbiAgcHJvcE5hbWVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBkcmF3blByb3BzW2l0ZW1dLmhhbmRsZUNsaWNrKG1vdXNlLngsIG1vdXNlLnkpO1xyXG4gIH0pXHJcblxyXG4gIGlmICghR0FNRV9NT0RFKSB7XHJcbiAgICBidXR0b25OYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBidXR0b25MaXN0W25hbWVdLmhhbmRsZUNsaWNrKG1vdXNlLngsIG1vdXNlLnkpO1xyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgYnV0dG9uTGlzdFsnZXhpdEdhbWUnXS5oYW5kbGVDbGljayhtb3VzZS54LCBtb3VzZS55KTtcclxuICB9XHJcbn0pOyIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcbmltcG9ydCB7IGFuaW1hdGVCYWxsIH0gZnJvbSBcIi4vYmFsbFwiO1xyXG5pbXBvcnQgeyBhbmltYXRlUGFkZGxlIH0gZnJvbSBcIi4vcGFkZGxlXCI7XHJcbmltcG9ydCB7IGFuaW1hdGVBbGxJdGVtcywgY2hlY2tEcmF3blByb3BzRW1wdHkgfSBmcm9tIFwiLi9wcm9wc1wiO1xyXG5pbXBvcnQgeyBJTlRFUlZBTElEIH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubGl2ZXMgPSAxO1xyXG4gICAgdGhpcy5zaG93RW5kR2FtZU1lc3NhZ2UgPSBmYWxzZTtcclxuICAgIHRoaXMud29uT3JMb3N0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlU2hvd01lc3NhZ2UoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNob3dNZXNzYWdlKCkge1xyXG4gICAgaWYgKHRoaXMubGl2ZXMgPT09IDApIHtcclxuICAgICAgdGhpcy5zaG93RW5kR2FtZU1lc3NhZ2UgPSB0cnVlO1xyXG4gICAgICB0aGlzLndvbk9yTG9zdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmIChjaGVja0RyYXduUHJvcHNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuc2hvd0VuZEdhbWVNZXNzYWdlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcclxuY29uc3QgY29sbGlzaW9uU291bmQgPSBuZXcgQXVkaW8oKTtcclxuY29sbGlzaW9uU291bmQuc3JjID0gXCJzcmMvc2Z4L21lY2hhbmljYWxfY2xvY2tfdGlja3MubXAzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYW5pbWF0ZUdhbWUgPSAoKSA9PiB7XHJcbiAgY29sbGlzaW9uU291bmQucGxheSgpO1xyXG4gIGdhbWUudXBkYXRlKCk7XHJcbiAgaWYgKGdhbWUuc2hvd0VuZEdhbWVNZXNzYWdlKSB7IFxyXG4gICAgc2hvd01lc3NhZ2UoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2hvd0xpdmVzKCk7XHJcbiAgICBhbmltYXRlQWxsSXRlbXMoKTtcclxuICAgIGFuaW1hdGVCYWxsKCk7XHJcbiAgICBhbmltYXRlUGFkZGxlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2hvd01lc3NhZ2UoKSB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjBweCBtb250c2VycmF0XCI7XHJcbiAgaWYgKGdhbWUud29uT3JMb3N0KSB7XHJcbiAgICBsZXQgd2luVGV4dCA9IFwiWW91IFdvbiFcIjtcclxuICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgd2luVGV4dCxcclxuICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCh3aW5UZXh0KS53aWR0aCAvIDIsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgbG9zZVRleHQgPSBcIllvdSBsb3NlISBCZXR0ZXIgbHVjayBuZXh0IHRpbWUhXCI7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGxvc2VUZXh0LFxyXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KGxvc2VUZXh0KS53aWR0aCAvIDIsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyXHJcbiAgICApO1xyXG4gIH1cclxuICBjbGVhckludGVydmFsKElOVEVSVkFMSUQpXHJcbiAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDIwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TGl2ZXMoKSB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICBjdHguZm9udCA9IFwiMjBweCBtb250c2VycmF0XCI7XHJcbiAgY3R4LmZpbGxUZXh0KFwibGl2ZXM6IFwiICsgZ2FtZS5saXZlcywgY2FudmFzLndpZHRoICogMC40ODUsIGNhbnZhcy5oZWlnaHQgKiAwLjA3NSk7XHJcbn0iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVNb3VzZVBvcyB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBQYWRkbGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy54ID0gMzA7XHJcbiAgICB0aGlzLnkgPSAzMDtcclxuICAgIHRoaXMud2lkdGggPSAyMDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDMwO1xyXG4gICAgdGhpcy5jb2xvciA9IFwiYmxhY2tcIjtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gYHNyYy9pbWFnZXMvRk9PRC90b29sMjZhLnBuZ2A7XHJcbiAgICBjdHguZHJhd0ltYWdlKGltZywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYWRkbGUgPSBuZXcgUGFkZGxlKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZVBhZGRsZSgpIHtcclxuICBwYWRkbGUueCA9IG1vdXNlLnggLSBwYWRkbGUud2lkdGggLyAyO1xyXG4gIHBhZGRsZS5kcmF3KCk7XHJcbn1cclxuXHJcbmxldCBtb3VzZTtcclxuXHJcbi8vIG1vdmUgcGFkZGxlIGJhc2VkIG9uIG1vdXNlIG1vdmVtZW50XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgbW91c2UgPSBjYWxjdWxhdGVNb3VzZVBvcyhlKTtcclxufSk7IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHsgYmFsbCB9IGZyb20gXCIuL2JhbGxcIjtcclxuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbmNsYXNzIFByb3Age1xyXG4gIGNvbnN0cnVjdG9yKGl0ZW0pIHtcclxuICAgIC8vIHNhbXBsZSBvZiBpdGVtOiB7IGltZzogXCJ0b29sMzJcIiwgcG9zV1JhdGlvOiAwLjE4LCBwb3NIUmF0aW86IDAuNjU1LCB3UmF0aW86IDAuMDI1LCBoUmF0aW86IDAuMDQgfVxyXG4gICAgdGhpcy5pdGVtID0gaXRlbTtcclxuICAgIHRoaXMuYW5pbWF0aW9uVG9nZ2xlID0gZmFsc2U7XHJcbiAgICB0aGlzLnggPSBjYW52YXMud2lkdGggKiB0aGlzLml0ZW0ucG9zV1JhdGlvO1xyXG4gICAgdGhpcy55ID0gY2FudmFzLmhlaWdodCAqIHRoaXMuaXRlbS5wb3NIUmF0aW87XHJcbiAgICB0aGlzLndpZHRoID0gY2FudmFzLmhlaWdodCAqIHRoaXMuaXRlbS53UmF0aW87XHJcbiAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQgKiB0aGlzLml0ZW0uaFJhdGlvO1xyXG4gICAgdGhpcy5wY3RQaSA9IE1hdGguUEkgLyAxODA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMCAqIHRoaXMucGN0UGk7XHJcbiAgICB0aGlzLmNvdW50ZXIxID0gMDtcclxuICAgIHRoaXMuY291bnRlcjIgPSAxNjtcclxuICAgIHRoaXMudmVsb2NpdHlYID0gNTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uVG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy53b2JibGUoKTtcclxuICAgICAgICBpZiAodGhpcy54ID4gY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCB8fCB0aGlzLnggPCAwKVxyXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eVggPSAtdGhpcy52ZWxvY2l0eVg7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHlYO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhd0ltYWdlKCk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHR1cm5BbmltYXRpb25Ub2dnbGUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblRvZ2dsZSA9ICF0aGlzLmFuaW1hdGlvblRvZ2dsZTtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvblRvZ2dsZSkgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGRyYXdJbWFnZSgpIHtcclxuICAgICAgbGV0IHVzZUFuaW1hdGVkSW1nID0gdGhpcy5hbmltYXRpb25Ub2dnbGUgPyBcImFcIiA6IFwiXCI7XHJcbiAgXHJcbiAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1nLnNyYyA9IGBzcmMvaW1hZ2VzL0ZPT0QvJHt0aGlzLml0ZW0uaW1nfSR7dXNlQW5pbWF0ZWRJbWd9LnBuZ2A7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgd29iYmxlKCkge1xyXG4gICAgLy8gcmVmYWN0b3IgdG8gaW5jbHVkZSByYW5kb20gYW5nbGVzID4gMzAsIGlmIHRpbWUgcGVybWl0c1xyXG4gICAgaWYgKHRoaXMuY291bnRlcjEgPCAxNSkge1xyXG4gICAgICB0aGlzLmFuZ2xlICs9IDIgKiB0aGlzLnBjdFBpO1xyXG4gICAgICB0aGlzLmNvdW50ZXIxICs9IDE7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY291bnRlcjEgPT09IDE1KSB7XHJcbiAgICAgIHRoaXMuY291bnRlcjIgPSAxNTtcclxuICAgICAgdGhpcy5jb3VudGVyMSArPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvdW50ZXIyIDw9IDE1ICYmIHRoaXMuY291bnRlcjIgIT09IC0xNSkge1xyXG4gICAgICB0aGlzLmFuZ2xlIC09IDIgKiB0aGlzLnBjdFBpO1xyXG4gICAgICB0aGlzLmNvdW50ZXIyIC09IDE7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY291bnRlcjIgPT09IC0xNSkge1xyXG4gICAgICB0aGlzLmNvdW50ZXIxID0gLTE1O1xyXG4gICAgICB0aGlzLmNvdW50ZXIyID0gMTY7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUodGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKHRoaXMuYW5nbGUpO1xyXG4gICAgLy8gYWZ0ZXIgeW91IHJvdGF0ZSwgYnJpbmdzIGNhbnZhcyBiYWNrIHRvIGl0cyBvcmlnaW4gcG9zaXRpb25cclxuICAgIGN0eC50cmFuc2xhdGUoLXRoaXMueCAtIHRoaXMud2lkdGggLyAyLCAtdGhpcy55IC0gdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgIHRoaXMuZHJhd0ltYWdlKCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soeG1vdXNlLCB5bW91c2UpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy54IDwgeG1vdXNlICYmXHJcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiB4bW91c2UgJiZcclxuICAgICAgdGhpcy55IDwgeW1vdXNlICYmXHJcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4geW1vdXNlXHJcbiAgICApIHtcclxuICAgICAgLy8gd2hlbiBtb3VzZSBjbGlja3Mgb24gYXJlYSBvZiB0aGUgaXRlbVxyXG4gICAgICB0aGlzLnR1cm5BbmltYXRpb25Ub2dnbGUoKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9wcyA9IHtcclxuICBjdXR0aW5nQm9hcmQ6IHsgbmFtZTogJ2N1dHRpbmdCb2FyZCcsIGltZzogXCJ0b29sMTRcIiwgcG9zV1JhdGlvOiAwLjMzLCBwb3NIUmF0aW86IDAuODMsIHdSYXRpbzogMC40NTUsIGhSYXRpbzogMC4xNSB9LFxyXG4gIHBlcHBlcjogeyBuYW1lOiAncGVwcGVyJywgaW1nOiBcInRvb2wzM1wiLCBwb3NXUmF0aW86IDAuMTksIHBvc0hSYXRpbzogMC42NSwgd1JhdGlvOiAwLjAyNSwgaFJhdGlvOiAwLjA0IH0sXHJcbiAgc2FsdDogeyBuYW1lOiAnc2FsdCcsIGltZzogXCJ0b29sMzJcIiwgcG9zV1JhdGlvOiAwLjE4LCBwb3NIUmF0aW86IDAuNjU1LCB3UmF0aW86IDAuMDI1LCBoUmF0aW86IDAuMDQgfSxcclxuICBzZWx0ZXJXYXRlcjogeyBuYW1lOiAnc2VsdGVyV2F0ZXInLCBpbWc6IFwidG9vbDEzXCIsIHBvc1dSYXRpbzogMC4yODUsIHBvc0hSYXRpbzogMC41OTUsIHdSYXRpbzogMC4wMywgaFJhdGlvOiAwLjEwIH0sXHJcbiAgZ2luc2VuZzogeyBuYW1lOiAnZ2luc2VuZycsIGltZzogXCJ2ZWdldGFibGU1N1wiLCBwb3NXUmF0aW86IDAuMzUsIHBvc0hSYXRpbzogMC44OSwgd1JhdGlvOiAwLjA0LCBoUmF0aW86IDAuMDUgfSxcclxuICByZWRQZXBwZXI6IHsgbmFtZTogJ3JlZFBlcHBlcicsIGltZzogXCJ2ZWdldGFibGUyM1wiLCBwb3NXUmF0aW86IDAuMzUsIHBvc0hSYXRpbzogMC44Miwgd1JhdGlvOiAwLjA5LCBoUmF0aW86IDAuMDYgfSxcclxuICBjaGlsaVBlcHBlcjogeyBuYW1lOiAnY2hpbGlQZXBwZXInLCBpbWc6IFwidmVnZXRhYmxlMzdcIiwgcG9zV1JhdGlvOiAwLjQ0LCBwb3NIUmF0aW86IDAuODEsIHdSYXRpbzogMC4wOSwgaFJhdGlvOiAwLjA2IH0sXHJcbiAgb25pb246IHsgbmFtZTogJ29uaW9uJywgaW1nOiBcInZlZ2V0YWJsZTM1XCIsIHBvc1dSYXRpbzogMC40NywgcG9zSFJhdGlvOiAwLjgxLCB3UmF0aW86IDAuMDUsIGhSYXRpbzogMC4wNyB9LFxyXG4gIGtuaWZlOiB7IG5hbWU6ICdrbmlmZScsIGltZzogXCJ0b29sMjRcIiwgcG9zV1JhdGlvOiAwLjU3LCBwb3NIUmF0aW86IDAuODYsIHdSYXRpbzogMC4xOSwgaFJhdGlvOiAwLjA2IH0sXHJcbiAgY3VwOiB7IG5hbWU6ICdjdXAnLCBpbWc6IFwidG9vbDEwXCIsIHBvc1dSYXRpbzogMC44OSwgcG9zSFJhdGlvOiAwLjgyLCB3UmF0aW86IDAuMDUsIGhSYXRpbzogMC4wNiB9LFxyXG4gIGJvd2w6IHsgbmFtZTogJ2Jvd2wnLCBpbWc6IFwidG9vbDI4XCIsIHBvc1dSYXRpbzogMC4xNSwgcG9zSFJhdGlvOiAwLjc4LCB3UmF0aW86IDAuMTksIGhSYXRpbzogMC4wOCB9LFxyXG4gIG95c3RlcjogeyBuYW1lOiAnb3lzdGVyJywgaW1nOiBcInNlYWZvb2QwOFwiLCBwb3NXUmF0aW86IDAuMTkwLCBwb3NIUmF0aW86IDAuNzcsIHdSYXRpbzogMC4wNiwgaFJhdGlvOiAwLjA0IH0sXHJcbiAgc2hyaW1wOiB7IG5hbWU6ICdzaHJpbXAnLCBpbWc6IFwic2VhZm9vZDA0XCIsIHBvc1dSYXRpbzogMC4yMSwgcG9zSFJhdGlvOiAwLjc5NSwgd1JhdGlvOiAwLjA2LCBoUmF0aW86IDAuMDQgfSxcclxuICBjbGFtOiB7IG5hbWU6ICdjbGFtJywgaW1nOiBcInNlYWZvb2QwNlwiLCBwb3NXUmF0aW86IDAuMTY1LCBwb3NIUmF0aW86IDAuNzcsIHdSYXRpbzogMC4wNiwgaFJhdGlvOiAwLjA0IH0sXHJcbiAgY3JhYjogeyBuYW1lOiAnY3JhYicsIGltZzogXCJzZWFmb29kMDNcIiwgcG9zV1JhdGlvOiAwLjE3LCBwb3NIUmF0aW86IDAuODAsIHdSYXRpbzogMC4xMSwgaFJhdGlvOiAwLjA2IH0sXHJcbiAgcGxhdGU6IHsgbmFtZTogJ3BsYXRlJywgaW1nOiBcInRvb2wwMVwiLCBwb3NXUmF0aW86IDAuODI1LCBwb3NIUmF0aW86IDAuOSwgd1JhdGlvOiAwLjE5LCBoUmF0aW86IDAuMDcgfSxcclxuICBzdHJpbmdCZWFuczogeyBuYW1lOiAnc3RyaW5nQmVhbnMnLCBpbWc6IFwidmVnZXRhYmxlNDdcIiwgcG9zV1JhdGlvOiAwLjg0LCBwb3NIUmF0aW86IDAuOTAsIHdSYXRpbzogMC4wNiwgaFJhdGlvOiAwLjA2IH0sXHJcbiAgc3RlYWs6IHsgbmFtZTogJ3N0ZWFrJywgaW1nOiBcIm1lYXQwNVwiLCBwb3NXUmF0aW86IDAuODYsIHBvc0hSYXRpbzogMC45MCwgd1JhdGlvOiAwLjA2LCBoUmF0aW86IDAuMDYgfSxcclxuICBwb3RhdG9lczogeyBuYW1lOiAncG90YXRvZXMnLCBpbWc6IFwidmVnZXRhYmxlMzhcIiwgcG9zV1JhdGlvOiAwLjg4LCBwb3NIUmF0aW86IDAuOTEsIHdSYXRpbzogMC4wNiwgaFJhdGlvOiAwLjA0IH0sXHJcbiAgc3Bvb246IHsgbmFtZTogJ3Nwb29uJywgaW1nOiBcInRvb2wwN1wiLCBwb3NXUmF0aW86IDAuODAsIHBvc0hSYXRpbzogMC44OSwgd1JhdGlvOiAwLjAzLCBoUmF0aW86IDAuMDcgfSxcclxuICBmb3JrOiB7IG5hbWU6ICdmb3JrJywgaW1nOiBcInRvb2wwOFwiLCBwb3NXUmF0aW86IDAuOTMsIHBvc0hSYXRpbzogMC44OSwgd1JhdGlvOiAwLjAzLCBoUmF0aW86IDAuMDcgfSxcclxuICBlZ2c6IHsgbmFtZTogJ2VnZycsIGltZzogXCJlZ2cwMlwiLCBwb3NXUmF0aW86IDAuNTAsIHBvc0hSYXRpbzogMC42Niwgd1JhdGlvOiAwLjA1NSwgaFJhdGlvOiAwLjAzIH0sXHJcbiAgcG90OiB7IG5hbWU6ICdwb3QnLCBpbWc6IFwidG9vbDE4XCIsICBwb3NXUmF0aW86IDAuNTc1LCBwb3NIUmF0aW86IDAuNjIsIHdSYXRpbzogMC4xOCwgaFJhdGlvOiAwLjA4IH0sXHJcbiAgZmlzaDogeyBuYW1lOiAnZmlzaCcsIGltZzogXCJmaXNoMDFcIiwgIHBvc1dSYXRpbzogMC42MCwgcG9zSFJhdGlvOiAwLjYwLCB3UmF0aW86IDAuMTEsIGhSYXRpbzogMC4wNyB9LFxyXG4gIGZpc2gyOiB7IG5hbWU6ICdmaXNoMicsIGltZzogXCJmaXNoMDVcIiwgIHBvc1dSYXRpbzogMC41OTQsIHBvc0hSYXRpbzogMC42Mywgd1JhdGlvOiAwLjEwLCBoUmF0aW86IDAuMDR9LFxyXG4gIHBvdExpZDogeyBuYW1lOiAncG90TGlkJywgaW1nOiBcInRvb2wyNVwiLCAgcG9zV1JhdGlvOiAwLjU3LCBwb3NIUmF0aW86IDAuNjIsIHdSYXRpbzogMC4xNCwgaFJhdGlvOiAwLjA1IH0sXHJcbiAgc3F1YXNoOiB7IG5hbWU6ICdzcXVhc2gnLCBpbWc6IFwidmVnZXRhYmxlMzJcIiwgIHBvc1dSYXRpbzogMC43NSwgcG9zSFJhdGlvOiAwLjY0NSwgd1JhdGlvOiAwLjA0LCBoUmF0aW86IDAuMDUgfSxcclxuICBwdW1wa2luOiB7IG5hbWU6ICdwdW1wa2luJywgaW1nOiBcInZlZ2V0YWJsZTMxXCIsICBwb3NXUmF0aW86IDAuNzY1LCBwb3NIUmF0aW86IDAuNjQsIHdSYXRpbzogMC4wOCwgaFJhdGlvOiAwLjA2IH0sXHJcbiAgdGVhQ3VwOiB7IG5hbWU6ICd0ZWFDdXAnLCBpbWc6IFwidG9vbDMwXCIsICBwb3NXUmF0aW86IDAuOTE1LCBwb3NIUmF0aW86IDAuNjc3LCB3UmF0aW86IDAuMDMyLCBoUmF0aW86IDAuMDI1IH0sXHJcbiAgdGVhUG90OiB7IG5hbWU6ICd0ZWFQb3QnLCBpbWc6IFwidG9vbDMxXCIsICBwb3NXUmF0aW86IDAuOTMsIHBvc0hSYXRpbzogMC42NCwgd1JhdGlvOiAwLjEwLCBoUmF0aW86IDAuMDYgfSxcclxuICBwYW46IHsgbmFtZTogJ3BhbicsIGltZzogXCJ0b29sMTdcIiwgIHBvc1dSYXRpbzogMC40MTUsIHBvc0hSYXRpbzogMC42Niwgd1JhdGlvOiAwLjE4LCBoUmF0aW86IDAuMDUgfSxcclxuICBtZWF0T25BU3RpY2syOiB7IG5hbWU6ICdtZWF0T25BU3RpY2syJywgaW1nOiBcIm1lYXQwNlwiLCBwb3NXUmF0aW86IDAuNDMsIHBvc0hSYXRpbzogMC42NSwgd1JhdGlvOiAwLjA3LCBoUmF0aW86IDAuMDYgfSxcclxuICB0b3dlbDogeyBuYW1lOiAndG93ZWwnLCBpbWc6IFwidG9vbDE1XCIsICBwb3NXUmF0aW86IDAuMDU1LCBwb3NIUmF0aW86IDAuNzQsIHdSYXRpbzogMC4wNSwgaFJhdGlvOiAwLjA2IH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XHJcbmV4cG9ydCBjb25zdCBkcmF3blByb3BzID0ge307XHJcblxyXG4vLyBpdGVyYXRlIHRocm91Z2ggcHJvcHMgdXNpbmcgcHJvcE5hbWVzIGFuZCBkcmF3IGVhY2ggaXRlbSBhbmQgYWRkIGl0IHRvIGRyYXduUHJvcHMgb2JqZWN0XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9wcygpIHtcclxuICBwcm9wTmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXSB8fD0gbmV3IFByb3AocHJvcHNbaXRlbV0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1Byb3BzQmFsbENvbGxpc2lvbigpIHtcclxuICBsZXQgYmFsbENlbnRlclggPSBiYWxsLnggKyBiYWxsLndpZHRoIC8gMjtcclxuICBsZXQgYmFsbENlbnRlclkgPSBiYWxsLnkgKyBiYWxsLmhlaWdodCAvIDI7XHJcblxyXG4gIHByb3BOYW1lcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBsZXQgaXRlbUNlbnRlclggPSBkcmF3blByb3BzW2l0ZW1dLnggKyBkcmF3blByb3BzW2l0ZW1dLndpZHRoIC8gMjtcclxuICAgIGxldCBpdGVtQ2VudGVyWSA9IGRyYXduUHJvcHNbaXRlbV0ueSArIGRyYXduUHJvcHNbaXRlbV0uaGVpZ2h0IC8gMjtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIE1hdGguaHlwb3QoYmFsbENlbnRlclggLSBpdGVtQ2VudGVyWCwgYmFsbENlbnRlclkgLSBpdGVtQ2VudGVyWSkgLVxyXG4gICAgICAgIGRyYXduUHJvcHNbaXRlbV0ud2lkdGggLyAyIDxcclxuICAgICAgMVxyXG4gICAgKSB7XHJcbiAgICAgIGJhbGwudmVsb2NpdHlZID0gLWJhbGwudmVsb2NpdHlZO1xyXG4gICAgICBiYWxsLnZlbG9jaXR5WCA9IC1iYWxsLnZlbG9jaXR5WDtcclxuICAgICAgbGV0IGRlbHRhWCA9IGJhbGwueCAtIChkcmF3blByb3BzW2l0ZW1dLnggKyBkcmF3blByb3BzW2l0ZW1dLndpZHRoIC8gMik7XHJcbiAgICAgIGJhbGwudmVsb2NpdHlYID0gZGVsdGFYICogMC4xO1xyXG4gICAgICBwcm9wTmFtZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEcmF3blByb3BzRW1wdHkoKSB7XHJcbiAgaWYgKHByb3BOYW1lcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3UHJvcHMoKSB7XHJcbiAgaW5pdGlhbGl6ZVByb3BzKCk7XHJcbiAgcHJvcE5hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGRyYXduUHJvcHNbaXRlbV0udXBkYXRlKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHJlZmFjdG9yIHRvIGluY2x1ZGUgYSBzd2l0Y2ggKCdhbmltYXRlQWxsJywgJ2FuaW1hdGVJdGVtJywgJ2Rvcm1hbnRBbGwnKVxyXG4vLyB0b2dnbGUgYWxsIGl0ZW1zIHRvIGFuaW1hdGVkXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlQWxsSXRlbXMoKSB7XHJcbiAgaW5pdGlhbGl6ZVByb3BzKCk7XHJcbiAgY2hlY2tQcm9wc0JhbGxDb2xsaXNpb24oKTtcclxuICBwcm9wTmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXS5hbmltYXRpb25Ub2dnbGUgPSB0cnVlO1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXS51cGRhdGUoKTtcclxuICB9KTtcclxufSIsIi8vIGdldCBkaXN0YW5jZSBiZXR3ZWVuIDIgb2JqZWN0cyAoc3BlY2lmaWNhbGx5IGNpcmNsZXMpXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZSh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgbGV0IHhEaXN0ID0geDIgLSB4MTtcclxuICAgIGxldCB5RGlzdCA9IHkyIC0geTE7XHJcblxyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGlzdCwgMikgKyBNYXRoLnBvdyh5RGlzdCwgMikpO1xyXG59XHJcblxyXG4vLyBjYWxjdWxhdGUgbW91c2UgcG9zaXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1vdXNlUG9zKGUpIHtcclxuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgbGV0IG1vdXNlWCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdCAtIHJvb3Quc2Nyb2xsTGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBlLmNsaWVudFkgLSByZWN0LnRvcCAtIHJvb3Quc2Nyb2xsVG9wO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogbW91c2VYLFxyXG4gICAgICAgIHk6IG1vdXNlWVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==