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
  setInterval(function () {
    return redraw();
  }, 1000 / framesPerSecond);
};

var redraw = function redraw() {
  Object(_scripts_canvas__WEBPACK_IMPORTED_MODULE_0__["drawEverything"])();
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
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ "./src/scripts/item.js");
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
  drawCanvas(), Object(_board__WEBPACK_IMPORTED_MODULE_1__["drawBoard"])(), Object(_utensils__WEBPACK_IMPORTED_MODULE_2__["drawUtensils"])(), Object(_pots__WEBPACK_IMPORTED_MODULE_4__["drawPots"])(), Object(_props__WEBPACK_IMPORTED_MODULE_3__["drawProps"])(), Object(_knobs__WEBPACK_IMPORTED_MODULE_5__["drawKnobs"])(), Object(_item__WEBPACK_IMPORTED_MODULE_0__["drawItems"])(), Object(_item__WEBPACK_IMPORTED_MODULE_0__["moveItems"])();
};

var drawCanvas = function drawCanvas() {
  return ctx.clearRect(0, 0, canvas.width, canvas.height);
};

/***/ }),

/***/ "./src/scripts/item.js":
/*!*****************************!*\
  !*** ./src/scripts/item.js ***!
  \*****************************/
/*! exports provided: drawnProps, drawItems, animateItems, animateItem, dormantItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawnProps", function() { return drawnProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawItems", function() { return drawItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateItems", function() { return animateItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateItem", function() { return animateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dormantItems", function() { return dormantItems; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/scripts/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Item = /*#__PURE__*/function () {
  function Item(item) {
    _classCallCheck(this, Item);

    // sample of item: { img: "tool32", posWRatio: 0.18, posHRatio: 0.655, wRatio: 0.025, hRatio: 0.04 }
    this.item = item;
    this.animationToggle = false;
  }

  _createClass(Item, [{
    key: "turnAnimationToggle",
    value: function turnAnimationToggle() {
      this.animationToggle = !this.animationToggle;
    }
  }, {
    key: "drawImage",
    value: function drawImage() {
      var useAnimatedImg = this.animationToggle ? "" : "a";
      var img = new Image();
      img.src = "src/images/FOOD/".concat(this.item.img).concat(useAnimatedImg, ".png");
      _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].drawImage(img, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * this.item.posWRatio, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.item.posHRatio, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.item.wRatio, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * this.item.hRatio);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.animationToggle) {
        this.item.posWRatio += 0.001;
      }
    }
  }]);

  return Item;
}();

var props = {
  salt: {
    img: "tool32",
    posWRatio: 0.18,
    posHRatio: 0.655,
    wRatio: 0.025,
    hRatio: 0.04
  },
  pepper: {
    img: "tool33",
    posWRatio: 0.21,
    posHRatio: 0.655,
    wRatio: 0.025,
    hRatio: 0.04
  },
  cuttingBoard: {
    img: "tool14",
    posWRatio: 0.33,
    posHRatio: 0.83,
    wRatio: 0.455,
    hRatio: 0.15
  },
  knife: {
    img: "tool24",
    posWRatio: 0.57,
    posHRatio: 0.86,
    wRatio: 0.19,
    hRatio: 0.06
  },
  pot: {
    img: "tool18",
    posWRatio: 0.58,
    posHRatio: 0.58,
    wRatio: 0.18,
    hRatio: 0.13
  }
};
var propNames = ["salt", "pepper", "cuttingBoard", "knife", "pot"];
var drawnProps = {}; // iterate through props using propNames and draw each item and add it to drawnProps object

function drawItems() {
  propNames.forEach(function (item) {
    drawnProps[item] || (drawnProps[item] = new Item(props[item]));
    drawnProps[item].drawImage();
  });
} // refactor to include a switch ('animateAll', 'animateItem', 'dormantAll')
// toggle all items to animated

function animateItems() {
  propNames.forEach(function (item) {
    drawnProps[item].animationToggle = true;
  });
} // animate a single item

function animateItem() {
  drawnProps["salt"].update();
} // toggle all items to dormant

function dormantItems() {
  propNames.forEach(function (item) {
    drawnProps[item].animationToggle = false;
  });
}

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

