const roteador = require('express').Router()
const tabelaFornecedor = require('./tabelaFornecedor')
const Fornecedor = require('./Fornecedores') 


roteador.get('/', async(_, res) => {
    const resultados = await tabelaFornecedor.listar()
    res.status(200).json(resultados)
})

roteador.get('/:idFornecedor', async (req, res) => {
    try{
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        res.status(200).json(fornecedor)
    }catch(erro){
        res.status(404).json({mensagem: erro.message})
    }
})


roteador.post('/', async(req, res) => {
    try{
            const recebidos = req.body
            const fornecedor = new Fornecedor(recebidos)
            await fornecedor.criar()
            res.status(201).json(fornecedor)
    }catch(erro){
        res.status(400).json({mensagem: erro.message})
    }
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
        res.status(204).end()
    }catch(erro){
        res.status(400).json({mensagem: erro.message})
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
        res.status(400).json({mensagem: erro.message})
    }
})

module.exports = roteador