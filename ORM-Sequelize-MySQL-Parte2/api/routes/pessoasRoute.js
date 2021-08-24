const {Router} = require('express')
const router = Router()
const PessoaController = require('../controllers/PessoaController')

router
.get('/pessoas', PessoaController.pegarPessoasAtivas)
.get('/pessoas/todos', PessoaController.pegarTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegarUmaPessoa)
.post('/pessoas', PessoaController.criarPessoa)
.put('/pessoas/:id', PessoaController.atualizarPessoa)
.delete('/pessoas/:id', PessoaController.excluirPessoa)
.post('/pessoas/:id/restaurar', PessoaController.restaurarPessoa)

//Matriculas:
.get('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.pegarUmaMatricula)
.get('/pessoas/:estudanteID/matricula', PessoaController.pegarTodasAsMatriculas)
.get('/pessoas/:estudanteID/matriculasConfirmadas', PessoaController.pegarMatriculasConfirmadas)
.get('/pessoas/matricula/:turmaID/porTurma', PessoaController.pegarMatriculasPorTurma)
.get('/turma/lotadas', PessoaController.pegarTurmasLotada)
.post('/pessoas/:estudanteID/matricula', PessoaController.criarMatricula)
.put('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.atualizarMatricula)
.put('/pessoas/:estudanteID/cancelar', PessoaController.cancelaPessoa)
.delete('/pessoas/:estudanteID/matricula/:matriculaID', PessoaController.excluirMatricula)
.post('/pessoas/:estudanteID/matricula/:matriculaID/restaurar', PessoaController.restaurarMatricula)

module.exports = router