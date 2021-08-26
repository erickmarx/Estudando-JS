const {PessoasServices} = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController{

    static async pegarPessoasAtivas(req, res){
        try {
            const todasAsPessoas = await pessoasServices.pegarRegistrosAtivos()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarTodasAsPessoas(req, res){
        try {
            const pessoasAtivas = await pessoasServices.pegarTodosOsRegistros()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async pegarUmaPessoa(req, res){
        const {estudanteID} = req.params
        try {
            const pessoa = await pessoasServices.pegarTodosOsRegistros({id: Number(estudanteID)})
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarPessoa(req, res){
        const infos = req.body
        try {
            const criado = await pessoasServices.criarUmaPessoa(infos)
            return res.status(200).json(criado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async cancelaPessoa(req, res){
        const {estudanteID} = req.params
        try {
            await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteID))
            return res.status(200).json('cancelado')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async atualizarPessoa(req, res){
        try {
            const infos = req.body
            const {id} = req.params
            await pessoasServices.atualizarRegistro(infos, id)
            return res.status(200).end()
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
        
    static async excluirPessoa(req, res){
        const {estudanteID} = req.params
        try {
            await pessoasServices.softDeletePessoa(estudanteID)
            return res.status(200).json('Soft Deleted')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarPessoa(req, res){
        try {
            const {estudanteID} = req.params
            // console.log(estudanteID)
            await pessoasServices.restaurarPessoaEMatricula(Number(estudanteID))
            return res.status(200).json('Restaurado')
        } catch (error) {
            return res.status(500).json(error.message)
        }    
    }
    
}

module.exports = PessoaController