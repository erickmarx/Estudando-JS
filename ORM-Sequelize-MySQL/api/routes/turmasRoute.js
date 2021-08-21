const { Router } = require('express')
const router = Router()
const TurmaController = require('../controllers/TurmaController')

router
 .get('/turmas', TurmaController.pegarTodasAsTurmas)
//  .get('/turmas/:id', TurmaController.pegarUmaTurma)
//  .post('/turmas', TurmaController.criarTurma)
//  .put('/turmas/:id', TurmaController.atualizarTurma)
//  .delete('/turmas/:id', TurmaController.apagarTurma)
module.exports = router