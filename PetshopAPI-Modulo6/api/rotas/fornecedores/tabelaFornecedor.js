const Modelo = require('./modelo-tabela-fornecedor')


module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir(fornecedor){
        return Modelo.create(fornecedor)
    }
}