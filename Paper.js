class PAPER{
    constructor(x, y, radius) {
        var options = {
            'isStatic' : true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
			 strokeWeight(3);
			 fill("red");
			 ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}