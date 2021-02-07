//needed to define
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine;
var world;
//end
var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10,drop11;

function preload(){
  thunderbolt= loadImage('images/thunderbolt/1.png')
}

function setup() {
//needed
engine=Engine.create()

world=engine.world
drop1=new Drops(50,400,10)
drop2=new Drops(100,200,10)
drop3=new Drops(150,350,10)
drop4=new Drops(200,250,10)
drop5=new Drops(250,500,10)
drop6=new Drops(300,150,10)
drop7=new Drops(350,50,10)
drop8=new Drops(400,100,10)
drop9=new Drops(450,150,10)
drop10=new Drops(500,200,10)
drop11=new Drops(350,300,10)
drop12=new Drops(400,400,10)
bruce=new Picture(200,300,30,30)
 
createCanvas(500,500);
}

function draw() {
  background(5, 60, 150); 
//important for matter.js
image(thunderbolt, 100, 50, 200,200); 


Engine.update(engine)
drop1.display()
drop2.display()
drop3.display()
drop4.display()
drop5.display()
drop6.display()
drop7.display()
drop8.display()
drop9.display()
drop10.display()
drop11.display()
drop12.display()
bruce.display()
drawSprites()
}