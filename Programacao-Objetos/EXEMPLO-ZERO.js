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

const andre = new Cliente("foo", '12312312312', 'andre@andre.com', 100)
// console.log(andre)

const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}


// console.log(andre.hasOwnProperty("saldoPoup"))
// console.log(ju.hasOwnProperty("saldoPoup"))
// console.log(andre instanceof Cliente)
// console.log(typeof andre)
// console.log(typeof ju)
// console.log(ju instanceof ClientePoupanca)
// console.log(Function.prototype.isPrototypeOf(Cliente))
// console.log(Cliente.constructor === Function)

console.log(ju)