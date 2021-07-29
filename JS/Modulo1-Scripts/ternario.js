const idadeMin = 18
const idadeCliente = 16
if(idadeCliente >= idadeMin){
     console.log('cerveja')
} else {
    console.log('suco')
}

// console.log(idadeCliente >= idadeMin ? 'cerveja' : 'suco')

keyIsDown(UP_ARROW) ? playersArray.splice(1,1,playersArray[1]-5) : playersArray[1]