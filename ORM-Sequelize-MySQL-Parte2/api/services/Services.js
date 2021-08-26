const database = require('../models')

class Services{
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }
    
    async mostrarTodosRegistros(where = {}){
        return database[this.nomeDoModelo].findAll({...where})
    }

    // async pegarEContarRegistros(where = {}){
    //     return database[this.nomeDoModelo].findAndCountAll({...where})
    // }


    async pegarUmRegistro(where = {}){
        return database[this.nomeDoModelo].findOne({...where})
    }
    
    async criarUmRegistro(infos){
        return database[this.nomeDoModelo].create(infos)
    }

    async atualizarRegistro(dadosAtualizados, id, where = {}, transacao = {}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: {id: id, ...where}}, transacao)
    }

    async atualizarRegistros(dadosAtualizados, where = {}, transacao = {}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: {...where}}, transacao)
    }
    

    async excluirUmRegistro(where = {}){
        return database[this.nomeDoModelo].destroy({where: {...where}})
    }

    async restaurarUmRegistro(where = {}){
        console.log({...where})
        return database[this.nomeDoModelo].restore({where: {...where}})
    }
}

module.exports = Services