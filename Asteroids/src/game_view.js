const Game = require("./game.js");


function gameView() {
    let game = new Game();
    game.setUpGame()
}




module.exports = {
    gameView,
}