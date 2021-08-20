const roteador = require('express').Router()
const tabelaFornecedor = require('./tabelaFornecedor')
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor

roteador.options('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204).end()
})

roteador.get('/', async(_, res) => {
    const resultados = await tabelaFornecedor.listar()
    const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
    res.send(serializador.serializar(resultados)).status(200)
})

module.exports = roteador