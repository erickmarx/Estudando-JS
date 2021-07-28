// const turma1 = [7,8,8,7,10]
// const turma2 = [6,5,8,9]
// const turma3 = [7,3,8,9]

// function mediaSala(notas){
//     const somaDasNotas = notas.reduce((acum, atual) => atual + acum, 0)
//     return somaDasNotas/notas.length
// }

// console.log(mediaSala(turma1))


const notas = [10,6.5,8,7]

const media = notas.reduce((x, y) => y + x, 0) / notas.length

console.log(media)