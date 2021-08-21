const database = require('../models')

class TurmaController{
    static async pegarTodasAsTurmas(req, res){
        try {
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
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

    static async atualizarPessoa(req, res){
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
}

module.exports = TurmaController