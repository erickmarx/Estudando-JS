const Services = require('./Services')
const database = require('../models')


class PessoasServices extends Services{
    constructor(){
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    async pegarRegistrosAtivos(where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}})
    }

    async pegarTodosOsRegistros(where = {}){
        return database[this.nomeDoModelo].scope('todos').findAll({where: {...where}})
    }

    async criarUmaPessoa(infos){
        return super.criarUmRegistro(infos)
    }
    
    async cancelaPessoaEMatriculas(estudanteID){
        return database.sequelize.transaction(async transacao => {
            super.atualizarRegistro({ativo: false}, estudanteID, {transaction: transacao})
            await this.matriculas.atualizarRegistros({status: 'cancelado'}, {estudante_id: estudanteID}, {transaction: transacao})
        })
    }

    async softDeletePessoa(estudanteID){
        return await super.excluirUmRegistro({id: estudanteID})
    }
    
    async restaurarPessoaEMatricula(estudanteID){
        return await super.restaurarUmRegistro({id: estudanteID})
    }
}

module.exports = PessoasServices