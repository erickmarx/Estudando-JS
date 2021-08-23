const {Router} = require('express')
const router = Router()
const NivelController = require('../controllers/NivelController')

router
.get('/nivel', NivelController.pegarTodosOsNiveis)
.get('/nivel/:id', NivelController.pegarUmNivel)
.post('/nivel', NivelController.criarNivel)
.put('/nivel/:id', NivelController.atualizarNivel)
.delete('/nivel/:id', NivelController.excluirNivel)
.post('/nivel/:id/restaurar', NivelController.restaurarNivel)

module.exports = router