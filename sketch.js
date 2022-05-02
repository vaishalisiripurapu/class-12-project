var path, boy, leftBoundary, rightBoundary;

var pathImg, boyImg;

var i;

var coin, coinImg, energyDrink, energyDrinkImg, bomb, bombImg;



function preload() {
  pathImg = loadImage("path.png");

  boyImg = loadAnimation("runner1.png", "runner2.png");

  coinImg = loadImage("coin.png");

  energyDrink = loadImage("energyDrink.png");

  bombImg = loadImage("bomb.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  path = createSprite(200, 200,20,20);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  //creating boy running
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning", boyImg);


  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;

  coin = createSprite(300,300,20,20);
  coin.addImage("coin",coinImg);

  energyDrink = createSprite(400,300,20,20);
  energyDrink.addImage("energyDrink",energyDrinkImg);

  bomb = createSprite(200,300,20,20);
  bomb.addImage("bomb",bombImg);
}

function draw() {
  background(0);
  path.velocityY = 4;

  boy.x = World.mouseX;
  edges = createEdgeSprites();
  //boy.collide(edges);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset the background

  if (path.y > 400) {
    path.y = height / 2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

  /*if(path.y > 400 ){path.y = height/2;}*/

  drawSprites();
}
