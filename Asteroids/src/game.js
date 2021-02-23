const MovObj = require("./moving_object.js");

class Game {

    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.canvas.width = 1000;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext('2d');
    }

    setUpGame() {

        const ctx = this.ctx;

        function drawBackground() {
            ctx.fillStyle = '#211b59';
            ctx.fillRect(0, 0, 1000, 600);
            ctx.fill();
        }

        const mo = new MovObj({
            pos: [100, 300],
            vel: [40, 40],
            radius: 30,
            color: 'grey'
        });

        drawBackground(ctx);
        mo.draw(ctx)

    }

}

module.exports = Game;