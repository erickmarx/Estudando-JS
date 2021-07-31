//collideRectRect(x, y, width, height, x2, y2, width2, height2 )
let hit
function collisionActor(){
  for(i = 0; i < ycarsArray.length; i++){
  hit = (collideRectRect(xcarsArray[i], ycarsArray[i]+10, 25, 30, actorArray[0], actorArray[1], 30, 30))
    if(hit){
    actorArray[1] = 560
  }
}
}