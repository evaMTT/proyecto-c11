var seaImg;
var shipImg1;
function preload(){
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-4.png","ship-3.png");
}


function setup(){
  createCanvas(1600,800);
  sea=createSprite(600,600)
  sea.addImage("sea",seaImg)

  //ship animation 
  ship=createSprite(1000,575,500,500)
  ship.addAnimation("ship",shipImg1)
  ship.scale=0.5;



}

function draw() {

  drawSprites();
}