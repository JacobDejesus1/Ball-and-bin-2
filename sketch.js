
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,10)
	ball = new Ball(200,680,50)
	bin1 = new Bin(500,645,10,100)
	bin2 = new Bin(550,690,100,10)
	bin3 = new Bin(600,645,10,100)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
image(bin2.image,480,520,200,180);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75})
	}
	}



