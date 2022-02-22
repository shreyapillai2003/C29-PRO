const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var  rope;
var box1;

function setup(){
    var canvas = createCanvas(3000,400);
    engine = Engine.create();
    world = engine.world;

   ground= Bodies.rectangle(600,600,1200,20);
   ball = Bodies.circle(300,200,50);
   rope = new Rope(ball.body,{x:500,y:50});
   box1 = new Box(900, 100, 70, 70); 
   box2 = new Box(900, 100, 70, 70); 
   box3 = new Box(900, 100, 70, 70);
   box4 = new Box(900, 100, 70, 70); 
   box5 = new Box(900, 100, 70, 70);
   box6 = new Box(900, 100, 70, 70);
   box7 = new Box(800, 100, 70, 70);
   box8 = new Box(800, 100, 70, 70);
   box9 = new Box(800, 100, 70, 70);
   box10 = new Box(800, 100, 70, 70); 
   box11 = new Box(800, 100, 70, 70); 
   box12 = new Box(800, 100, 70, 70); 
   box13 = new Box(700, 100, 70, 70); 
   box14 = new Box(700, 100, 70, 70);
   box15 = new Box(700, 100, 70, 70); 
   box16 = new Box(700, 100, 70, 70); 
   box17 = new Box(700, 100, 70, 70); 
   box18 = new Box(700, 100, 70, 70); 
   box19 = new Box(700, 100, 70, 70); 
   box20 = new Box(700, 100, 70, 70);
}

function draw(){
    background("yellow");
    Engine.update(engine)

    var pos= ground.position;
    rect(pos.x, pos.y, 1200,20);
    var pos2= ball.position;
    ellipse(pos2.x, pos2.y,50,50)

    rope.display();
    box1.display();
}

function mouseDragged() { 
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY }); 
}
