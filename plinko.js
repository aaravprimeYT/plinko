class Plinko{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':0.3,
            'density':1.2,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        fill(100,100,100);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
  }