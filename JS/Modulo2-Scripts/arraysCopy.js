const notas = [10, 6.5, 8, 7.5]
// let media = 0
for(let i = 0; i < notas.length; i++){
    let media = media + notas[i]
}
media = media/(notas.length)
console.log(media)