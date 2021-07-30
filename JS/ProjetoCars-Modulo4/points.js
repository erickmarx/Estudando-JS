let pontos = 0

function points(){
  if(actorArray[1] <= 0){
    actorArray[1] = 560
    pontos += 1
  }
  
  fill(0,0,255)
  rect(44, 559, 30, 30)
  fill(255)
  textSize(32)
  text(pontos, 50, 585)
    }
  