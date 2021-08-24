const database = require('../models')
const Op = require('Sequelize').Op
class TurmaController{
    static async pegarTodasAsTurmas(req, res){
        const {dataInicial, dataFinal}= req.query
        const where = {}
        dataInicial || dataFinal ? where.data_inicio = {} : null
        dataInicial ? where.data_inicio[Op.gte] = dataInicial : null 
        dataFinal ? where.data_inicio[Op.lte] = dataFinal : null
        try {
            const todasAsTurmas = await database.Turmas.findAll({where})
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // static async pegarTodasAsTurmas(req, res){
    //     try {
    //         const todasAsTurmas = await database.Turmas.findAll()
    //         return res.status(200).json(todasAsTurmas)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }

    static async buscarID(id){
        try {
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return umaTurma
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarUmaTurma(req, res){
        const {id} = req.params
        try{
            const buscar = await TurmaController.buscarID(id)
            return res.status(200).json(buscar)    
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarTurma(req, res){
        try {
            const infos = req.body
            const novoTurma = await database.Turmas.create(infos)
            
            return res.status(201).json(novoTurma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarTurma(req, res){
        try {
            const infos = req.body
            const {id} = req.params
            
            await database.Turmas.update(infos, {
                where: {
                    id: Number(id)
                }
            })
            
            const mostrarATT = await TurmaController.buscarID(id)

            return res.status(200).json(mostrarATT)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirTurma(req, res){
        const {id} = req.params
        try {
            const destruir = await database.Turmas.destroy({
                where: {
                    id: id
                }
            })
            
            if (destruir){
                return res.status(200).json(`ID ${id} deletado`)
            } else{
                return res.status(400).json(`ID ${id} não encontrado`)
            }
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarTurma(req, res){
        const {id} = req.params
        try {
            const restaurar = await database.Turmas.restore({
                where: {id: Number(id)}
            })
            if (restaurar){
                return res.status(200).json(`ID da Turma ${id} restaurado`)
            } else{
                return res.status(400).json(`ID da Turma ${id} não restaurado`)
            }
        }
         catch (error) {
            return res.status(500).json(error.message)
            }
        }
}

module.exports = TurmaController