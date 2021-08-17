const roteador = require('express').Router({mergeParams: true})
const tabela = require('./tabelaProdutos')
const Produto = require('./Produto')

roteador.get('/', async (req, res) => {
    const produtos = await tabela.listar(req.params.idFornecedor)
    res.json(produtos)
})

roteador.post('/', async(req, res) => {
    const idFornecedor = req.params.idFornecedor
    const corpo = req.body
    const dados = Object.assign({}, corpo, {fornecedor: idFornecedor})
    const produto = new Produto(dados)
    await produto.criar()
    res.json(produto).status(201)
})

module.exports = roteador