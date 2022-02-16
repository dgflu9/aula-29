const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, corda, fruta, ligamento;

function setup() 
{
  createCanvas(500,600);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,590,600,20);
  corda = new Rope(8,{x:245, y:20});
  var fruta_options = {
    density: 0.001

  }

  fruta = Bodies.circle(300,300,20,fruta_options);
  Matter.Composite.add(corda.body,fruta);

  ligamento = new Link(corda, fruta);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  corda.show();
  ellipse (fruta.position.x, fruta.position.y, 20, 20);
  Engine.update(engine);
  

 
   
}
