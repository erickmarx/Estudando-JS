const roteador = require('express').Router()
const tabelaFornecedor = require('./tabelaFornecedor')
const Fornecedor = require('./Fornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado')

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await tabelaFornecedor.listar()
    resposta.status(200)
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.get('/:idFornecedor', async (requisicao, resposta) => {
    try{
        const id = requisicao.params.idFornecedor
    const fornecedor = new Fornecedor({id: id})
    await fornecedor. carregar()
    resposta.status(200)
    resposta.JSON(
        JSON.stringify(fornecedor)
    )
} catch (erro) {
    resposta.status(404)
    resposta.send(
        JSON.stringify({
            mensagem: erro.message
        })
    )
}
})

roteador.post('/', async (requisicao, resposta) => {
    try{
        const dadosRecebidos = requisicao.body
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar()
        resposta.status(201)
        resposta.send(
        JSON.stringify(fornecedor))
    }catch(erro){
        resposta.status(400)
        resposta.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})
    
roteador.put('/:idFornecedor', async (requisicao, resposta, proximo) => {
    try {
        const id = requisicao.params.idFornecedor
        const dadosRecebidos = requisicao.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        resposta.status(204)
        resposta.end()
    } catch(erro) {
        proximo(erro)
    }
})

roteador.delete('/:idFornecedor', async (requisicao, resposta) => {
    
    try{
        const id = requisicao.params.idFornecedor
        const fornecedor = new Fornecedor({id: id})
        await fornecedor.carregar()
        await fornecedor.remover()
        resposta.status(204)
        resposta.end()
    } catch(erro) {
        resposta.status(404)
        resposta.send(
        JSON.stringify({mensagem: erro.message}))
    }
})

module.exports = roteador