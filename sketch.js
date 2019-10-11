var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
Box1=createSprite(100,100,100,100);
Box2=createSprite(200,200,100,100);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
Box1.x=World.mouseX;
Box1.y=World.mouseY;
if (IsTouching(Box1,Box2)){
  Box1.shapeColor = "red";
 Box2.shapeColor = "red";
}
else {
  Box1.shapeColor = "green";
  Box2.shapeColor = "green";
}
  Bounceoff (movingRect,fixedRect);
  drawSprites();
}

