class Stone{
    constructor(x,y,height){
      var stoneo = {
        restitution: 2,
        friction: 1.0,
        density: 0.5,
        mass:0.75
    }

        this.body = Bodies.rectangle(x,y,100,100,stoneo);
        World.add(world, this.body);
        x = 400;
        y = 200;
        this.height = height;
        this.width = 100;
        World.add(world, this.body);

    }
      display(){
        push();
        this.body.position.x = 400;
        this.body.position.y = 200;
        fill("black");
        stroke("white");
        strokeWeight(3);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.height, this.width);
        pop();
      }
  }