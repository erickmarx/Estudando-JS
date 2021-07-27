//arrow sem bloco
    const arrowFunc1 = () => `meu nome é ${nome}`


// arrow em bloco
    const arrowFunc2 = (num1, num2) => {
        if (num2 > 10) {
            return 'maior que 10'
        } else {
            return num1+num2
        }
    }
    console.log(arrowFunc2(1, 2))