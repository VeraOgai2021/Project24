class Hammer{
    constructor(mouseX,mouseY){
      var hammero = {
        'restitution':2,
        'friction':1.0,
        'density':0.5
    }
    this.body = Bodies.rectangle(mouseX,mouseY,200,100,hammero);
    this.height = 200;
    this.width = 100;
    World.add(world, this.body);
    }

      display(){
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER); 
        fill("orange");
        stroke("white");
        strokeWeight(3);
        rect(0,0,this.height, this.width);
        pop();
    }
  }