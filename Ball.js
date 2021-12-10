class Ball {
    constructor(x,y) {
        var options = {
            restitution : 0.8,
            friction : 1.0,
            density : 0.5,
        }

        this.body = Bodies.circle(x,y,70,options)
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,70,70);
        pop()
    }
}