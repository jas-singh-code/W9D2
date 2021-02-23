/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\n\r\nconst Asteroid = function(options) {\r\n    MovingObject.call(this, options);\r\n    this.color = options.color || Asteroid.COLOR;\r\n    this.radius = options.radius || Asteroid.RADIUS;\r\n}\r\n\r\nAsteroid.COLOR = 'grey';\r\nAsteroid.RADIUS = 30;\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\n\r\nmodule.exports = Asteroid;\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const MovObj = require(\"./moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\n    function Game () {\n        this.canvas = document.getElementById('game-canvas');\n        this.canvas.width = 1000;\n        this.canvas.height = 600;\n        this.ctx = this.canvas.getContext('2d');\n    }\n\n    Game.DIM_X = 1000;\n    Game.DIM_Y = 600;\n    Game.NUM_ASTEROIDS = 10;\n\n    Game.prototype.addAsteroids = function() {\n        const numAsteroids = 0;\n        while (numAsteroids < Game.NUM_ASTEROIDS) {\n            const asteroid = new Asteroid({\n                pos: this.randomPosition()\n            });\n        }\n    };\n\n    Game.prototype.randomPosition = function() {\n        return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];\n    };\n\n    Game.prototype.setUpGame = function () {\n\n        const ctx = this.ctx;\n\n        function drawBackground() {\n            ctx.fillStyle = '#211b59';\n            ctx.fillRect(0, 0, 1000, 600);\n            ctx.fill();\n        }\n\n        const asteroid = new Asteroid({\n            pos: [100, 300]\n        });\n\n        drawBackground(ctx);\n        asteroid.draw(ctx)\n\n    };\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\nfunction gameView() {\n    // const game = new Game();\n\n    // game.canvas = document.getElementById('game-canvas');\n    // game.canvas.width = 1000;\n    // this.canvas.height = 600;\n    // this.ctx = this.canvas.getContext('2d');\n\n    let game = new Game();\n    game.setUpGame()\n}\n\n\n\n\n\n\nmodule.exports = {\n    gameView,\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n\n    GameView.gameView();\n    \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) { \n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    const circleX = this.pos[0];\n    const circleY = this.pos[1];\n    const radius = this.radius;\n\n    ctx.beginPath();\n    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);\n    ctx.fillStyle = this.color;\n    ctx.strokeStyle = this.color;\n    ctx.fill();\n    ctx.stroke();\n};\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0]\n    this.pos[1] += this.vel[1]\n};\n\n\nmodule.exports = MovingObject;\n\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("// Return a randomly oriented vector with the given length.\r\nconst Util = {\r\n    inherits(childClass, parentClass) {\r\n      function Surrogate () {};\r\n      Surrogate.prototype = parentClass.prototype;\r\n      childClass.prototype = new Surrogate();\r\n      childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n    \r\n    // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n};\r\n\r\nmodule.exports = Util;\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;