function setup() {
  createCanvas(800,800);

  astronaut=createSprite(300,550);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;
}
function preload(){
  bg= loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush= loadAnimation("brush.png");
gym = loadAnimation("gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
move = loadAnimation("move.png","move1.png")
}
function draw() {
  background(bg);  

  drawSprites();
  textSize(20);
  fill ("white")
  text("Instructions:",5,100)
  textSize(16);
  text("Up Arrow = Brushing", 5, 120)
  text("Down Arrow = Gymming", 5, 136)
  text("Left Arrow = Eating", 5, 152)
  text("Right Arrow = Bathing",5, 168)
  text("m key = Moving", 5, 186)
edges=createEdgeSprites()
astronaut.bounceOff(edges)
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush)
  astronaut.changeAnimation("brushing")
astronaut.y=600
astronaut.velocityX = 0
astronaut.veloxityY=0
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym)
  astronaut.changeAnimation("gymming")
astronaut.y=600
astronaut.velocityX = 0
astronaut.veloxityY=0
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("drinking",drink)
  astronaut.changeAnimation("drinking")
astronaut.x=300
astronaut.velocityX = 0
astronaut.veloxityY=0
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating")
astronaut.x=150
astronaut.velocityX = 0
astronaut.veloxityY=0
}
if(keyDown("m")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving")
astronaut.velocityX = 1
astronaut.veloxityY=1
}
}
