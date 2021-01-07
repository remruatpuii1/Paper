const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world
var b1,b2,b3,bucket,paper,bucketImg,paperImg;

function preload(){

  bucketImg=loadImage("sprites/dustbingreen.png");

}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  b1 = new Bucket(615, 385, 100, 10);
  b2 = new Bucket(560, 390, 10, 100);
  b3 = new Bucket(670, 390, 10, 100);
  paper = new Paper(140, 300, 10,);
  ground = new Ground(600,height,1200,20);
  
}

function draw() {
   rectMode(CENTER);
    background("white");
	b1.display();
	b2.display();
	b3.display();
	paper.display();
  ground.display();
  
  imageMode(CENTER);
  image(bucketImg,615,345,145,100);

}

function keyPressed(){
  if (keyCode === UP_ARROW ) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 13, y: -13});
  }
}
