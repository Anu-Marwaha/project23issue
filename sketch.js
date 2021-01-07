var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine, myWorld
var box1, box2, box3;
var gound1,groundSprite1;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	myEngine=Engine.create();
	myWorld=myEngine.world;
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)


//	engine = Engine.create();
//	world = engine.world;

	packageBody = Bodies.rectangle(width/2,200,10,10,{restitution:0.3, isStatic:true});
	World.add(myWorld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-20, width, 10 , {isStatic:true} );
 	World.add(myWorld, ground);
    box1=new Box(400,650,200,20);
	box2=new Box(500,550,20,200);
	box3=new Box(300,550,20,200);

//	ground1 = Bodies.rectangle(width/2, height-150, width, 10 , {isStatic:true} );
//	 World.add(myWorld, ground1);
//	 groundSprite1=createSprite(width/2, height-150, width,10);
//	groundSprite1.shapeColor=color("blue");

	//console.log(box1.depth);
	//console.log(packageSprite.depth);
    
}


function draw() {
  background(0);
  Engine.update(myEngine);
 
 // keyPressed();
  box1.display();
  box2.display();
  box3.display();
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
 //   packageSprite.x= packageBody.position.x ;
 // packageSprite.y= packageBody.position.y ;
  }
}



