const {Router} = require('express')
const router = Router()
const MatriculaController = require('../controllers/MatriculaController')

router
.get('/pessoas/:estudanteID/matricula/:matriculaID', MatriculaController.pegarUmaMatricula)
.get('/pessoas/:estudanteID/matricula', MatriculaController.pegarTodasAsMatriculas)
.get('/pessoas/:estudanteID/matriculasConfirmadas', MatriculaController.pegarMatriculasConfirmadas)
.get('/pessoas/matricula/:turmaID/porTurma', MatriculaController.pegarMatriculasPorTurma)
.post('/pessoas/:estudanteID/criarMatricula', MatriculaController.criarNovaMatricula)
.put('/pessoas/:estudanteID/matricula/:matriculaID', MatriculaController.atualizarUmaMatricula)
.delete('/pessoas/:estudanteID/matricula/:matriculaID', MatriculaController.excluirMatricula)
.post('/pessoas/:estudanteID/matricula/:matriculaID/restaurar', MatriculaController.restaurarMatricula)
// .get('/turma/lotadas', MatriculaController.pegarTurmasLotada)

module.exports = router

