var score = 0;

var gameOver;

var monkey, monkey_running
var banana, bananaImage, obstacle, obstaceImage
var FoodGroup, obstacleGroup


var ground, ground_Image;

//var survivalTime = 0;



var backgnd, backgnd_Image;

var PLAY = 0;
var END = 1;
var gameState = PLAY;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png", "Monkey_09.png", "Monkey_10.png");

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");


  backgnd_Image = loadImage("jungle.jpg");
}



function setup() {
  createCanvas(600, 300);

  backgnd = createSprite(300, 150, 600, 300);
  backgnd.addImage("jungle.jpg", backgnd_Image);

  backgnd.scale = 0.7;



  ground = createSprite(300, 295, 1200, 10);
  ground.velocityX = -6;
  ground.x = ground.width / 2;




  monkey = createSprite(40, 270, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;


  
  


  foodGroup = new Group();
  obstacleGroup = new Group();

}


function draw() {
  background("lightgreen");
  
  score.depth = backgnd.depth 
  score.depth = backgnd.depth +1;
  


  if (gameState === PLAY) {
    
    

    if (keyDown("space") && monkey.y > 230) {
      monkey.velocityY = -13
      //console.log(monkey.velocityY);
    }
    monkey.velocityY = monkey.velocityY + 0.8;

    monkey.collide(ground);

    if (ground.x < 0) {
      ground.x = ground.width / 2;

    }

    if (monkey.isTouching(foodGroup)) {

      score = score + 1;
      foodGroup.destroyEach();
    }
    if (monkey.isTouching(obstacleGroup)) {
      gameState = END;
    }
    
     bananas();
    obstacles();

    drawSprites();
   
  } else  if (gameState === END) {
  
    foodGroup.setVelocityXEach = 0;
    obstacleGroup.setVelocityXEach = 0;
    
     stroke(0);
    textSize(40);
    text("GAME OVER" , 300, 150);
  }
  
  stroke(0);
    textSize(40);
    text("score:" + score, 100, 150);
    
   
}


function bananas() {

  if (frameCount % 125 === 0) {
    banana = createSprite(600, 170, 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -7;
    banana.scale = 0.1;
    banana.lifetime = 90;

    foodGroup.add(banana);
  }

}

function obstacles() {

  if (frameCount % 150 === 0) {
    obstacle = createSprite(600, 280, 10, 10);
    obstacle.velocityX = -7;
    obstacle.addImage("obstacle.png", obstaceImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;

    obstacleGroup.add(obstacle);
  }

}