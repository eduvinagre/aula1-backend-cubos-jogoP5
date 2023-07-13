let personagem
let grama

let tamanho = 64
let velocidade = 64

let andarX = 0
let andarY = 0

let botao



function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png')
  grama = loadImage('grama.png')
}

function draw() {
  background(220);
  
  if(andarX < 0){
    andarX = 0
  }
  
  if(andarY < 0) {
    andarY = 0
  }
  
  if(andarX > tamanho*8){
    andarX = tamanho*8
  }
  
  if(andarY > tamanho*8) {
    andarY = tamanho*8
  }
  
  for (let x = 0; x <= 9; x++){
    for (let y = 0; y <= 9; y++){
      image(grama, 64*x, 64*y, tamanho, tamanho)
    }
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === tamanho*8 && andarY === tamanho*8){
    //criar um retangulo
    rect(160, 160, 256, 256)
    //escrever um texto GANHOU
    textSize(35)
    text('GANHOU!', 200, 300)
    //criar um botao
    botao = createButton('Reiniciar')
    //resetar o jogo
    botao.mousePressed(reset)
    botao.position(255, 340)
    //parar jogo
    noLoop()                        
  }
  
  // text(`x:${andarX} y:${andarY}`, 500, 500)
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

//executa sempre que uma tecla for pressionada
function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    andarY -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
}
