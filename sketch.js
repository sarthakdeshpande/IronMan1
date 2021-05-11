
var bg, backgroundImg,ironman,ironmanImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)

  ironman = createSprite(100,400,50,100);
  ironman.addImage(ironmanImg)
  ironman.scale=0.4;
}

function draw() {
  
if(keyDown("up")){
  ironman.velocityY = -10;
}
if(keyDown("left")){
  ironman.x = ironman.x -5;
}  
if(keyDown("right")){
  ironman.x = ironman.x +5;
} 
ironman.velocityY = ironman.velocityY + 0.5;
    
    drawSprites();
   
}

