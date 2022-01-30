
function preload(){
  rua1 = loadImage("path.png")
  menino1 = loadAnimation("Runner-1.png","Runner-2.png");
  //imagens pré-carregadas
}

function setup(){
  createCanvas(400,400);
  rua = createSprite(200,200)
  rua.addImage(rua1)
  menino = createSprite(200,300)
  menino.scale = 0.06
  menino.addAnimation("menino1",menino1)
  //crie sprite aqui
}

function draw() {
  background(0);
  menino.x = World.mouseX
  rua.velocityY = 5

  if(rua.y > 400 ){
    rua.y = height/2;
  }
  drawSprites();
}
