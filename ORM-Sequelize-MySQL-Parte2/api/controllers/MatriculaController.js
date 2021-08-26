const {MatriculasServices} = require('../services')
const matriculasServices = new MatriculasServices()

class MatriculaController{

    static async pegarUmaMatricula(req, res){
        const {estudanteID, matriculaID} = req.params
        try {
            const matricula = await matriculasServices.pegarUmRegistro({where: {id: Number(matriculaID), estudante_id: Number(estudanteID)}})
            return res.status(200).json(matricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async pegarTodasAsMatriculas(req, res){
        const {estudanteID} = req.params
        try {
            const matriculas = await matriculasServices.mostrarTodosRegistros({where: {estudante_id: Number(estudanteID)}})
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async pegarMatriculasConfirmadas(req, res){
        const {estudanteID} = req.params
        try {
           const matriculado = await matriculasServices.mostrarTodosRegistros({where: {estudante_id: Number(estudanteID), status: 'confirmado'}})
            return res.status(200).json(matriculado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegarMatriculasPorTurma(req, res){
        const {turmaID} = req.params
        try {
           const confirmado = await matriculasServices.mostrarTodosRegistros({where: {turma_id: Number(turmaID), status: 'confirmado'}})
            return res.status(200).json(confirmado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
        
    static async criarNovaMatricula(req, res){
        const {estudanteID} = req.params
        const novaMatricula = {...req.body, estudante_id: Number(estudanteID)} 
        try {
            const matriculado = await matriculasServices.criarUmRegistro(novaMatricula)

            return res.status(201).json(matriculado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarUmaMatricula(req, res){
        const infos = req.body
        const {estudanteID, matriculaID} = req.params
        try {
            const feito = await matriculasServices.atualizarMatricula(infos,estudanteID, matriculaID)
            return res.status(200).json(feito)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async excluirMatricula(req, res){
        const {estudanteID , matriculaID} = req.params
        try {
            const destruir = await matriculasServices.excluirUmRegistro({estudante_id: estudanteID, id: matriculaID})

            return destruir ? res.status(200).json(`ID da Matricula ${matriculaID} softdeleted`) : res.status(400).json(`ID da Matricula ${matriculaID} não encontrado`) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async restaurarMatricula(req, res){
        const {estudanteID, matriculaID} = req.params
        try {
            const restaurar = await matriculasServices.restaurarUmRegistro({estudante_id: estudanteID, id: matriculaID})

            return restaurar ? res.status(200).json(`ID da Matricula ${matriculaID} restaurado`) : res.status(400).json(`ID da Matricula ${matriculaID} não encontrado`) 

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MatriculaController


    // static async pegarTurmasLotada(req, res){
    //     const maximo = 2
    //     try {
    //         const lotadas = await matriculasServices.TurmasLotadas(maximo)
    //          return res.status(200).json(lotadas.count)
    //      } catch (error) {
    //          return res.status(500).json(error.message)
    //      }
    // }
    
    // static async pegarTurmasLota(req, res){
    //     // const {matriculaID} = req.params
    //     const maximo = 2
    //     try {
    //         const turmasLotadas = await database.Matriculas
    //         .findAndCountAll({
    //             where: {
    //                 status: 'confirmado'
    //             },
    //             attributes: ['turma_id'],
    //             group: ['turma_id'],
    //             having: sequelize.literal(`count(turma_id) >= ${maximo}`)
    //         })
    
    //         return res.status(200).json(turmasLotadas.count)
    //     } catch (error) {
    //         return res.status(500).json(error.message)
    //     }
    // }
    
    