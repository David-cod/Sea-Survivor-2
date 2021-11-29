class Tutorial{

    constructor(){
       
    }
    howToButton(){
        this.howToButton.createImg("images/button.png");
        this.howToButton.position(displayWidth/2-100,displayHeight/2-100);
        this.howToButton.size(100,100);
        
        this.howToButton.mouseClicked(gamestate==="howToPlay");

    }

    back(){
        this.backButton.createImg("images/button.png");
        this.backButton.position(displayWidth/2-200,displayHeight/2);
       this.backButton.size(100,100);

       this.backButton.mouseClicked(gamestate==="play");


    }
    
   
    display(){
       //button.x=displayWidth/4-200;
   
           
  
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
    }
   
   }