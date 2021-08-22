const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var snow1=[]





var background,backgroundImg

function preload(){
  backgroundImg=loadImage("snow3.jpg");
}




function setup() {

  createCanvas(800,400);
  engine=Engine.create ();
  world=engine.world;
}

function draw() {
  Engine.update(engine);
  background(backgroundImg)  ;
  if(frameCount % 40===0){
    snow1.push(new snow(random(50,700),random(15,70)));
  }
  for(var p=0;p<snow.lenght;p++){
    snow1[p].display();
  }
  drawSprites();
}