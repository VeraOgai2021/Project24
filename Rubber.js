class Rubber{
    constructor(x,y,r){
      var rubbero = {
        restitution: 0.3,
        friction: 1.0,
        density: 0.5,
        mass:1
    }

    this.body = Bodies.circle(x,y,r,rubbero);
    this.radius = r;
    World.add(world, this.body);
    x = 200;
    y = 300;
    this.height = 75;
    this.width = 75;
    World.add(world, this.body);
      
    }
      display(){
        this.body.position.x = 200;
        this.body.position.y = 300;
        fill("blue");
        stroke("white");
        strokeWeight(3);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
      }
  }