const { Router } = require('express')
const router = Router()
const TurmaController = require('../controllers/TurmaController')
const MatriculaController = require('../controllers/MatriculaController')

router
 .get('/turma', TurmaController.pegarTodasAsTurmas)
 .get('/turma/lotadas', MatriculaController.pegarTurmasLotada)
 .get('/turma/:id', TurmaController.pegarUmaTurma)
 .post('/turma', TurmaController.criarTurma)
 .put('/turma/:id', TurmaController.atualizarTurma)
 .delete('/turma/:id', TurmaController.excluirTurma)
 .post('/turma/:id/restaurar', TurmaController.restaurarTurma)
 
module.exports = router