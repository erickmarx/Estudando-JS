const Modelo = require('./modeloTabelaFornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado')

module.exports = {
    listar(){
        return Modelo.findAll({raw: true})
    },

    inserir(fornecedor){
        return Modelo.create(fornecedor)
    },

    async buscarID(id){
        const encontrado = await Modelo.findOne({
            where: {id: id}
        })
        if(!encontrado){
            throw new NaoEncontrado('Fornecedor')
        }

        return encontrado
    },

    atualizar(id, dados){
        return Modelo.update(
            dados,
            {
                where: {id: id}
            }
        )
    },

    remover(id){
        return Modelo.destroy({
            where: {id: id}
        })
    }
}