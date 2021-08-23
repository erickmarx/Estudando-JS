const {Router} = require('express')
const router = Router()
const PessoaController = require('../controllers/PessoaController')

router
.get('/pessoas', PessoaController.pegarTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegarUmaPessoa)
.post('/pessoas', PessoaController.criarPessoa)
.put('/pessoas/:id', PessoaController.atualizarPessoa)
.delete('/pessoas/:id', PessoaController.excluirPessoa)

//Matriculas:
.get('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.pegarUmaMatricula)
.get('/pessoas/:estudanteID/matricula', PessoaController.pegarTodasAsMatriculas)
.post('/pessoas/:estudanteID/matricula', PessoaController.criarMatricula)
.put('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.atualizarMatricula)
.delete('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.excluirMatricula)

module.exports = router