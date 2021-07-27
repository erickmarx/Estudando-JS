// let num1 = 2
// let num2 = 4

// // função 1

// function soma(n1, n2) {
//     return n1 + n2
// }
// // console.log(soma(num1, num2))

// // função 2

// function multiply(n1, n2) {
//     return n1 * n2
// }
// console.log(multiply(soma(5, 20), soma(30, 5)))


// PRATICANDO ARROW FUNC

arrowSoma = (n1, n2) => {
    return n1 + n2
}

arrowMultiply = (n1, n2) => {
    return n1 * n2
}


console.log(arrowMultiply(arrowSoma(2, 1), arrowSoma(2, 1)))