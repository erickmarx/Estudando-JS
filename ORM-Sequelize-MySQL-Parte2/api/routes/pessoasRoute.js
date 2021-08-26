const {Router} = require('express')
const router = Router()
const PessoaController = require('../controllers/PessoaController')

router
.get('/pessoas', PessoaController.pegarTodasAsPessoas)
.get('/pessoas/ativas', PessoaController.pegarPessoasAtivas)
.get('/pessoas/:estudanteID', PessoaController.pegarUmaPessoa)
.post('/pessoas', PessoaController.criarPessoa)
.put('/pessoas/:id', PessoaController.atualizarPessoa)
.delete('/pessoas/:estudanteID', PessoaController.excluirPessoa)
.put('/pessoas/:estudanteID/cancelar', PessoaController.cancelaPessoa)
.post('/pessoas/:estudanteID/restaurar', PessoaController.restaurarPessoa)



module.exports = router