var astronaut;

var ISS, edge;

var sleepImg, bathImg, brushImg, drinkImg, eatImg, gym1Img, gym2Img, ISSImg, moveImg;

var bounceSound;

function preload(){

  ISSImg = loadImage("iss.png");
  
  sleepImg = loadImage("sleep.png");
  brushImg = loadImage("brush.png");
  
  eatImg = loadAnimation("eat1.png", "eat2.png");
  gym1Img = loadAnimation("gym1.png", "gym2.png");
  gym2Img = loadAnimation("gym11.png", "gym12.png");
  moveImg = loadAnimation("move.png", "move1.png");
  bathImg = loadAnimation("bath1.png", "bath2.png");
  drinkImg = loadAnimation("drink1.png", "drink2.png");

  bounceSound = loadSound("bounce.mp3");

}

function setup() {
  createCanvas(800,400);
  
  ISS = createSprite(370, 200);
  ISS.addImage(ISSImg);
  ISS.scale = 0.2;

  astronaut = createSprite(300, 200);
  astronaut.addImage(sleepImg);
  astronaut.scale = 0.08;
}

function draw() {
  background(255,255,255);  

  edges = createEdgeSprites();
  if(astronaut.bounceOff(edges)){
    bounceSound.play();
  }


  astronaut.debug = true;
  astronaut.setCollider("rectangle", 0, 0, 1100, 2300, 0);



  if(keyDown("m")){

    astronaut.velocityY = 1;
    astronaut.velocityX = 1;

  }

  if(keyDown(LEFT_ARROW)){
    
    astronaut.addAnimation("eating", eatImg)
    astronaut.changeAnimation("eating", eatImg);
    
    astronaut.y = 300;
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("Bathing", bathImg)
    astronaut.changeAnimation("Bathing", bathImg);
    
    astronaut.x = 100;
    astronaut.y = 250
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("Brushing", brushImg)
    astronaut.changeAnimation("Brushing", brushImg);
    
    astronaut.y = 250;
    astronaut.x = 350
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown(DOWN_ARROW)){

    astronaut.addAnimation("gym", gym2Img);
    astronaut.changeAnimation("gym", gym2Img);
   
    astronaut.y = 200;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }



  
  
  
  drawSprites();

  textSize(18);
  fill("white")
  text("Instructions:", 10, 15);
  text("Up arrow: Brushing", 10, 35);
  text("Down arrow: Gym time", 10, 55);
  text("Left arrow: Eating", 10, 75);
  text("Right arrow: Bathing", 10, 95);
  fill("black")
  text("m key: Moving", 10, 115);

}