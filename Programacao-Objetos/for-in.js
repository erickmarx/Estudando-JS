const Cliente = {
    nome: "teste",
    idade: "1",
    cpf: "12312312312",
    fones: ["456456456","456789456789"],
    dependentes: [{
        nome: "test1",
        parentesco: "1"
    },
    {
        nome: "test2",
        parentesco: "2"  
    }]
}

let relatorio = ""

for (let i in Cliente){
    if(typeof Cliente[i] === 'object' || typeof Cliente === 'function'){
        continue
    }else{
        relatorio += `${i}: ${Cliente[i]}
`
    }
}

console.log(relatorio)