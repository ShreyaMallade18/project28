
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,500,30,30);
	  ground = new Ground(400,680,800,20);
    leftSide = new Dustbin(550,620,20,100);
	  bottom = new Dustbin(610,660,100,20);
	  rightSide = new Dustbin(670,620,20,100);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  paper.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:40, y:-50});
  }
}

  function mouseDragged(){
  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    Paper.fly();
  }




