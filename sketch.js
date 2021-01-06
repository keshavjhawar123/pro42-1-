const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100;
var boy;
var drops=[];
var engine,world;
function preload(){
    
}

function setup(){
 engine=Engine.create();
 world=engine.world;
 createCanvas(400,400);  
  boy=new Boy(200,300,200,200);  
  for(var i=0;i<maxDrops;i++){
    drops.push(new Drop(random(0,400),random(0,400),3));
}
}

function draw(){
  Engine.update(engine);
  background("black");  
  for(var i=0;i<drops.length;i++){
    drops[i].display();
    drops[i].update();
  }
  boy.display();
  
}   

