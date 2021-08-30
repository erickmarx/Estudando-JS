function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo =saldo
    this.depositar = function(valor){
        this.saldo += valor
    }   
}

const foo = new Cliente("André", "12312312312", "teste@teste.com", 100)

foo.depositar(30)


console.log(foo)