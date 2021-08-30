class Cliente{
    constructor(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo =saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoup){
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }

    exibirSaldoPoup(){
        console.log(this.saldoPoup)
    }
}

const foo = new ClientePoupanca('foo', '12312312312', 'email@email.com', 200, 100)

foo.depositarPoup(30)
foo.depositar(30)
foo.exibirSaldo()
foo.exibirSaldoPoup()