const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var particles = [];



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  division1 = new Division(0,685,10,200);
  division2 = new Division(80,685,10,200);
  division3 = new Division(160,685,10,200);
  division4 = new Division(240,685,10,200);
  division5 = new Division(320,685,10,200);
  division6 = new Division(400,685,10,200);
  division7 = new Division(480,685,10,200);

  ground = new Ground(240,790,480,10);
  border1 = new Ground(0,400,1,480);
  broder2 = new Ground(240,0,800,1);
  border3 = new Ground(490,400,1,800);



}

function draw() {
  background(255,255,255);

  Engine.update(engine);

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  
  ground.display();

  //text(mouseX + " " + mouseY,240,400);

  for( j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }

  for( j =15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for( j =40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for( j =15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }

  for( i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount%10===0) {
    particles.push(new Particle(random(0,480),10,7));
  }

  for( i = 0; i < particles.length; i++){
    particles[i].display();
  }


  drawSprites();
}