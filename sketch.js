var hammer;
var rubber;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;
var stone;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(mouseX,mouseY, 200,100);
	rubber = new Rubber(200,300,75,75);
	stone = new Stone(400,200,100,100);

	sand1 = new Sand(604,500, 100,100);
	sand2 = new Sand(603,500, 100,100);
	sand3 = new Sand(602,500, 100,100);
	sand4 = new Sand(601,500, 100,100);
	sand5 = new Sand(600,500, 100,100);

	ground = new Ground(400,699,800,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  ground.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();

  stone.display();
  hammer.display();
  rubber.display();

  drawSprites();
 
}



