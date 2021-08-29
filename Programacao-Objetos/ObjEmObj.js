const Cliente = {
    nome: "teste",
    idade: "1",
    cpf: "12312312312",
    fones: ["456456456","456789456789"],
}

Cliente.dependentes = {
    nome: "test1",
    parentesco: "1"
}

Cliente.dependentes.nome = "teste11"

console.log(Cliente)