const Modelo = require('./modeloTabelaProduto')

module.exports = {
    listar(idFornecedor){
        return Modelo.findAll({
            where: {
                fornecedor: idFornecedor
            },
            raw: true
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

    async carregarUmProduto(idProduto, idFornecedor){
        const encontrado = await Modelo.findOne({
            where: {
                id: idProduto,
                fornecedor: idFornecedor
            },
            raw: true
        })
        // console.log(encontrado)
        if(!encontrado){
            throw new Error('Produto não encontrado')
        }

        return encontrado
    }
}