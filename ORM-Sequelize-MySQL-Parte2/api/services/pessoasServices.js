const Services = require('./Services')
const database = require('../models')


class PessoasServices extends Services{
    constructor(){
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    async pegarTodosOsRegistros(where = {}){
        return database[this.nomeDoModelo].scope('todos').findAll({where: {...where}})
    }

    
    async cancelaPessoaEMatriculas(estudanteID){
        return database.sequelize.transaction(async transacao => {
            super.atualizarRegistro({ativo: false}, estudanteID, {transaction: transacao})
            await this.matriculas.atualizarRegistros({status: 'cancelado'}, {estudante_id: estudanteID}, {transaction: transacao})
        })
    }
}

module.exports = PessoasServices