const express = require('express')
const config = require('config')
const app = express()
const roteador = require('./rotas/fornecedores/index')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/fornecedores', roteador)

app.use((err, _, res, next) => {
    let status = 500

    if(err instanceof NaoEncontrado){
        status = 404
    }
    if(err instanceof CampoInvalido || err instanceof DadosNaoFornecidos){
        status = 400
    }

    res.status(status)
    res.json({
        mensagem: err.message,
        id: err.idErro
    })
})

app.listen(config.get('api.port'), () => console.log('funcionando'))