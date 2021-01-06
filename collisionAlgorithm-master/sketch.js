var fixedRect, movingRect;
var obj1, obj2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  obj1=createSprite(50,50,80,30);
  obj1.velocityX=4;

  obj2=createSprite(500,50,80,30);
  



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  Touches(movingRect,fixedRect);

  BounceOff(obj1,obj2);

  
  drawSprites();
}

