const Modelo = require('./modeloTabelaFornecedor')

module.exports = {
    listar(){
        return Modelo.findAll()
    },

    inserir(fornecedor){
        return Modelo.create(fornecedor)
    },

    async buscarID(id){
        const encontrado = await Modelo.findOne({
            where: {id: id}
        })
        if(!encontrado){
            throw new Error('Fornecedor não encontrado')
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
    }
}