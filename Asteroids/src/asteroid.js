const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

Util.inherits(Asteroid, MovingObject);


class Asteroid {
    Asteroid.COLOR= 'grey';
    Asteroid.RADIUS = 30;
    constructor(pos) {
        let vel = Util.randomVec(5);
        super(pos, vel, Asteroid.RADIUS, Asteroid.COLOR);
    }
}

module.exports = Asteroid;
