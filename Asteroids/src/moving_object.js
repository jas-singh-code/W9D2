
function MovingObject(obj) { 
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
}

MovingObject.prototype.draw = function(ctx) {
    const circleX = this.pos[0];
    const circleY = this.pos[1];
    const radius = this.radius;

    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.fill();
    ctx.stroke();
}

MovingObject.prototype.move = function 


module.exports = MovingObject;


