class GameState{
    constructor(){
       
    }

  play(){

    ocean=createSprite(displayWidth/2,displayHeight/2);
 ocean.addImage("ocean",bgImage);
 //ocean.velocityY=5;
        
 ocean2=createSprite(displayWidth/2,displayHeight/-2);
 ocean2.addImage("ocean",bgImage);

 //ocean2.velocityY=5;
 motherHealth=createSprite(displayWidth-300,100)
motherHealth.addImage("health",health1);
motherHealth.visible=false;
  
 motherShip=createSprite(Math.round(random(200,displayWidth-200)),-300);
 motherShip.addImage("ship",enemyImage);
 motherShip.debug=false;
 motherShip.scale=6.5;
motherShip.setCollider("rectangle",-3,0,25,50);

 player=createSprite(displayWidth/2,displayHeight/2+200);
player.addImage(playerImage);
player.scale=2;

  spawnEnemy();
  spawnGold();
  //shootSword();

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
    sword.velocityY = -5;
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
  if(enemyGroup.isTouching(swordGroup)){
   //sword.destroy();
    //enemy.destroy();
    enemyGroup[0].destroy();
    enemyGroup[0].destroy();
    //swordGroup.setVelocityYEach(1);
    //enemyGroup[0].setLifetimeEach(0);
   // collision();

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

 win(){
    motherShip.visible=false;
    motherHealth.visible=false;
    player.visible=false;
    ocean.visible=false;
    ocean2.visible=false;
    //sword.visible=false;
    goldGroup.destroyEach();
    enemyGroup.destroyEach();
    swordGroup.destroyEach();

    textSize(40);
    fill("white")
    stroke("black")
    text("YOU WIN",displayWidth/2,displayHeight/2);
 }

 gameOver(){
     
    motherShip.visible=false;
    motherHealth.visible=false;
    player.visible=false;
    ocean.visible=false;
    ocean2.visible=false;
    //sword.visible=false;
    goldGroup.destroyEach();
    enemyGroup.destroyEach();
    swordGroup.destroyEach();

    textSize(40);
    fill("white")
    stroke("black")
    text("GAME OVER",displayWidth/2,displayHeight/2);
 }

}