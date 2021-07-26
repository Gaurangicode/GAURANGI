var stBg,rhymesImg,learningImg,swarImg,vyanjanImg,countingImg,alphabetsImg;
var rhymes,alphabets,counting,learning,swar,vyanjan;
var gameState=0;
var play,playImg;

function preload(){
    stBg=loadImage("IMAGES/bg1.jpg")
    rhymesImg=loadImage("IMAGES/rhymes.png")
    learningImg=loadImage("IMAGES/LEARNING.png")
    swarImg=loadImage("IMAGES/swar.png")
    vyanjanImg=loadImage("IMAGES/vyanjan.png")
    countingImg=loadImage("IMAGES/counting.PNG")
    alphabetsImg=loadImage("IMAGES/alphabets.jfif")
    playImg = loadImage("IMAGES/b3.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    rhymes = createSprite(800,200);
    rhymes.addImage(rhymesImg);
    rhymes.scale = 0.3
    rhymes.visible = false;

    learning = createSprite(width/2-3,height-250);
    learning.addImage(learningImg);
    learning.scale = 0.4
    learning.visible = false;

    swar = createSprite(width/2-100,100);
    swar.addImage(swarImg);
    swar.scale = 0.3
    swar.visible = false;

    vyanjan = createSprite(width/2-100,height-130);
    vyanjan.addImage(vyanjanImg);
    vyanjan.scale = 0.4
    vyanjan.visible = false;

    counting = createSprite(width/2+150,100);
    counting.addImage(countingImg);
    counting.scale = 0.5
    counting.visible = false;

    alphabets = createSprite(width/2+150,height-130);
    alphabets.addImage(alphabetsImg);
    alphabets.scale = 0.55
    alphabets.visible = false;

    play = createSprite(width/2-4,350)
    play.addImage(playImg)
    play.visible = true;

}

function draw(){
    if(gameState ===0){
   background(stBg)

textSize(50)
text("Hi kid ,WELCOME to ",575,100)
stroke("BLACK")
textAlign(CENTER)



textSize(50)
text("WORLD OF LEARNING",825,600)
stroke("BLACK")
textAlign(CENTER)

if(mousePressedOver(play)){
    gameState = 0
}

    drawSprites();
    }
    if(gameState ===1){

        background(stBg);

        rhymes.visible = true;
        learning.visible = true;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
    
        if(mousePressedOver(rhymes)){
            gameState = 1
        }
    
        if(mousePressedOver(learning)){
            gameState = 2
        }
    
        if(mousePressedOver(swar)){
            gameState = 3
        }
    
        if(mousePressedOver(vyanjan)){
            gameState = 4
        }
    
        if(mousePressedOver(counting)){
            gameState = 5
        }
    
        if(mousePressedOver(alphabets)){
            gameState = 6
        } 
    }
    if(gameState ===2){
        background(stBg);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = true;
        vyanjan.visible =  true;
        counting.visible = true;
        alphabets.visible =  true;
        play.visible = false;
    }
    if(gameState ===3){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;

    }
    if(gameState ===4){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;

    }
    if(gameState ===5){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;

    }
    if(gameState ===6){
        background(0);
        drawSprites();
        rhymes.visible = false;
        learning.visible = false;
        swar.visible = false;
        vyanjan.visible = false;
        counting.visible = false;
        alphabets.visible = false;
        play.visible = false;

    }
}