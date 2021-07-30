//collideRectRect(x, y, width, height, x2, y2, width2, height2 )

function collisionActor(){
  for(i = 0; i < ycarsArray.length; i++){
  if(collideRectRect(xcarsArray[i], ycarsArray[i], 25, 40, actorArray[0], actorArray[1], 30, 30)){
    actorArray[1] = 560
  }
}
}