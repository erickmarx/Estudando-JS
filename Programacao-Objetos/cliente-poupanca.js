function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo =saldo
    this.depositar = function(valor){
        this.saldo += valor
    }   
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const teste = new ClientePoupanca("André", "12312312312", "teste@teste.com", 100, 200)

// console.log(teste)

ClientePoupanca.prototype.depositaPoup = function(valor){
    this.saldoPoup += valor
}

teste.depositaPoup(30)

console.log(teste.saldoPoup)