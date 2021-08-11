const roteador = require('express').Router()
const tabelaFornecedor = require('./tabelaFornecedor')



roteador.use('/', async(req, res) => {
    const resultados = await tabelaFornecedor.listar()
    res.json(resultados)
})

module.exports = roteador