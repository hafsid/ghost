var towerImg, tower;


function preload(){
  towerImg = loadImage("tower.png");
  
}

function setup(){
  createCanvas(600,600);
 
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
 
}

function draw(){
  background(0);
  
    
    drawSprites();
  
}
