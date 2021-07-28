//o retorno do map é salvo em uma nova array

const notas = [10,9,8,7,6]

const notasMap = notas.map(nota => nota == 10 ? nota : ++nota)

const notasMap1 = notas.map(nota => {
    if (nota == 10){
        nota
    } else {
        ++nota
    }
    return nota
})

const notasMap2 = notas.map(function nota(nota){
    if(nota == 10){
        nota
    } else {
        ++nota
    }
    return nota
})


// console.log(notasMap)
// console.log(notasMap1)
// console.log(notasMap2)