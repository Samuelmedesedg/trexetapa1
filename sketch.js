var trex;
var running;
var piso; pisoImagen;

function preload(){
   running = loadAnimation("trex1.png","trex3.png","trex4.png")
   pisoImagen = loadImage(ground2.png)
}

function setup(){// configuracion del juego
createCanvas(600,200);
trex =createSprite(50,160,10,30)
trex.addAnimation("corriendo",running);
trex.scale=0.5

 piso=createSprite(300,180,600,10)
 piso.shapeColor = "brown"
 piso.addImage(pisoImagen);
}

function draw(){//Dibujar
background("gray");
drawSprites();
 if(keyDown("space")){
    trex.velocityY=-10;
 }

   trex.velocityY = trex.velocityY + 0.8;
   trex.collide(piso)
}