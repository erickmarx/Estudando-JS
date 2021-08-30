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

const cliente = new Cliente('foo', '12312312312', 'email@email.com', 200)
cliente.depositar(30)
cliente.exibirSaldo()