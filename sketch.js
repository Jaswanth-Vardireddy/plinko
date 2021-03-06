const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground;
var division=[]
var divisionHeight=250
var engine,world;
var plinko=[];
var particles=[];
var particle;
var score=0;
var count=0;
var gameState="start"
function setup()
{
  createCanvas(500,500);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(100,493,800,10);

  for(var k =0; k <=width; k = k + 80)
  {
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight))
  
  }

  for(var j = 55; j <=width; j=j+50)
  {

    plinko.push(new Plinko(j,55,10,10))
  }

  for(var j = 75; j <=width; j=j+50)
  {

    plinko.push(new Plinko(j,175,10,10))
  }

  for(var j = 65; j <=width; j=j+50)
  {

    plinko.push(new Plinko(j,120,10,10))
  }
   if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }
}

function draw() 
{
  Engine.update(engine);
  background("black");  
  ground.display();

  if(gameState==="end")
  {
    textSize(100)
    text("Game Over",100,200)
  }
  textSize(30);
  text("Score" + score,20,40)
  for(var k=0; k <division.length; k++)
  {
    division[k].display();
  }
  
  for(var i = 0; i<plinko.length; i++)
  {
    plinko[i].display();
  }

  if(particle!=null)
  {
    particle.display();
    if(particle.position.y>700)
    {
      score=score+500;
      particle=null;
      if(count>=5)
      {
        gameState="end";
      }
      else if(particle.body.position.x<600 && particle.body.position.x>300)
      {
        score=score+100
        particle=null;
        if(count>=5)
        {
          gameState="end";
        }
      }
    }
  }
}

function mousePressed()
{
if(gameState!=="end")
{
count++
particle=new Particle(mouseX,10,10,10)
}
}