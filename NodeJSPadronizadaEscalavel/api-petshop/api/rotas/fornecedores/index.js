const roteador = require('express').Router()
const tabelaFornecedor = require('./tabelaFornecedor')
const Fornecedor = require('./Fornecedores') 


roteador.get('/', async(_, res) => {
    const resultados = await tabelaFornecedor.listar()
    res.json(resultados)
})

roteador.get('/:idFornecedor', async (req, res) => {
    try{
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        res.json(fornecedor)
    }catch(erro){
        res.json({mensagem: erro.message})
    }
})

roteador.post('/', async(req, res) => {
    const recebidos = req.body
    const fornecedor = new Fornecedor(recebidos)
    await fornecedor.criar()
    res.json(fornecedor)
})

// roteador.post('/', async(req, res) => {
//     const done = await new Fornecedor(req.body).criar()
//     res.json(done)
// })

roteador.put('/:idFornecedor', async(req, res) => {

    try{
        const id = req.params.idFornecedor
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        res.json(fornecedor)
    }catch(erro){
        res.json({mensagem: erro.message})
    }
})
module.exports = roteador