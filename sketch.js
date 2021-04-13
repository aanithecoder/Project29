const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, polygon;
var slingShot1

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  //stands
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(750, 150, 150, 10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //new set
  //level one
  block17 = new Block(725, 125, 30, 40);
  block18 = new Block(750, 125, 30, 40);
  block19 = new Block(775, 125, 30, 40);

  //level two
  block20 = new Block(735, 85, 30, 40);
  block21 = new Block(765, 85, 30, 40);

  //level three
  block22 = new Block(750, 45, 30, 40);


  //polygon
  polygon = new Polygon(50, 200, 20);
  World.add(world, polygon);


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display();
  
  //level one
  strokeWeight(2);
  stroke(15);
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level two
  fill("turquoise");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //level three
  fill("skyblue");
  block13.display();
  block14.display();
  block15.display();

  //top
  fill("lavender");
  block16.display();
 
  fill("green");
  block17.display();
  block18.display();
  block19.display();

  fill("limegreen");
  block20.display();
  block21.display();

  fill("lightgreen");
  block22.display();



}
