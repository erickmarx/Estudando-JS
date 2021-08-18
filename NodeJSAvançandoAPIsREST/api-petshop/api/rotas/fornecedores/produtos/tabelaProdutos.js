const Modelo = require('./modeloTabelaProduto')

module.exports = {
    listar(idFornecedor){
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            }
        })
    },

    inserir(dados){
        return Modelo.create(dados)
    },
    
    deletar(idProduto, idFornecedor){
        return Modelo.destroy({
            where: {
                id: idProduto,  
                fornecedor: idFornecedor
            }
        })
    },

    carregarUmProduto(idProduto, idFornecedor){
        const encontrado = Modelo.findOne({
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            }
        })
        if(!encontrado){
            throw new Error('Produto não encontrado')
        }

        return encontrado
    }
}