const Services = require('./Services')
const database = require('../models')

class MatriculasServices extends Services{
    constructor(){
        super('Matriculas')
    }

    async pegarUmaMatricula(estudanteID, matriculaID){
        return super.pegarUmRegistro({where: {id: Number(matriculaID), estudante_id: Number(estudanteID)}})
    }

    async PegarMatriculas(estudanteID){
        return super.pegaTodosOsRegistros({where: {estudante_id: Number(estudanteID)}})
    }

    async matriculasConfirmadas(estudanteID){
        return super.pegaTodosOsRegistros({where: {estudante_id: Number(estudanteID), status: 'confirmado'}})
    }

    async matriculasPorTurma(turmaID){
        return super.pegaTodosOsRegistros({where: {turma_id: Number(turmaID), status: 'confirmado'}})
    }

    async criarMatricula(novaMatricula){
        return super.criarUmRegistro(novaMatricula)
    }

    async atualizarMatricula(infos, estudanteID, matriculaID){
        await database.sequelize.transaction(async transacao => {
            await super.atualizarRegistro(infos, matriculaID, {estudante_id: estudanteID}, {transaction: transacao})
        })
        return super.pegarUmRegistro({id: matriculaID})
    }

    async softDeleteMatricula(estudanteID, matriculaID){
        return super.excluirUmRegistro({estudante_id: estudanteID, id: matriculaID})
    }
}

module.exports = MatriculasServices


// async TurmasLotadas(maximo){
//     return super.pegarEContarRegistros({where: 
//         {status: 'confirmado'},
//         attributes: ['turma_id'],
//         group: ['turma_id'],
//         having: sequelize.literal(`count(turma_id) >= ${maximo}`)})
// }