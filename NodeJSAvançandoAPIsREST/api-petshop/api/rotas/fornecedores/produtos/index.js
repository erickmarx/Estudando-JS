const roteador = require('express').Router({mergeParams: true})
const tabela = require('./tabelaProdutos')

roteador.get('/', async (req, res) => {
    const produtos = await tabela.listar(req.params.idFornecedor)
    res.json(produtos)
})

module.exports = roteador