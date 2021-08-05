var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage ;
var FoodGroup, obstacleGroup;
var backgroundImage;

var PLAY=1
var ENd=0;
var gameState=1;

var score;

function preload(){
  monkey_running =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","monkey_05.png","Monkey_06.png","monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  backgroundImage = loadImage("jungle.jpg")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}



function setup() {
  createCanvas(1003,550);
  
  monkey = createSprite(80,300,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;

  ground = createSprite(400,550,3600,10);
  
  
  score=0;
  
  
  obstacleGroup=createGroup();
  FoodGroup= new Group();
}


function draw() {
background(backgroundImage);
  
 if(gameState===1){
       monkey.collide(ground);

    objects();
    food();
    reset();
    survival=Math.round(frameCount/3);
   
   ground.velocityX=-10;
   if(ground.x<0){
     ground.x=ground.width/2;
     
   }
   
   if(keyDown("m")&& monkey.y>=100){
     monkey.velocityY=-12;
     
   }
   monkey.velocityY=monkey.velocityY+0.8;
  console.log("  hello"+" teacher");
   
   if(monkey.isTouching(FoodGroup)){
     score=score+1;
     FoodGroup.destroyEach();
   }
   else if(monkey.isTouching(obstacleGroup)){
    textSize(40);
    stroke("red");
    text("game over",300,300);
    gameState=0;
     

   }

 }
  if(gameState===0){
    monkey.velocity=0;
     FoodGroup.destroyEach();
     obstacleGroup.destroyEach();
    ground.velocityX = 0;
  }

  drawSprites();
  stroke("yellow");
  textSize(30);
  strokeWeight(2);
  text(" survival time : "+ survival ,370,40);
  text(" collected banana  : "+score,40,40);   
 
}

function food(){
  if(frameCount%80===0){
    var banana =createSprite(700,Math.round(random(310,330,440)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX=-10-score/2;
    banana.lifetime=60
    banana.scale=0.18;
    FoodGroup.add(banana);
  }
}
function objects(){
  if(frameCount%180===0){
    var obstacle=createSprite(700,520,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.48;
    obstacle.lifetime=60;
    obstacle.velocityX=-10-score/2;
    obstacleGroup.add(obstacle);
  }
}
function reset(){
  
  
}
