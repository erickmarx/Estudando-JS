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
    }],
    saldo: 200,
    depositar: function(valor){
        this.saldo += valor
        return this.saldo
    }
}

console.log(Cliente.depositar(30))