var drawPots = function drawPots() {// drawRect(canvas.width*0.30, canvas.height*0.39, canvas.width*0.10, canvas.height*0.16, 'red');
  // drawRect(canvas.width*0.44, canvas.height*0.39, canvas.width*0.10, canvas.height*0.16, 'orange');
  // drawRect(canvas.width*0.58, canvas.height*0.39, canvas.width*0.10, canvas.height*0.16, 'yellow');
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

var drawProps = function drawProps() {// drawRect(canvas.width*0.05, canvas.height*0.83, canvas.width*0.23, canvas.height*0.15, 'green');
  // drawRect(canvas.width*0.33, canvas.height*0.83, canvas.width*0.23, canvas.height*0.15, 'blue');
  // drawRect(canvas.width*0.60, canvas.height*0.87, canvas.width*0.10, canvas.height*0.08, 'red');
  // drawRect(canvas.width*0.75, canvas.height*0.83, canvas.width*0.20, canvas.height*0.15, 'orange');
  // drawRect(canvas.width*0.05, canvas.height*0.49, canvas.width*0.09, canvas.height*0.09, 'orange');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2tub2JzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BvdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXRlbnNpbHMuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwiZnJhbWVzUGVyU2Vjb25kIiwic2V0SW50ZXJ2YWwiLCJyZWRyYXciLCJkcmF3RXZlcnl0aGluZyIsImRyYXdCb2FyZCIsImRyYXdSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0WCIsInRvcFkiLCJjb2xvciIsImN0eCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZHJhd0NhbnZhcyIsImRyYXdVdGVuc2lscyIsImRyYXdQb3RzIiwiZHJhd1Byb3BzIiwiZHJhd0tub2JzIiwiZHJhd0l0ZW1zIiwibW92ZUl0ZW1zIiwiY2xlYXJSZWN0IiwiSXRlbSIsIml0ZW0iLCJhbmltYXRpb25Ub2dnbGUiLCJ1c2VBbmltYXRlZEltZyIsImltZyIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwicG9zV1JhdGlvIiwicG9zSFJhdGlvIiwid1JhdGlvIiwiaFJhdGlvIiwicHJvcHMiLCJzYWx0IiwicGVwcGVyIiwiY3V0dGluZ0JvYXJkIiwia25pZmUiLCJwb3QiLCJwcm9wTmFtZXMiLCJkcmF3blByb3BzIiwiZm9yRWFjaCIsImFuaW1hdGVJdGVtcyIsImFuaW1hdGVJdGVtIiwidXBkYXRlIiwiZG9ybWFudEl0ZW1zIiwiZHJhd0NpcmNsZSIsImNlbnRlclgiLCJjZW50ZXJZIiwicmFkaXVzIiwiZHJhd0NvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImZpbGxSZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7QUFFQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVk7QUFDMUIsTUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0FDLGFBQVcsQ0FBQztBQUFBLFdBQU1DLE1BQU0sRUFBWjtBQUFBLEdBQUQsRUFBaUIsT0FBS0YsZUFBdEIsQ0FBWDtBQUNELENBSEQ7O0FBS0EsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQkMsd0VBQWM7QUFDZixDQUZELEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFB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QUFKLENBQWFyRCxLQUFiLEVBQW9CQyxJQUFwQixFQUEwQkgsS0FBMUIsRUFBaUNDLE1BQWpDO0FBQ0QsQ0FIRCxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU0sQ0FDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBTk07O0FBUVAsSUFBTWhCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNJLEtBQUQsRUFBUUMsSUFBUixFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QkcsS0FBN0IsRUFBdUM7QUFDdERDLDZDQUFHLENBQUM0QyxTQUFKLEdBQWdCN0MsS0FBaEI7QUFDQUMsNkNBQUcsQ0FBQ2tELFFBQUosQ0FBYXJELEtBQWIsRUFBb0JDLElBQXBCLEVBQTBCSCxLQUExQixFQUFpQ0MsTUFBakM7QUFDRCxDQUhELEM7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTSxDQUM5QjtBQUNBO0FBQ0E7QUFDSCxDQUpNOztBQU1QLElBQU1kLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNJLEtBQUQsRUFBUUMsSUFBUixFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QkcsS0FBN0IsRUFBdUM7QUFDdERDLDZDQUFHLENBQUM0QyxTQUFKLEdBQWdCN0MsS0FBaEI7QUFDQUMsNkNBQUcsQ0FBQ2tELFFBQUosQ0FBYXJELEtBQWIsRUFBb0JDLElBQXBCLEVBQTBCSCxLQUExQixFQUFpQ0MsTUFBakM7QUFDRCxDQUhELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgZHJhd0V2ZXJ5dGhpbmcgfSBmcm9tICcuL3NjcmlwdHMvY2FudmFzJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZnJhbWVzUGVyU2Vjb25kID0gNjA7XG4gIHNldEludGVydmFsKCgpID0+IHJlZHJhdygpLCAxMDAwL2ZyYW1lc1BlclNlY29uZCk7XG59O1xuXG5jb25zdCByZWRyYXcgPSAoKSA9PiB7XG4gIGRyYXdFdmVyeXRoaW5nKCk7XG59IiwiaW1wb3J0IHsgY2FudmFzLCBjdHggfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Qm9hcmQgPSAoKSA9PiB7XHJcbiAgZHJhd1JlY3QoIGNhbnZhcy53aWR0aCowLjI4LCBjYW52YXMuaGVpZ2h0KjAuMzYsIGNhbnZhcy53aWR0aCowLjQyLCBjYW52YXMuaGVpZ2h0KjAuNDUsIFwiYmx1ZVwiKTtcclxuICBkcmF3UmVjdCggMCwgY2FudmFzLmhlaWdodCowLjgxLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQqMC4xOSwgXCJyZWRcIik7XHJcbiAgZHJhd1JlY3QoIDAsIGNhbnZhcy5oZWlnaHQqMC40MSwgY2FudmFzLndpZHRoKjAuMjgsIGNhbnZhcy5oZWlnaHQqMC4zMywgXCJncmVlblwiKTtcclxuICBkcmF3UmVjdCggY2FudmFzLndpZHRoKjAuNzAsIGNhbnZhcy5oZWlnaHQqMC40MSwgY2FudmFzLndpZHRoKjAuMzAsIGNhbnZhcy5oZWlnaHQqMC4zMywgXCJncmVlblwiKTtcclxufTtcclxuXHJcbmNvbnN0IGRyYXdSZWN0ID0gKGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikgPT4ge1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5zdHJva2VSZWN0KGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgZHJhd0l0ZW1zLCBtb3ZlSXRlbXMgfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IGRyYXdCb2FyZCB9IGZyb20gXCIuL2JvYXJkXCI7XHJcbmltcG9ydCB7IGRyYXdVdGVuc2lscyB9IGZyb20gXCIuL3V0ZW5zaWxzXCI7XHJcbmltcG9ydCB7IGRyYXdQcm9wcyB9IGZyb20gXCIuL3Byb3BzXCI7XHJcbmltcG9ydCB7IGRyYXdQb3RzIH0gZnJvbSBcIi4vcG90c1wiO1xyXG5pbXBvcnQgeyBkcmF3S25vYnMgfSBmcm9tIFwiLi9rbm9ic1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XHJcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5jYW52YXMud2lkdGggPSBcIjEwMCVcIjtcclxuY2FudmFzLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdFdmVyeXRoaW5nID0gKCkgPT4ge1xyXG4gIGRyYXdDYW52YXMoKSxcclxuICBkcmF3Qm9hcmQoKSxcclxuICBkcmF3VXRlbnNpbHMoKSxcclxuICBkcmF3UG90cygpLFxyXG4gIGRyYXdQcm9wcygpLFxyXG4gIGRyYXdLbm9icygpLFxyXG4gIGRyYXdJdGVtcygpLFxyXG4gIG1vdmVJdGVtcygpXHJcbn07XHJcblxyXG5jb25zdCBkcmF3Q2FudmFzID0gKCkgPT4gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSBcIi4vY2FudmFzXCI7XHJcblxyXG5jbGFzcyBJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihpdGVtKSB7XHJcbiAgICAvLyBzYW1wbGUgb2YgaXRlbTogeyBpbWc6IFwidG9vbDMyXCIsIHBvc1dSYXRpbzogMC4xOCwgcG9zSFJhdGlvOiAwLjY1NSwgd1JhdGlvOiAwLjAyNSwgaFJhdGlvOiAwLjA0IH1cclxuICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcbiAgICB0aGlzLmFuaW1hdGlvblRvZ2dsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdHVybkFuaW1hdGlvblRvZ2dsZSgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uVG9nZ2xlID0gIXRoaXMuYW5pbWF0aW9uVG9nZ2xlOyBcclxuICB9XHJcblxyXG4gIGRyYXdJbWFnZSgpIHtcclxuICAgIGxldCB1c2VBbmltYXRlZEltZyA9IHRoaXMuYW5pbWF0aW9uVG9nZ2xlID8gXCJcIiA6IFwiYVwiO1xyXG5cclxuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBgc3JjL2ltYWdlcy9GT09ELyR7dGhpcy5pdGVtLmltZ30ke3VzZUFuaW1hdGVkSW1nfS5wbmdgO1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBpbWcsXHJcbiAgICAgICAgY2FudmFzLndpZHRoICogdGhpcy5pdGVtLnBvc1dSYXRpbyxcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ICogdGhpcy5pdGVtLnBvc0hSYXRpbyxcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ICogdGhpcy5pdGVtLndSYXRpbyxcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ICogdGhpcy5pdGVtLmhSYXRpb1xyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvblRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbS5wb3NXUmF0aW8gKz0gMC4wMDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcHJvcHMgPSB7XHJcbiAgc2FsdDogeyBpbWc6IFwidG9vbDMyXCIsIHBvc1dSYXRpbzogMC4xOCwgcG9zSFJhdGlvOiAwLjY1NSwgd1JhdGlvOiAwLjAyNSwgaFJhdGlvOiAwLjA0IH0sXHJcbiAgcGVwcGVyOiB7IGltZzogXCJ0b29sMzNcIiwgcG9zV1JhdGlvOiAwLjIxLCBwb3NIUmF0aW86IDAuNjU1LCB3UmF0aW86IDAuMDI1LCBoUmF0aW86IDAuMDQgfSxcclxuICBjdXR0aW5nQm9hcmQ6IHsgaW1nOiBcInRvb2wxNFwiLCBwb3NXUmF0aW86IDAuMzMsIHBvc0hSYXRpbzogMC44Mywgd1JhdGlvOiAwLjQ1NSwgaFJhdGlvOiAwLjE1IH0sXHJcbiAga25pZmU6IHsgaW1nOiBcInRvb2wyNFwiLCBwb3NXUmF0aW86IDAuNTcsIHBvc0hSYXRpbzogMC44Niwgd1JhdGlvOiAwLjE5LCBoUmF0aW86IDAuMDYgfSxcclxuICBwb3Q6IHsgaW1nOiBcInRvb2wxOFwiLCAgcG9zV1JhdGlvOiAwLjU4LCBwb3NIUmF0aW86IDAuNTgsIHdSYXRpbzogMC4xOCwgaFJhdGlvOiAwLjEzIH0sXHJcbn07XHJcbmNvbnN0IHByb3BOYW1lcyA9IFtcInNhbHRcIiwgXCJwZXBwZXJcIiwgXCJjdXR0aW5nQm9hcmRcIiwgXCJrbmlmZVwiLCBcInBvdFwiXTtcclxuZXhwb3J0IGNvbnN0IGRyYXduUHJvcHMgPSB7fTtcclxuXHJcbi8vIGl0ZXJhdGUgdGhyb3VnaCBwcm9wcyB1c2luZyBwcm9wTmFtZXMgYW5kIGRyYXcgZWFjaCBpdGVtIGFuZCBhZGQgaXQgdG8gZHJhd25Qcm9wcyBvYmplY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdJdGVtcygpIHtcclxuICBwcm9wTmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXSB8fD0gbmV3IEl0ZW0ocHJvcHNbaXRlbV0pO1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXS5kcmF3SW1hZ2UoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcmVmYWN0b3IgdG8gaW5jbHVkZSBhIHN3aXRjaCAoJ2FuaW1hdGVBbGwnLCAnYW5pbWF0ZUl0ZW0nLCAnZG9ybWFudEFsbCcpXHJcbi8vIHRvZ2dsZSBhbGwgaXRlbXMgdG8gYW5pbWF0ZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVJdGVtcygpIHtcclxuICBwcm9wTmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXS5hbmltYXRpb25Ub2dnbGUgPSB0cnVlO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBhbmltYXRlIGEgc2luZ2xlIGl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVJdGVtKCkge1xyXG4gIGRyYXduUHJvcHNbXCJzYWx0XCJdLnVwZGF0ZSgpO1xyXG59XHJcblxyXG4vLyB0b2dnbGUgYWxsIGl0ZW1zIHRvIGRvcm1hbnRcclxuZXhwb3J0IGZ1bmN0aW9uIGRvcm1hbnRJdGVtcygpIHtcclxuICBwcm9wTmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgZHJhd25Qcm9wc1tpdGVtXS5hbmltYXRpb25Ub2dnbGUgPSBmYWxzZTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdLbm9icyA9ICgpID0+IHtcclxuICBkcmF3Q2lyY2xlKGNhbnZhcy53aWR0aCAqIDAuNDAzLCBjYW52YXMuaGVpZ2h0ICogMC43OSwgMTksIFwicmVkXCIpO1xyXG4gIGRyYXdDaXJjbGUoY2FudmFzLndpZHRoICogMC42NjksIGNhbnZhcy5oZWlnaHQgKiAwLjc5LCAxOSwgXCJvcmFuZ2VcIik7XHJcbn07XHJcblxyXG4vLyBjb25zdCBkcmF3UmVjdCA9IChsZWZ0WCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgY29sb3IpID0+IHtcclxuLy8gICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbi8vICAgY3R4LmZpbGxSZWN0KGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IGRyYXdDaXJjbGUgPSAoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBkcmF3Q29sb3IpID0+IHtcclxuICBjdHguZmlsbFN0eWxlID0gZHJhd0NvbG9yO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gIGN0eC5maWxsKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdQb3RzID0gKCkgPT4ge1xyXG4gICAgLy8gZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuMzAsIGNhbnZhcy5oZWlnaHQqMC4zOSwgY2FudmFzLndpZHRoKjAuMTAsIGNhbnZhcy5oZWlnaHQqMC4xNiwgJ3JlZCcpO1xyXG4gICAgLy8gZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuNDQsIGNhbnZhcy5oZWlnaHQqMC4zOSwgY2FudmFzLndpZHRoKjAuMTAsIGNhbnZhcy5oZWlnaHQqMC4xNiwgJ29yYW5nZScpO1xyXG4gICAgLy8gZHJhd1JlY3QoY2FudmFzLndpZHRoKjAuNTgsIGNhbnZhcy5oZWlnaHQqMC4zOSwgY2FudmFzLndpZHRoKjAuMTAsIGNhbnZhcy5oZWlnaHQqMC4xNiwgJ3llbGxvdycpO1xyXG59XHJcblxyXG5jb25zdCBkcmF3UmVjdCA9IChsZWZ0WCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgY29sb3IpID0+IHtcclxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgY3R4LmZpbGxSZWN0KGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcclxufTsiLCJpbXBvcnQgeyBjYW52YXMsIGN0eCB9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3UHJvcHMgPSAoKSA9PiB7XHJcbiAgICAvLyBkcmF3UmVjdChjYW52YXMud2lkdGgqMC4wNSwgY2FudmFzLmhlaWdodCowLjgzLCBjYW52YXMud2lkdGgqMC4yMywgY2FudmFzLmhlaWdodCowLjE1LCAnZ3JlZW4nKTtcclxuICAgIC8vIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjMzLCBjYW52YXMuaGVpZ2h0KjAuODMsIGNhbnZhcy53aWR0aCowLjIzLCBjYW52YXMuaGVpZ2h0KjAuMTUsICdibHVlJyk7XHJcbiAgICAvLyBkcmF3UmVjdChjYW52YXMud2lkdGgqMC42MCwgY2FudmFzLmhlaWdodCowLjg3LCBjYW52YXMud2lkdGgqMC4xMCwgY2FudmFzLmhlaWdodCowLjA4LCAncmVkJyk7XHJcbiAgICAvLyBkcmF3UmVjdChjYW52YXMud2lkdGgqMC43NSwgY2FudmFzLmhlaWdodCowLjgzLCBjYW52YXMud2lkdGgqMC4yMCwgY2FudmFzLmhlaWdodCowLjE1LCAnb3JhbmdlJyk7XHJcbiAgICAvLyBkcmF3UmVjdChjYW52YXMud2lkdGgqMC4wNSwgY2FudmFzLmhlaWdodCowLjQ5LCBjYW52YXMud2lkdGgqMC4wOSwgY2FudmFzLmhlaWdodCowLjA5LCAnb3JhbmdlJyk7XHJcbn1cclxuXHJcbmNvbnN0IGRyYXdSZWN0ID0gKGxlZnRYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikgPT4ge1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFJlY3QobGVmdFgsIHRvcFksIHdpZHRoLCBoZWlnaHQpO1xyXG59OyIsImltcG9ydCB7IGNhbnZhcywgY3R4IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdVdGVuc2lscyA9ICgpID0+IHtcclxuICAgIC8vIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjE4LCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICdyZWQnKTtcclxuICAgIC8vIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjIwLCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICdvcmFuZ2UnKTtcclxuICAgIC8vIGRyYXdSZWN0KGNhbnZhcy53aWR0aCowLjIyLCBjYW52YXMuaGVpZ2h0KjAuNjQsIGNhbnZhcy53aWR0aCowLjAyLCBjYW52YXMuaGVpZ2h0KjAuMDUsICd5ZWxsb3cnKTtcclxufVxyXG5cclxuY29uc3QgZHJhd1JlY3QgPSAobGVmdFgsIHRvcFksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSA9PiB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsUmVjdChsZWZ0WCwgdG9wWSwgd2lkdGgsIGhlaWdodCk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==