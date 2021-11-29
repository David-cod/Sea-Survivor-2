class Start {
    constructor(){
        this.button.createImg("images/button.png");
        this.button.position(displayWidth/2-100,displayHeight/2);
        this.button.size(100,100);
        
    }

    display(){
       

        textSize(120);
        fill("white")
        stroke("black")
        text("Sea Survivor",displayWidth/2-300,displayHeight/2-200);
        textSize(40);
        fill("white")
        stroke("black")
        text("How To Play",displayWidth/2-110,displayHeight/2+210);
        
          
        if(mousePressedOver(button)){
        gamestate="play";
        
        }

        
     
    }
}