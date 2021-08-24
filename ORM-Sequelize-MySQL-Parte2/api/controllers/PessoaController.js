const database = require('../models')

class PessoaController{

    
    static async pegarPessoasAtivas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarTodasAsPessoas(req, res){
        try {
            const pessoasAtivas = await database.Pessoas.scope('todos').findAll()
            return res.status(200).json(pessoasAtivas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async buscarID(id){
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return umaPessoa
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarUmaPessoa(req, res){
        const {id} = req.params
        try{
            const buscar = await PessoaController.buscarID(id)
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
            
            const mostrarATT = await PessoaController.buscarID(id)

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
                    id: Number(id)
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

    static async restaurarPessoa(req, res){
        const {id} = req.params
        try {
            const restaurar = await database.Pessoas.restore({
                where: {id: Number(id)}
            })
            if (restaurar){
                return res.status(200).json(`ID da Pessoa ${id} restaurado`)
            } else{
                return res.status(400).json(`ID da Pessoa ${id} não restaurado`)
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarUmaMatricula(req, res){
        const {estudanteID, matriculaID} = req.params
        try{
            const buscar = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaID),
                    estudante_id: Number(estudanteID)
                }
            })
            return res.status(200).json(buscar)    
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarTodasAsMatriculas(req, res){
        const {estudanteID} = req.params
        try {
            const todasAsMatriculas = await database.Matriculas.findAll({
                where: {
                    estudante_id: Number(estudanteID)
                }
            })
            return res.status(200).json(todasAsMatriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarMatriculasConfirmadas(req, res){
        const {estudanteID} = req.params
        try {
            const matriculasConfirmadas = await database.Pessoas.findOne({
                where: {
                    id: Number(estudanteID)
                }
            })
            const matriculado = await matriculasConfirmadas.getAulasMatriculadas()
            return res.status(200).json(matriculado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarMatriculasPorTurma(req, res){
        const {turmaID} = req.params
        try {
            const turma = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: turmaID,
                    status: 'confirmado'
                },
                limit: 20,
                order: [['estudante_id', 'ASC']]
            })
            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarMatricula(req, res){
        const {estudanteID} = req.params
        const novaMatricula = {...req.body, estudante_id: Number(estudanteID)}
        try {
            const Matriculado = await database.Matriculas.create(novaMatricula)
            return res.status(201).json(Matriculado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula(req, res){
        try {
            const infos = req.body
            const {estudanteID, matriculaID} = req.params
            await database.Matriculas.update(infos, {
                where: {
                    id: Number(matriculaID),
                    estudante_id: Number(estudanteID)
                }
            })
            const mostrarATT = await database.Matriculas.findOne({
                where: {
                    id: matriculaID
                }
            })
            return res.status(200).json(mostrarATT)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async excluirMatricula(req, res){
        const {estudanteID, matriculaID} = req.params
        try {
            const destruir = await database.Matriculas.destroy({
                where: {
                    id: matriculaID,
                    estudante_id: estudanteID
                }
            })
            if (destruir){
                return res.status(200).json(`ID da Matricula ${matriculaID} deletado`)
            } else{
                return res.status(400).json(`ID da Matricula ${matriculaID} não encontrado`)
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarMatricula(req, res){
        const {estudanteID, matriculaID} = req.params
        try {
            const restaurar = await database.Matriculas.restore({
                where: {
                    id: Number(matriculaID),
                    estudante_id: Number(estudanteID)
                }
            })
            if (restaurar){
                return res.status(200).json(`ID da Matricula ${matriculaID} restaurado`)
            } else{
                return res.status(400).json(`ID da Matricula ${matriculaID} não restaurado`)
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController