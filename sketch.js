const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world;
var gamestate="start";
var button,buttonImage,bg,bgImage,basket1Image,basket2Image,chestImage,enemyImage,goldImage,playerImage,swordImage,sword2Image;
var howToButton,howToButtonImage,storyButton
var ocean,ocean2;
var backButton;
var enemy,enemyGroup;
var sword,swordGroup;
var gold,goldGroup;
var whooshSound;
var splashSound;
var goldSound;
var score=0;
var goldCount=0;
var cooldown=3;
var food=30;
var motherShip;
var motherHealth;
var health1,health2,health3,health4,health5,health6;
var motherHealthCount=6;


function preload(){
buttonImage=loadImage("images/play.gif");
bgImage=loadImage("images/Blue Background 2.jpg");
basket1Image=loadImage("images/Basket.png");
basket2Image=loadImage("images/Basket2.png");
chestImage=loadImage("images/chest.png");
enemyImage=loadImage("images/Enemy.png");
goldImage=loadImage("images/gold.png");
playerImage=loadImage("images/Player.png");
swordImage=loadImage("images/sword.png");
sword2Image=loadImage("images/sword2.png");
howToButtonImage=loadImage("images/button.png");
whooshSound=loadSound("sounds/whoosh sound.flac")
splashSound=loadSound("sounds/splashSound.wav")
goldSound=loadSound("sounds/goldCollectSound.wav");
health1=loadImage("images/health1.PNG");
health2=loadImage("images/health2.PNG");
health3=loadImage("images/health3.PNG");
health4=loadImage("images/health4.PNG");
health5=loadImage("images/health5.PNG");
health6=loadImage("images/health6.PNG");

}

function setup(){
 createCanvas(displayWidth,displayHeight);
 //world=engine.world;
 
 //button.debug=true;



 
swordGroup= new Group();
enemyGroup=new Group();
goldGroup=new Group();

start = new Start();
  gameState = new GameState();
  howToPlay = new Tutorial();
}

