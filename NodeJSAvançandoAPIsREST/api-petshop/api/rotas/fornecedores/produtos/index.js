const roteador = require('express').Router({mergeParams: true})
const tabela = require('./tabelaProdutos')
const Produto = require('./Produto')

roteador.get('/', async (req, res) => {
    const produtos = await tabela.listar(req.fornecedor.id)
    res.json(produtos)
})

roteador.post('/', async(req, res, next) => {
    try{
        const idFornecedor = req.fornecedor.id
        const corpo = req.body
        const dados = Object.assign({}, corpo, {fornecedor: idFornecedor})
        const produto = new Produto(dados)
        await produto.criar()
        res.json(produto).status(201)
    }catch(err){
        next(err)
    }
})

roteador.delete('/:idProduto', async (req, res) => {
    dados = {
        id: req.params.idProduto,
        fornecedor: req.fornecedor.id
    }
    const produto = new Produto(dados)
    await produto.deletar(dados)
    res.status(204).end()
})

module.exports = roteador