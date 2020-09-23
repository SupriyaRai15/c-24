
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin,paperIMG,paper2,bin2,bin3,groundO;

function preload()
{
	 paperIMG=loadImage("Crumbled Paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  groundO=new ground(width/2,670,width,20);
    paper= new PAPER(200,650,20)     
    bin= new HOLDER(750,600,20,100);
    bin2= new HOLDER(450,600,20,100);
    bin3= new HOLDER(600,650,300,20);
	
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  bin.display();
  bin2.display();
  bin3.display();
  groundO.display();
  
 
}



