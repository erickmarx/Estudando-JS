//fazer player 2 ter velocidade propria e não seguir o eixo Y da bolinha

let ball = [400,300,20,5,5] //X inicial, Y inicial, tamanho, X speed, Y speed
let playersArray= [250,250,10,100] //Y player1, Y player2, largura, comprimento
let pointsPlayers = [0,0] //pontos players
var foiPonto = 0 //correção de bug
function setup() {
  createCanvas(800, 600);
}


function draw(){ // chamar funções
  background(0)
  circle(ball[0], ball[1], ball[2])
  players()
  movBall()
  points()
  placar()
}


function players(){    //movimento dos players
  keyIsDown(UP_ARROW) ? playersArray.splice(0,1,playersArray[0]-5) : 0 //mover para cima o player1
  keyIsDown(DOWN_ARROW) ? playersArray.splice(0,1,playersArray[0]+5) : playersArray[0] //mover para baixo o player1
  
  playersArray[0] <= height - height ? playersArray[0] = 0 : playersArray[0] >= height - 100 ? playersArray[0] = height - 100 : 0
  
  
  if(ball[1] < 510 && ball[1] > 0) { //limitação de movimento do player 2
    playersArray.splice(1,1,ball[1]) //movimento automatico do player 2
  }


  rect(50, playersArray[0], playersArray[2], playersArray[3]) //player 1
  rect(750, playersArray[1], playersArray[2], playersArray[3]) //player 2
}
  

function movBall(){    //movimento da bolinha
  ball[0] = ball[0] + ball[3] //velocidade do X bolinha
  ball[1] = ball[1] + ball[4] //velociddade do Y bolinha
  
  if (ball[1] == height || ball[1] == height - height){
    ball.splice(4,1,ball[4]*-1)
    }
}


function points(){    //pontos
    if (foiPonto == 0){ //correção de bug
  var hitP1 = collideRectCircle(50, playersArray[0], 10, 100, ball[0], ball[1], 20) //colisão player 1
  var hitP2 = collideRectCircle(750, playersArray[1], 10, 100, ball[0], ball[1], 20) //colisão player 2
  }
  if (foiPonto == 1 && ball[0] == width/2){ //correção de bug
    foiPonto = 0
  }
  
  hitP1 ? ball.splice(3,1,ball[3]*-1) : 0 //continuação colisão player 1
  hitP2 ? ball.splice(3,1,ball[3]*-1) : 0 //continuação colisão player 2
  
  
  if (ball[0] >= width){ //ponto do lado esquerdo
    ball.splice(3,1,ball[3]*-1) //rebater bolinha
    pointsPlayers.splice(0,1,pointsPlayers[0]+1) //adicionar ponto
    foiPonto = 1 //correção de bug
  }
  
  if(ball[0] <= width - width){ //ponto do lado direito
    ball.splice(3,1,ball[3]*-1) //rebater bolinha
    pointsPlayers.splice(1,1,pointsPlayers[1]+1) //adicionar ponto
    foiPonto = 1 //correção de bug
    }
}


  function placar(){ //texto do placar
    fill(255)
    textSize(30)
    text(pointsPlayers[0], 250, 50)
    text(pointsPlayers[1], 500, 50)
  }
