class Sand{
    constructor(x,y,r){
      var sando={
        restitution:1.3,
        friction:5,
        density:1,
        mass:0.5
      }
      this.body = Bodies.circle(x,y,r,sando);
      this.radius = r;
      World.add(world, this.body);
      this.height = 20;
      this.width = 20;
      this.body.position.x = x;
      this.body.position.y = y;
      World.add(world, this.body);
    }
      display(){
        push();
        ellipseMode(CENTER); 
        fill("red");
        stroke("white");
        strokeWeight(3);
        ellipse(this.body.position.x,this.body.position.y,this.height, this.width);
        pop();
      }
  }