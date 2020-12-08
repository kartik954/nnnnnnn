
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobobject1, bobobject2, bobobject3, bobobject4, bobobject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600, 80, 500, 60);

	bobobject1 = new Bob(460, 560, 150);
	bobobject2 = new Bob(535, 560, 150);
	bobobject3 = new Bob(610, 560, 150);
	bobobject4 = new Bob(685, 560, 150);
	bobobject5 = new Bob(760, 560, 150);

	rope1 = new Rope(bobobject1.body, roof.body, 0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  rope1.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  drawSprites();
 
}



