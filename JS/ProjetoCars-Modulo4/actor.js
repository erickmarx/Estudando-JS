
let actorArray = [1, 560] // X, Y
actorArray[0] = getRandomInt(100, 700)
let limitMap = [0, 770, 560] //Parede esquerda, parede direita, parede de baixo

function showActor(){
  image(imageActor, actorArray[0], actorArray[1], 30, 30) // image, x, y, tamanhos
}

function movActor(){
  keyIsDown(UP_ARROW) ? actorArray.splice(1,1,actorArray[1]-5) : actorArray[1]
  keyIsDown(DOWN_ARROW) ? actorArray.splice(1,1,actorArray[1]+5) : actorArray[1]
  keyIsDown(RIGHT_ARROW) ? actorArray.splice(0,1,actorArray[0]+5) : actorArray[0]
  keyIsDown(LEFT_ARROW) ? actorArray.splice(0,1,actorArray[0]-5) : actorArray[0]
}

function limitActor(){
  actorArray[0] <= limitMap[0] ? actorArray[0] = limitMap[0] : actorArray[0] >= limitMap[1] ? actorArray[0] = limitMap[1] : actorArray[1] >= limitMap[2] ? actorArray[1] = limitMap[2] : 0
  

  // console.log(actorArray[1])
}