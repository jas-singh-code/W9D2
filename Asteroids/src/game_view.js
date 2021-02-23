const Game = require("./game.js");



function gameView() {
    // const game = new Game();

    // game.canvas = document.getElementById('game-canvas');
    // game.canvas.width = 1000;
    // this.canvas.height = 600;
    // this.ctx = this.canvas.getContext('2d');

    let game = new Game();
    game.setUpGame()
}






module.exports = {
    gameView,
}