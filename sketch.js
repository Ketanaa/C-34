
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5;
var b6, b7, b8, b9, b10;
var b11, b12, b13, b14;

var ground;
var ball;
var rope;



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  
  b1 = new Box(700, 50);
  b2 = new Box(700, 50);
  b3 = new Box(700, 50);
  b4 = new Box(700, 50);
  b5 = new Box(700, 50);
  b6 = new Box(700, 50);
  b7 = new Box(700, 50);
  b8 = new Box(700, 50);

  b9 = new Box(800, 50);
  b10 = new Box(800, 50);
  b11 = new Box(800, 50);
  b12 = new Box(800, 50);
  b13 = new Box(800, 50);
  b14 = new Box(800, 50);

  ball = new Ball(550,50)
  rope = new Rope(ball.body,{x:550,y:50})
  ground = new Ground(600,580,1200,20)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();

  ball.display();
  rope.display();
  ground.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}