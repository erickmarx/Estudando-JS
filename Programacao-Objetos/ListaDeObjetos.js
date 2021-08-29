const Cliente = {
    nome: "teste",
    idade: "1",
    cpf: "12312312312",
    fones: ["456456456","456789456789"],
    dependentes: [{
        nome: "test1",
        parentesco: "1"
    }]
}

Cliente.dependentes.push({
    nome: "test2",
    parentesco: "2"
})


// console.log(Cliente)

const filhaMaisNova = Cliente.dependentes.filter(i => i.nome === "test2")
console.log(filhaMaisNova[0].nome)