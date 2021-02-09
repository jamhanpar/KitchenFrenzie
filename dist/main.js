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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");


window.onload = function () {
  var framesPerSecond = 60;
  setInterval(Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["drawEverything"])(), 1000 / framesPerSecond);
};

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: drawBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBoard", function() { return drawBoard; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");

var drawBoard = function drawBoard() {
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.28, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.36, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.42, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.45, "blue");
  drawRect(0, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.81, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.19, "red");
  drawRect(0, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.41, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.28, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.33, "green");
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.70, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.41, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.30, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.33, "green");
};

var drawRect = function drawRect(leftX, topY, width, height, color) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = color;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeRect(leftX, topY, width, height);
};

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: canvas, ctx, drawEverything */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawEverything", function() { return drawEverything; });
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ "./src/scripts/food.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/scripts/board.js");
/* harmony import */ var _utensils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utensils */ "./src/scripts/utensils.js");
/* harmony import */ var _props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./props */ "./src/scripts/props.js");
/* harmony import */ var _pots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pots */ "./src/scripts/pots.js");
/* harmony import */ var _knobs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knobs */ "./src/scripts/knobs.js");






var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
canvas.width = "100%";
canvas.height = "100%";
var drawEverything = function drawEverything() {
  drawCanvas(), Object(_board__WEBPACK_IMPORTED_MODULE_1__["drawBoard"])(), Object(_food__WEBPACK_IMPORTED_MODULE_0__["drawFood"])(), Object(_utensils__WEBPACK_IMPORTED_MODULE_2__["drawUtensils"])(), Object(_pots__WEBPACK_IMPORTED_MODULE_4__["drawPots"])(), Object(_props__WEBPACK_IMPORTED_MODULE_3__["drawProps"])(), Object(_knobs__WEBPACK_IMPORTED_MODULE_5__["drawKnobs"])();
};

var drawCanvas = function drawCanvas() {
  // ctx.fillStyle = 'orange';
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

/***/ }),

/***/ "./src/scripts/food.js":
/*!*****************************!*\
  !*** ./src/scripts/food.js ***!
  \*****************************/
/*! exports provided: drawFood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFood", function() { return drawFood; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");

var drawFood = function drawFood() {
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.18, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'red');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.20, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'orange');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.22, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'yellow');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.24, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'green');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.26, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'blue');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.96, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'yellow');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.94, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'orange');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.92, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'red');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.77, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'orange');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.75, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'yellow');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.73, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'green');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.71, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.64, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.02, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.05, 'blue');
};

var drawRect = function drawRect(leftX, topY, width, height, color) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = color;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(leftX, topY, width, height);
};

/***/ }),

/***/ "./src/scripts/knobs.js":
/*!******************************!*\
  !*** ./src/scripts/knobs.js ***!
  \******************************/
/*! exports provided: drawKnobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawKnobs", function() { return drawKnobs; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");

var drawKnobs = function drawKnobs() {
  drawCircle(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.403, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.79, 19, "red");
  drawCircle(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.669, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.79, 19, "orange");
}; // const drawRect = (leftX, topY, width, height, color) => {
//   ctx.fillStyle = color;
//   ctx.fillRect(leftX, topY, width, height);
// };

var drawCircle = function drawCircle(centerX, centerY, radius, drawColor) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = drawColor;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
};

/***/ }),

/***/ "./src/scripts/pots.js":
/*!*****************************!*\
  !*** ./src/scripts/pots.js ***!
  \*****************************/
/*! exports provided: drawPots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPots", function() { return drawPots; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");

var drawPots = function drawPots() {
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.30, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.39, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.10, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.16, 'red');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.44, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.39, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.10, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.16, 'orange');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.58, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.39, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.10, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.16, 'yellow');
};

var drawRect = function drawRect(leftX, topY, width, height, color) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = color;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(leftX, topY, width, height);
};

/***/ }),

/***/ "./src/scripts/props.js":
/*!******************************!*\
  !*** ./src/scripts/props.js ***!
  \******************************/
