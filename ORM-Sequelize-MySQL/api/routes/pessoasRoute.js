const {Router} = require('express')
const router = Router()
const PessoaController = require('../controllers/PessoaController')

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegarUmaPessoa)

module.exports = router