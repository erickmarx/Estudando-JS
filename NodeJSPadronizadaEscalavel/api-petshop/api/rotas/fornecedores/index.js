const roteador = require('express').Router()
const tabelaFornecedor = require('./tabelaFornecedor')
const Fornecedor = require('./Fornecedores') 
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor
const roteadorProdutos = require('./produtos')


roteador.get('/', async(_, res) => {
    const resultados = await tabelaFornecedor.listar()
    const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
    res.send(serializador.serializar(resultados)).status(200)
})

roteador.get('/:idFornecedor', async (req, res, next) => {
    try{
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'), ['email','dataCriacao','dataAtualizacao','versao'])
        res.send(serializador.serializar(fornecedor)).status(200)
    }catch(erro){
        next(erro)
    }
})


roteador.post('/', async(req, res, next) => {
    try{
        const recebidos = req.body
        const fornecedor = new Fornecedor(recebidos)
        await fornecedor.criar()
        const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
        res.send(serializador.serializar(fornecedor)).status(200)
    }catch(erro){
        next(erro)
    }
})


roteador.put('/:idFornecedor', async(req, res, next) => {
    
    try{
        const id = req.params.idFornecedor
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        res.status(204).end()
    }catch(erro){
        next(erro)
    }
})

roteador.delete('/:idFornecedor', async(req, res) => {
    try{
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({id:id})
        await fornecedor.carregar()
        await fornecedor.remover()
        res.status(204).end()
    }catch(erro){
        res.status(400).json({mensagem: erro.message, id: idErro})
    }
})

roteador.use('/:idFornecedor/produtos', roteadorProdutos)

module.exports = roteador