/*! exports provided: drawProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawProps", function() { return drawProps; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");

var drawProps = function drawProps() {
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.05, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.83, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.23, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.15, 'green');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.33, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.83, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.23, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.15, 'blue');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.60, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.87, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.10, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.08, 'red');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.75, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.83, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.20, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.15, 'orange');
  drawRect(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.05, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.49, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 0.09, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 0.09, 'orange');
};

var drawRect = function drawRect(leftX, topY, width, height, color) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = color;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(leftX, topY, width, height);
};

/***/ }),

/***/ "./src/scripts/utensils.js":
/*!*********************************!*\
  !*** ./src/scripts/utensils.js ***!
  \*********************************/
/*! exports provided: drawUtensils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawUtensils", function() { return drawUtensils; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");

var drawUtensils = function drawUtensils() {// drawRect(canvas.width*0.18, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'red');
  // drawRect(canvas.width*0.20, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'orange');
  // drawRect(canvas.width*0.22, canvas.height*0.64, canvas.width*0.02, canvas.height*0.05, 'yellow');
};

var drawRect = function drawRect(leftX, topY, width, height, color) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = color;
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillRect(leftX, topY, width, height);
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9mb29kLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2tub2JzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BvdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRlbnNpbHMuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZnJhbWVzUGVyU2Vjb25kIiwic2V0SW50ZXJ2YWwiLCJkcmF3RXZlcnl0aGluZyIsImRyYXdCb2FyZCIsImRyYXdSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0WCIsInRvcFkiLCJjb2xvciIsImN0eCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZHJhd0NhbnZhcyIsImRyYXdGb29kIiwiZHJhd1V0ZW5zaWxzIiwiZHJhd1BvdHMiLCJkcmF3UHJvcHMiLCJkcmF3S25vYnMiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdDaXJjbGUiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJhZGl1cyIsImRyYXdDb2xvciIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFF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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IGRyYXdFdmVyeXRoaW5nIH0gZnJvbSAnLi9zY3JpcHRzL2NhbnZhcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZyYW1lc1BlclNlY29uZCA9IDYwO1xuICBzZXRJbnRlcnZhbChkcmF3RXZlcnl0aGluZygpLCAxMDAwIC8gZnJhbWVzUGVyU2Vjb25kKTtcbn07IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Qm9hcmQgPSAoKSA9PiB7XHJcbiAgZHJhd1JlY3QoIGNhbnZhcy53aWR0aCowLjI4LCBjYW52YXMuaGVpZ2h0KjAuMzYsIGNhbnZhcy53aWR0aCowLjQyLCBjYW52YXMuaGVpZ2h0KjAuNDUsIFwiYmx1ZVwiKTtcclxuICBkcmF3UmVjdCggMCwgY2FudmFzLmhlaWdodCowLjgxLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQqMC4xOSwgXCJyZWRcIik7XHJcbiAgZHJhd1JlY3QoIDAsIGNhbnZhcy5oZWlnaHQqMC40MSwgY2FudmFzLndpZHRoKjAuMjgsIGNhbnZhcy5oZWlnaHQqMC4zMywgXCJncmVlblwiKTtcclxuICBkcmF3UmVjdCggY2FudmFzLndpZHRoKjAuNzAsIGNhbnZhcy5oZWlnaHQqMC40MSwgY2FudmFzLndpZHRoKjAuMzAsIGNhbnZhcy5oZWlnaHQqMC4zMywgXCJncmVlblwiKTtcclxufTtcclxuXHJcbmNvbnN0IGRyYXdSZWN0ID0gKGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikgPT4ge1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5zdHJva2VSZWN0KGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZHJhd0Zvb2QgfSBmcm9tIFwiLi9mb29kXCI7XHJcbmltcG9ydCB7IGRyYXdCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XHJcbmltcG9ydCB7IGRyYXdVdGVuc2lscyB9IGZyb20gXCIuL3V0ZW5zaWxzXCI7XHJcbmltcG9ydCB7IGRyYXdQcm9wcyB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IGRyYXdQb3RzIH0gZnJvbSBcIi4vcG90c1wiO1xyXG5pbXBvcnQgeyBkcmF3S25vYnMgfSBmcm9tIFwiLi9rbm9ic1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XHJcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jYW52YXMud2lkdGggPSBcIjEwMCVcIjtcclxuY2FudmFzLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdFdmVyeXRoaW5nID0gKCkgPT4ge1xyXG4gICAgZHJhd0NhbnZhcygpLFxyXG4gICAgZHJhd0JvYXJkKCksXHJcbiAgICBkcmF3Rm9vZCgpLFxyXG4gICAgZHJhd1V0ZW5zaWxzKCksXHJcbiAgICBkcmF3UG90cygpLFxyXG4gICAgZHJhd1Byb3BzKCksXHJcbiAgICBkcmF3S25vYnMoKVxyXG59O1xyXG5cclxuY29uc3QgZHJhd0NhbnZhcyA9ICgpID0+IHtcclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnb3JhbmdlJztcclxuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Rm9vZCA9ICgpID0+IHtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjE4LCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICdyZWQnKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjIwLCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICdvcmFuZ2UnKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjIyLCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICd5ZWxsb3cnKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjI0LCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICdncmVlbicpO1xyXG4gICAgZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuMjYsIGNhbnZhcy5oZWlnaHQqMC42NCwgY2FudmFzLndpZHRoKjAuMDIsIGNhbnZhcy5oZWlnaHQqMC4wNSwgJ2JsdWUnKTtcclxuXHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC45NiwgY2FudmFzLmhlaWdodCowLjY0LCBjYW52YXMud2lkdGgqMC4wMiwgY2FudmFzLmhlaWdodCowLjA1LCAneWVsbG93Jyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC45NCwgY2FudmFzLmhlaWdodCowLjY0LCBjYW52YXMud2lkdGgqMC4wMiwgY2FudmFzLmhlaWdodCowLjA1LCAnb3JhbmdlJyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC45MiwgY2FudmFzLmhlaWdodCowLjY0LCBjYW52YXMud2lkdGgqMC4wMiwgY2FudmFzLmhlaWdodCowLjA1LCAncmVkJyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC43NywgY2FudmFzLmhlaWdodCowLjY0LCBjYW52YXMud2lkdGgqMC4wMiwgY2FudmFzLmhlaWdodCowLjA1LCAnb3JhbmdlJyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC43NSwgY2FudmFzLmhlaWdodCowLjY0LCBjYW52YXMud2lkdGgqMC4wMiwgY2FudmFzLmhlaWdodCowLjA1LCAneWVsbG93Jyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC43MywgY2FudmFzLmhlaWdodCowLjY0LCBjYW52YXMud2lkdGgqMC4wMiwgY2FudmFzLmhlaWdodCowLjA1LCAnZ3JlZW4nKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjcxLCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICdibHVlJyk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYXdSZWN0ID0gKGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikgPT4ge1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFJlY3QobGVmdFgsIHRvcFksIHdpZHRoLCBoZWlnaHQpO1xyXG59OyIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0tub2JzID0gKCkgPT4ge1xyXG4gIGRyYXdDaXJjbGUoY2FudmFzLndpZHRoICogMC40MDMsIGNhbnZhcy5oZWlnaHQgKiAwLjc5LCAxOSwgXCJyZWRcIik7XHJcbiAgZHJhd0NpcmNsZShjYW52YXMud2lkdGggKiAwLjY2OSwgY2FudmFzLmhlaWdodCAqIDAuNzksIDE5LCBcIm9yYW5nZVwiKTtcclxuICBcclxufTtcclxuXHJcbi8vIGNvbnN0IGRyYXdSZWN0ID0gKGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikgPT4ge1xyXG4vLyAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuLy8gICBjdHguZmlsbFJlY3QobGVmdFgsIHRvcFksIHdpZHRoLCBoZWlnaHQpO1xyXG4vLyB9O1xyXG5cclxuY29uc3QgZHJhd0NpcmNsZSA9IChjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIGRyYXdDb2xvcikgPT4ge1xyXG4gIGN0eC5maWxsU3R5bGUgPSBkcmF3Q29sb3I7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgY3R4LmZpbGwoKTtcclxufTtcclxuIiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2NhbnZhcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd1BvdHMgPSAoKSA9PiB7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC4zMCwgY2FudmFzLmhlaWdodCowLjM5LCBjYW52YXMud2lkdGgqMC4xMCwgY2FudmFzLmhlaWdodCowLjE2LCAncmVkJyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC40NCwgY2FudmFzLmhlaWdodCowLjM5LCBjYW52YXMud2lkdGgqMC4xMCwgY2FudmFzLmhlaWdodCowLjE2LCAnb3JhbmdlJyk7XHJcbiAgICBkcmF3UmVjdChjYW52YXMud2lkdGgqMC41OCwgY2FudmFzLmhlaWdodCowLjM5LCBjYW52YXMud2lkdGgqMC4xMCwgY2FudmFzLmhlaWdodCowLjE2LCAneWVsbG93Jyk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYXdSZWN0ID0gKGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikgPT4ge1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFJlY3QobGVmdFgsIHRvcFksIHdpZHRoLCBoZWlnaHQpO1xyXG59OyIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdQcm9wcyA9ICgpID0+IHtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjA1LCBjYW52YXMuaGVpZ2h0KjAuODMsIGNhbnZhcy53aWR0aCowLjIzLCBjYW52YXMuaGVpZ2h0KjAuMTUsICdncmVlbicpO1xyXG4gICAgZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuMzMsIGNhbnZhcy5oZWlnaHQqMC44MywgY2FudmFzLndpZHRoKjAuMjMsIGNhbnZhcy5oZWlnaHQqMC4xNSwgJ2JsdWUnKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjYwLCBjYW52YXMuaGVpZ2h0KjAuODcsIGNhbnZhcy53aWR0aCowLjEwLCBjYW52YXMuaGVpZ2h0KjAuMDgsICdyZWQnKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjc1LCBjYW52YXMuaGVpZ2h0KjAuODMsIGNhbnZhcy53aWR0aCowLjIwLCBjYW52YXMuaGVpZ2h0KjAuMTUsICdvcmFuZ2UnKTtcclxuICAgIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjA1LCBjYW52YXMuaGVpZ2h0KjAuNDksIGNhbnZhcy53aWR0aCowLjA5LCBjYW52YXMuaGVpZ2h0KjAuMDksICdvcmFuZ2UnKTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgZHJhd1JlY3QgPSAobGVmdFgsIHRvcFksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSA9PiB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChsZWZ0WCwgdG9wWSwgd2lkdGgsIGhlaWdodCk7XHJcbn07IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tICcuL2NhbnZhcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd1V0ZW5zaWxzID0gKCkgPT4ge1xyXG4gICAgLy8gZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuMTgsIGNhbnZhcy5oZWlnaHQqMC42NCwgY2FudmFzLndpZHRoKjAuMDIsIGNhbnZhcy5oZWlnaHQqMC4wNSwgJ3JlZCcpO1xyXG4gICAgLy8gZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuMjAsIGNhbnZhcy5oZWlnaHQqMC42NCwgY2FudmFzLndpZHRoKjAuMDIsIGNhbnZhcy5oZWlnaHQqMC4wNSwgJ29yYW5nZScpO1xyXG4gICAgLy8gZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuMjIsIGNhbnZhcy5oZWlnaHQqMC42NCwgY2FudmFzLndpZHRoKjAuMDIsIGNhbnZhcy5oZWlnaHQqMC4wNSwgJ3llbGxvdycpO1xyXG59XHJcblxyXG5jb25zdCBkcmF3UmVjdCA9IChsZWZ0WCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgY29sb3IpID0+IHtcclxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9