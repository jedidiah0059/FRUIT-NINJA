var PLAY = 1;
var END = 0;

var gameState = PLAY;

var backgroundb1, backgroundb2, backgroundbImage1, backgroundbImage2;

var sword, swordImage;

var fruit1, fruit2 ,fruit3, fruit4, fruit1Image, fruit2Image ,fruit3Image, fruit4Image, fruit1Group, fruit2Group, fruit3Group, fruit4Group;

var enemies1, enemies2, enemiesImage1, enemiesImage2;

var gameover, gameoverImage, gameoverAudio;

var slice;

var score = 0;

var tex;

function preload(){
  backgroundbImage1 = loadImage("kitchen.jpg");
  backgroundbImage2 = loadImage("backgroundboard2.png");
  swordImage = loadImage("sword.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  enemiesImage1 = loadImage("alien1.png");
  enemiesImage2 = loadImage("alien2.png");
  gameoverImage = loadImage("gameover.png");
  gameoverAudio = loadSound("gameOver.m4a");
  slice = loadSound("slice.m4a");
}

function setup(){
  createCanvas(600, 600);
  
  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();
  enemiesGroup1 = new Group();
  enemiesGroup2 = new Group();
  
  backgroundb1 = createSprite(300,300, 10, 10);
  backgroundb1.addImage("backgroundi", backgroundbImage1);
  backgroundb1.scale = 1;
  
  backgroundb2 = createSprite(300,300, 10, 10);
  backgroundb2.addImage("backgroundii", backgroundbImage2);
  backgroundb2.scale = 1;
  
  
  
  sword = createSprite(300,300,10,10);
  sword.addImage("knife", swordImage);
  sword.setCollider("circle", 5, -5, 40);
  //sword.debug = true;
  
  gameover = createSprite(300,500,10,10);
  gameover.addImage("gameoveri", gameoverImage);
}

function draw(){
  
  
  if(gameState === PLAY){
    
    gameover.visible = false;
    
    sword.x = mouseX;
    sword.y = mouseY;
    spawnFRUITSorENEMIES();
    
    fruit1Group.setVisibleEach(true);
    fruit2Group.setVisibleEach(true);
    fruit3Group.setVisibleEach(true);
    fruit4Group.setVisibleEach(true);
    enemiesGroup1.setVisibleEach(true);
    enemiesGroup2.setVisibleEach(true);
    
  if(sword.isTouching(fruit1Group)){    
    fruit1Group.destroyEach();
    score = score + 1;
    slice.play();
  }
  
  if(sword.isTouching(fruit2Group)){
    fruit2Group.destroyEach();
    score = score + 2;
    slice.play();
  }
  
  if(sword.isTouching(fruit3Group)){
    fruit3Group.destroyEach();
    score = score + 3;
    slice.play();
  }
  
  if(sword.isTouching(fruit4Group)){
    fruit4Group.destroyEach();
    score = score + 4;
    slice.play();
  }
    
  if(fruit1Group.x < 0){
    score = score - 1;
  }
    
  if(fruit2Group.x < 0){
    score = score - 2;
  }
    
  if(fruit3Group.x < 0){
    score = score - 3;
  }
    
  if(fruit4Group.x < 0){
    score = score - 4;
  }
  
  if(sword.isTouching(enemiesGroup1) || sword.isTouching(enemiesGroup2)){
    gameState = END;
    gameoverAudio.play();
  }
    //if(score%4 === 0 && score!== 0){
      
    //}
    
    //if(score%10 === 0 && score !== 0){
      
    //}
  
  }
  else if(gameState === END){
    
    gameover.visible = true;
    sword.x = 300;
    sword.y = 300;
    fruit1Group.setVisibleEach(false);
    fruit2Group.setVisibleEach(false);
    fruit3Group.setVisibleEach(false);
    fruit4Group.setVisibleEach(false);
    enemiesGroup1.setVisibleEach(false);
    enemiesGroup2.setVisibleEach(false);
  }
  if(keyWentDown("r") && gameState === END){
    score = 0;
    gameState = PLAY;
  }  
  
  
  
  drawSprites();
  
  fill("black"); 
  textSize(30); 
  text("Score: " + score, 250, 50);
  
  if(gameState === END){
    text("PRESS 'R' TO RESTART", 150, 570);    
  }
}

function spawnFruit1(){
  fruit1 = createSprite(600,300,10,10);
  fruit1.addImage("fruit1", fruit1Image);
  fruit1.scale = 0.5;
  fruit1.y = Math.round(random(90,490));
  fruit1.lifetime = 150;
  fruit1Group.add(fruit1);
  console.log(fruit1.velocityX);
  
  var position1 = Math.round(random(1,2));
  
  if(position1 === 1){
    fruit1.x = 600;
    fruit1.velocityX = - (7 + (score/4));
  }
  else{
    fruit1.x = 0;
    fruit1.velocityX = (7 + (score/4));
  }
}

function spawnFruit2(){
  fruit2 = createSprite(600,300,10,10);
  fruit2.addImage("fruit2", fruit2Image);
  fruit2.scale = 0.5;
  fruit2.y = Math.round(random(90,490));
  fruit2.lifetime = 150;
  fruit2Group.add(fruit2);
  console.log(fruit2.velocityX);
  
  var position2 = Math.round(random(1,2)); 
  
  if(position2 === 1){
    fruit2.x = 600;
    fruit2.velocityX = - (7 + (score/4));
  }
  else{
    fruit2.x = 0;
    fruit2.velocityX = (7 + (score/4));
  }
}

function spawnFruit3(){
  fruit3 = createSprite(600,300,10,10);
  fruit3.addImage("fruit3", fruit3Image);
  fruit3.scale = 0.5;
  fruit3.y = Math.round(random(90,490));
  fruit3.velocityX = - (7 + (score/4));
  fruit3.lifetime = 150;
  fruit3Group.add(fruit3);
  console.log(fruit3.velocityX);
  
  var position3 = Math.round(random(1,2));
  
  if(position3 === 1){
    fruit3.x = 600;
    fruit3.velocityX = - (7 + (score/4));
  }
  else{
    fruit3.x = 0;
    fruit3.velocityX = (7 + (score/4));
  }
}

function spawnFruit4(){
  fruit4 = createSprite(600,300,10,10);
  fruit4.addImage("fruit4", fruit4Image);
  fruit4.scale = 0.3;
  fruit4.y = Math.round(random(90,490));
  fruit4.velocityX = - (7 + (score/4));
  fruit4.lifetime = 150;
  fruit4Group.add(fruit4);
  console.log(fruit4.velocityX);
  
  var position4 = Math.round(random(1,2));
  
  if(position4 === 1){
    fruit4.x = 600;
    fruit4.velocityX = - (7 + (score/4));
  }
  else{
    fruit4.x = 0;
    fruit4.velocityX = (7 + (score/4));
  }
}

function spawnEnemies1(){
  enemies1 = createSprite(600,300,10,10);
  enemies1.addImage("enemies1", enemiesImage1);
  enemies1.y = Math.round(random(90,490));
  enemies1.velocityX = - (8 + (score/10));
  enemies1.lifetime = 150;
  enemiesGroup1.add(enemies1);
  console.log(enemies1.velocityX);
}

function spawnEnemies2(){
  enemies2 = createSprite(600,300,10,10);
  enemies2.addImage("enemies2", enemiesImage2);
  enemies2.y = Math.round(random(90,490));
  enemies2.velocityX = - (8 + (score/10));
  enemies2.lifetime = 150;
  enemiesGroup2.add(enemies2);
  console.log(enemies2.velocityX);
}

function spawnFRUITSorENEMIES(){

  if(frameCount % 80 === 0){
    var rand1 = Math.round(random(1,6));
    switch(rand1){
        
      case 1:
        spawnFruit1();
        break;
        
      case 2:
        spawnFruit2();
        break;
        
      case 3:
        spawnFruit3();
        break;
        
      case 4:
        spawnFruit4();
        break;
        
      case 5:
        spawnEnemies1();
        break;
        
      case 6:
        spawnEnemies2();
        break;
        
      default:
        break;
        
    }
  }
}