const database = require('../models')

class NivelController{
    static async pegarTodosOsNiveis(req, res){
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async buscarID(id){
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return umNivel
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarUmNivel(req, res){
        const {id} = req.params
        try{
            const buscar = await NivelController.buscarID(id)
            return res.status(200).json(buscar)    
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarNivel(req, res){
        try {
            const infos = req.body
            const novoNivelAtt = await database.Niveis.create(infos)
            
            return res.status(201).json(novoNivelAtt)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarNivel(req, res){
        try {
            const infos = req.body
            const {id} = req.params
            
            await database.Niveis.update(infos, {
                where: {
                    id: Number(id)
                }
            })
            
            const mostrarATT = await NivelController.buscarID(id)

            return res.status(200).json(mostrarATT)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirNivel(req, res){
        const {id} = req.params
        try {
            const destruir = await database.Niveis.destroy({
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

    static async restaurarNivel(req, res){
        const {id} = req.params
        try {
            const restaurar = await database.Niveis.restore({
                where: {id: Number(id)}
            })
            if (restaurar){
                return res.status(200).json(`ID do Nivel ${id} restaurado`)
            } else{
                return res.status(400).json(`ID do Nivel ${id} não restaurado`)
            }
        }
         catch (error) {
            return res.status(500).json(error.message)
            }
        }
}

module.exports = NivelController