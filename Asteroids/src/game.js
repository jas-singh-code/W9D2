// const MovObj = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

    function Game () {
        this.canvas = document.getElementById('game-canvas');
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');
    }

    Game.DIM_X = 1000;
    Game.DIM_Y = 600;
    Game.NUM_ASTEROIDS = 10;

    Game.prototype.addAsteroids = function() {
        const numAsteroids = 0;
        while (numAsteroids < Game.NUM_ASTEROIDS) {
            const asteroid = new Asteroid({
                pos: this.randomPosition()
            });
        }
    };

    Game.prototype.randomPosition = function() {
        return [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];
    };

    Game.prototype.setUpGame = function () {

        const ctx = this.ctx;

        function drawBackground() {
            ctx.fillStyle = '#211b59';
            ctx.fillRect(0, 0, 1000, 600);
            ctx.fill();
        }

        const asteroid = new Asteroid({
            pos: [100, 300]
        });

        drawBackground(ctx);
        asteroid.draw(ctx)

    };


module.exports = Game;