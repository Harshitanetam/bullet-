var wall,thickness,damage;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(100,100,10,20);
  wall=createSprite(700, 120,10,100);
  
thickness=random(23,80);
speed=random(235,223);
weight=random(32,32);
damage=random(3.68,12.45);
}

function draw() {
  background("black");  
 
 bullet.velocityX=speed;
  if(hasCollided(bullet,wall)) {
    
     bullet.x=1230;
 bullet.velocityX=0;
 var damage=0.5*weight*speed*speed/(thickness*thickness);
  

 if(damage<500)
 {
  wall.shapeColor=color(255,0,0);
 }
 if(damage>500)
 {
   wall.shapeColor=color(0,255,0);
 }
}

drawSprites();

}
function hasCollided(bullet,wall)
{
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge)
  {
  return true;
    }
    return false;
}
