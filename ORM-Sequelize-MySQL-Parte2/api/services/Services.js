const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async atualizarRegistro(dadosAtualizados, id, transacao = {}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: {id: id}}, transacao)
    }

    async atualizarRegistros(dadosAtualizados, where = {}, transacao = {}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: {...where}}, transacao)
    }
}

module.exports = Services