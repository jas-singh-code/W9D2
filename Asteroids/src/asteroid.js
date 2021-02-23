const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

const Asteroid = function(options) {
    MovingObject.call(this, options);
    this.color = options.color || Asteroid.COLOR;
    this.radius = options.radius || Asteroid.RADIUS;
}

Asteroid.COLOR = 'grey';
Asteroid.RADIUS = 30;
Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;


