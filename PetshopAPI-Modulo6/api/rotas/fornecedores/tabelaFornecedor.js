const Modelo = require('./modelo-tabela-fornecedor')

module.exports = {
    listar(){
        return Modelo.findAll()
    }
}