const database = require('../models')

class PessoaController{
    
    static async buscarID(id){
        // console.log(id)
        const umaPessoa = await database.Pessoas.findOne({
            where: {
                id: Number(id)
            }
        })
        return umaPessoa
    }

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
        console.log(await this.buscarID(id))
        // try {
        //     const buscar = await this.buscarID(id)
        //     return res.status(200).json(buscar)
        // } catch (error) {
        //     return res.status(500).json(error.message)
        // }
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
            
            const pessoaAtualizada = this.pegarUmaPessoa(req.params)

            return res.status(200).json(pessoaAtualizada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController