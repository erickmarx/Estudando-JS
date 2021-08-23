const {Router} = require('express')
const router = Router()
const NivelController = require('../controllers/NivelController')

router
.get('/niveis', NivelController.pegarTodosOsNiveis)
// .get('/niveis/:id', NivelController.pegarUmNivel)
// .post('/niveis', NivelController.criarNivel)
// .put('/niveis/:id', NivelController.atualizarNivel)
// .delete('/niveis/:id', NivelController.apagarNivel)

module.exports = router