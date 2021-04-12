
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
    roof = new Roof(400,100,500,30)
	bob1 = new Bob(400,300,40)
    // bob2 = new Bob
    // bob3 = new Bob
	// bob4 = new Bob
	// bob5 = new Bob

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  roof.display();
  bob1.display();
  
  drawSprites();
 
}



