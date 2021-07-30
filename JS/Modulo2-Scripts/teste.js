function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let speedArray = [1,1,1,1,1,1]
for(let i = 0; i < 5; i++){
    speedArray.splice(i,1,getRandomInt(2,6))
}

let xcarsArray = [750, 750, 750, 750, 750, 750]
let ycarsArray = [70, 155, 235, 325, 405, 485]



for(i = 0; i < xcarsArray.length; i++){
    xcarsArray[i] -= speedArray[i]
    console.log(xcarsArray[i] -= speedArray[i])}
    console.log(speedArray)



    rect(44, 559, 30, 30)