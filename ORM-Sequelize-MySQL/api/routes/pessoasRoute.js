const {Router} = require('express')
const router = Router()
const PessoaController = require('../controllers/PessoaController')

router
.get('/pessoas', PessoaController.pegarTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegarUmaPessoa)
.post('/pessoas', PessoaController.criarPessoa)
.put('/pessoas/:id', PessoaController.atualizarPessoa)
.delete('/pessoas/:id', PessoaController.excluirPessoa)

module.exports = router