function draw(){
    background(180);
    //Engine.update(engine);
    drawSprites();

    if(gamestate==="start"){
      start.display();  
      howToPlay.howToButton();
      
    
      
     }

    if(gamestate==="howToPlay"){
      howToPlay.display();
      howToPlay.back();
    }
     
   

    if(gamestate==="play"){
        spawnEnemy();
        spawnGold();

        if(frameCount%7===0){
          cooldown=cooldown-1;
          

        }
        if(frameCount%17===0){
          food=food-1;
          

        }


        if(goldCount===20){
          motherHealth.visible=true;
motherShip.y=300
motherShip.velocityX=5;



         

        }
        if(swordGroup.isTouching(motherShip)){
          motherHealthCount=motherHealthCount-1
          swordGroup[0].destroy();
        }

        if(motherHealthCount===5){
          motherHealth.addImage("health",health2);

        }
        if(motherHealthCount===4){
          motherHealth.addImage("health",health3);

        }
        if(motherHealthCount===3){
          motherHealth.addImage("health",health4);

        }
        if(motherHealthCount===2){
          motherHealth.addImage("health",health5);

        }
        if(motherHealthCount===1){
          motherHealth.addImage("health",health6);

        }
        if(motherHealthCount===0){
          gamestate="win"

        }
        if(food===0){
          gamestate="lose"

        }

        if(motherShip.x<100){
        motherShip.velocityX=+5
          
        }
        if(motherShip.x>displayWidth-100){
            motherShip.velocityX=-5
          
        }
       

        ocean.visible=true;
        ocean2.visible=true;
        ocean.velocityY=5;
        ocean2.velocityY=5;
        
        fill("black")
        textSize(24);
        text("Score:"+score,displayWidth/2-800,100);
        fill("black")
        textSize(24);
        text("Gold:"+goldCount,displayWidth/2-800,150);
        fill("black")
        textSize(24);
        text("Food:"+food,displayWidth/2-800,200);
        fill("black")
        textSize(24);
        text("Food:"+motherHealthCount,displayWidth/2-800,250);
     
       // sword.setCollider()
        if(keyDown("space")&& cooldown<0){
          shootSword();
          whooshSound.play();
          cooldown=3;
        }

        
       
        
        if(keyDown("left")){
          player.x=player.x-5

        }
        if(keyDown("right")){
          player.x=player.x+5

        }

        if(player.x>displayWidth||player.x<0){
          player.x=displayWidth/2


        }

        if(ocean.y>displayHeight+625){
            ocean.y=displayHeight/-2;

        }
        if(ocean2.y>displayHeight+625){
            ocean2.y=displayHeight/-2;

        }
        if(swordGroup.isTouching(enemyGroup)){
         //sword.destroy();
         // swordGroup[0].remove();
          //enemy.destroy();
          //enemyGroup[0].remove();
          //swordGroup.setVelocityYEach(1);
          //enemyGroup[0].setLifetimeEach(0);
          collision();


          score=score+10;
          splashSound.play();
          food=food+5

          
        }

        if(goldGroup.isTouching(player)){
          goldGroup[0].destroy();
          goldCount=goldCount+10;
          goldSound.play();

        }

        player.visible=true;
        
        button.destroy();
        howToButton.destroy();

    }
    if(gamestate==="howTo"){
        button.x=displayWidth/4-200;

        
        howToButton.visible=false;
       backButton.visible=true;
       
        textSize(40);
        fill("white")
        stroke("black")
        text("Back",displayWidth/4-250,displayHeight/2+200);

        textSize(40);
        fill("white")
        stroke("black")
        text("Story",displayWidth/3,displayHeight/3);
        textSize(24);
        fill("white")
        stroke("black")
        text("You  are an explorer from your country in the 19th century. You have been tasked to set out into the seas",displayWidth/3,displayHeight/3+50);
        textSize(24);
        fill("white")
        stroke("black")
        text("to find land and treasure. However, you are running low on food to feed your crew.",displayWidth/3,displayHeight/3+80);
        textSize(24);
        fill("white")
        stroke("black")
        text("Journey into the ovean while watching your food, fighting off pirates, and collecting shiny gold!",displayWidth/3,displayHeight/3+110);
        
        textSize(40);
        fill("white")
        stroke("black")
        text("How to Play",displayWidth/3,displayHeight/3+200);
        textSize(24);
        fill("white")
        stroke("black")
        text("Move your ship left and right with the arrow keys",displayWidth/3,displayHeight/3+230);
        textSize(24);
        fill("white")
        stroke("black")
        text("Collect food  by killing pirates to increase food count, which will decrease over time.",displayWidth/3,displayHeight/3+260);
        textSize(24);
        fill("white")
        stroke("black");
        text("Shooting down pirates will help you progress!",displayWidth/3,displayHeight/3+320);
        textSize(24);
        fill("white")
        stroke("black")
        text("Power-ups will spawn occasionnaly. Collect them for a powerful boost!",displayWidth/3,displayHeight/3+350);
        if(mousePressedOver(button)){
            gamestate="play";
            button.debug=true;
          }
          if(mousePressedOver(backButton)){
            gamestate="start"

          }
           if(mousePressedOver(storyButton)){
             gamestate="story";
            
           }

    }
    if(gamestate==="win"){
     
        motherShip.visible=false;
        motherHealth.visible=false;
        player.visible=false;
        ocean.visible=false;
        ocean2.visible=false;
        sword.visible=false;
        goldGroup.lifetime=0;
        enemyGroup.lifetime=0;




      textSize(40);
      fill("white")
      stroke("black")
      text("YOU WIN",displayWidth/2,displayHeight/2);
    }

    if(gamestate==="lose"){
     
      motherShip.visible=false;
      motherHealth.visible=false;
      player.visible=false;
      ocean.visible=false;
      ocean2.visible=false;
      sword.visible=false;
      goldGroup.lifetime=0;
      enemyGroup.lifetime=0;




    textSize(40);
    fill("white")
    stroke("black")
    text("GAME OVER",displayWidth/2,displayHeight/2);
  }
   

   
}
function spawnEnemy(){
  if(goldCount>20){
    enemy.velocityY=7

  }
  if(frameCount%60===0){
    enemy=createSprite(Math.round(random(100,displayWidth-100)),50);
    enemy.addImage("enemy",enemyImage);
    enemy.debug=false;
    enemy.velocityY=+5;
    enemyGroup.add(enemy);
    enemy.scale=2.5;
    enemy.setCollider("rectangle",-3,0,25,50);
    
  }
}
function shootSword(){
  sword=createSprite(20,displayHeight/2+200);
  sword.addImage("sword",swordImage);
  sword.scale=0.3
  sword.visible=true;
  swordGroup.add(sword);
  sword.x=player.x
  
 
  sword.debug=true;

sword.velocityY=-5;
}

function spawnGold(){
if(frameCount%100==0){
gold=createSprite(Math.round(random(100,displayWidth-100)),50);
gold.addImage("gold",goldImage);
gold.debug=true;
gold.velocityY=5;
gold.scale=0.5;
goldGroup.add(gold);





}

}
function collision() {
if(sword!=null){
  var distance=dist(swordGroup[0].x,swordGroup[0].y,enemyGroup[0].x,enemyGroup[0].y);
  if(distance<=100){
    swordGroup[0].lifetime=0;
    enemyGroup[0].lifetime=0;

  }
  

}

}

function gameStateBackToStartFromTutorial(){
  if(){

  }

}

