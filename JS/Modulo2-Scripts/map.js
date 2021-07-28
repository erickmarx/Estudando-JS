//o retorno do map é salvo em uma nova array

const notas = [10,9,8,7,6]

const notasMap = notas.map(nota => nota == 10 ? nota : ++nota)

const notasMap1 = notas.map(nota => {
    if (nota == 10){
        nota
    } else {
        ++nota
    }
})

const notasMap2 = notas.map(function nota(nota){
    if(nota == 10){
        nota
    } else {
        ++nota
    }
})

/*
var map = Array.prototype.map;
var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
// a agora vale [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
*/

// console.log(notasMap)
// console.log(notasMap1)
// console.log(notasMap2)
console.log(notasMap3)