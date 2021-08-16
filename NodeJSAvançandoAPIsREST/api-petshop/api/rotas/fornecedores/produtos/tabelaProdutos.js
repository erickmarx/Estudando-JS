const Modelo = require('./modeloTabelaProduto')

module.exports = {
    listar(idFornecedor){
        return Modelo.findAll({
            where: {
                id: idFornecedor
            }
        })
    }
}