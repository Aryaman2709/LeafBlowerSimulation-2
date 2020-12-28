//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var leaves = [];


function preload()
{
  //load images here
  backgroundImage = loadImage("garden.jpg");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  leafBlower = new LeafBlower();
  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  leafBlower.display();


  
  if (frameCount%10===0){
    leaves.push(new Leaf(random(100,700), random(100,700)))
  }

  for(var k = 0; k<leaves.length; k++){
    leaves[k].display();
  }
 
  drawSprites();
  //add styles here

}



