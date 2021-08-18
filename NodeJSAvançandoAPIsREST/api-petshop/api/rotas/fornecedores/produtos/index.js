const roteador = require('express').Router({mergeParams: true})
const tabela = require('./tabelaProdutos')
const Produto = require('./Produto')
const Serializador = require('../../../Serializador').SerializadorProduto

roteador.get('/', async (req, res) => {
    const produtos = await tabela.listar(req.fornecedor.id)
    const serializador = new Serializador(res.getHeader('Content-Type'))
    res.send(serializador.serializar(produtos))
})

roteador.post('/', async(req, res, next) => {
    try{
        const idFornecedor = req.fornecedor.id
        const corpo = req.body
        const dados = Object.assign({}, corpo, {fornecedor: idFornecedor})
        const produto = new Produto(dados)
        await produto.criar()
        const serializador = new Serializador(res.getHeader('Content-Type'))
        res.send(serializador.serializar(produto)).status(201)
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

roteador.get('/:idProduto', async(req, res, next) => {
    try{
        const dados = {
            id: req.params.idProduto,
            fornecedor: req.fornecedor.id
        }
        const produto = new Produto(dados)
        await produto.carregarUmProduto()
        const serializador = new Serializador(res.getHeader('Content-Type'), ['preco','estoque','fornecedor','dataCriacao','dataAtualizacao','versao'])
        res.send(serializador.serializar(produto))
    }catch(err){
        next(err)
    }
})

module.exports = roteador