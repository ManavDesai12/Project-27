
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200, 500);
	bobObject2 = new Bob(300, 500);
	bobObject3 = new Bob(400, 500);
	bobObject4 = new Bob(500, 500);
	bobObject5 = new Bob(600, 500);
	roof = new Roof(400, 100, 500, 50);
	rope1 = new Rope(bobObject1.body, roof.body, -200, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -100, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 100, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 200, 0);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	drawSprites();
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -5, y: -10});
	}
}

	
