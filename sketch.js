const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var box, ball;



function setup() {
  createCanvas(800,400);
  myEngine= Engine.create();
  myWorld= myEngine.world;

 var box_options={ 
   density :1.0,
   restitution:0.8
  }

  box = Bodies.rectangle(400,200,30,30,box_options);
  World.add(myWorld,box);

var ball_options={
  restitution:1.0
}
  ball= Bodies.circle(200,100,40,ball_options);
World.add(myWorld,ball);
  console.log(box);
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  rect(box.position.x,box.position.y,30,30);
circle(ball.position.x,ball.position.y,40);
}