const Services = require('./Services')
const database = require('../models')

class MatriculasServices extends Services{
    constructor(){
        super('Matriculas')
    }


    async atualizarMatricula(infos, estudanteID, matriculaID){
        await database.sequelize.transaction(async transacao => {
            await super.atualizarRegistro(infos, matriculaID, {estudante_id: estudanteID}, {transaction: transacao})
        })
        return super.pegarUmRegistro({id: matriculaID})
    }
    async TurmasLotadas(maximo){
        return super.pegarEContarRegistros({where: 
            {status: 'confirmado'},
            attributes: ['turma_id'],
            group: ['turma_id'],
            having: database.sequelize.literal(`count(turma_id) >= ${maximo}`)})
    }
}

module.exports = MatriculasServices


