let xcarsArray = [750, 750, 750, 750, 750, 750]
let ycarsArray = [70, 155, 235, 325, 405, 485]
let speedArray = [1,1,1,1,1,1]

function getRandomInt(min, max) { //random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function changeSpeed(){ //Mudar speed para random
for(i = 0; i < speedArray.length; i++){
  speedArray.splice([i],1,getRandomInt(6,12))
  }
}

changeSpeed()

// console.log(speedArray)
function showCars(){ //mostrar carros
  for(i = 0; i < ycarsArray.length; i++){
    image(imageCarsArray[i], xcarsArray[i], ycarsArray[i], 50, 40)
  }
}


function movCars(){ //movimento dos carros
  for(i = 0; i < xcarsArray.length; i++){
    xcarsArray[i] -= speedArray[i]
    xcarsArray[i] < -50 ? xcarsArray[i] = 800 : 0
    }
  }