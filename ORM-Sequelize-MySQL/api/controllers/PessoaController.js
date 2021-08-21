const database = require('../models')

class PessoaController{

    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarUmaPessoa(req, res){
        const {id} = req.params
       
        try {
            const buscar = await database.Pessoas.findOne({
                where: {
                    id: id
                }
            })
            return res.status(200).json(buscar)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarPessoa(req, res){
        try {
            const novaPessoa = req.body
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            
            return res.status(201).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarPessoa(req, res){
        try {
            const infos = req.body
            const {id} = req.params
            
            await database.Pessoas.update(infos, {
                where: {
                    id: Number(id)
                }
            })
            
            const mostrarATT = await database.Pessoas.findOne({
                where: {
                    id: id
                }
            })

            return res.status(200).json(mostrarATT)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async excluirPessoa(req, res){
        const {id} = req.params
        try {
            const destruir = await database.Pessoas.destroy({
                where: {
                    id: id
                }
            })

            if (destruir){
                return res.status(200).json(`ID ${id} deletado`)
            } else{
                return res.status(200).json(`ID ${id} não encontrado`)
            }
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController