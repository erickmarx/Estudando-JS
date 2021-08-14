const express = require('express')
const config = require('config')
const app = express()
const roteador = require('./rotas/fornecedores/index')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const { formatosAceitos } = require('./Serializador')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use((req, res, next) => {
    let formatoRequisitado = req.header('Accept')

    if(formatoRequisitado === '*/*'){
        formatoRequisitado = 'application/json'
    }

    if(formatosAceitos.indexOf(formatoRequisitado) === -1){
        res.status(406)
        res.end()
        return
    }

    res.setHeader('Content-Type', formatoRequisitado)
    next()
})

app.use('/api/fornecedores', roteador)

app.use((err, _, res, next) => {
    let status = 500

    if(err instanceof NaoEncontrado){
        status = 404
    }
    if(err instanceof CampoInvalido || err instanceof DadosNaoFornecidos){
        status = 400
    }

    if(err instanceof ValorNaoSuportado){
        status = 406
    }

    res.status(status)
    res.json({
        mensagem: err.message,
        id: err.idErro
    })
})

app.listen(config.get('api.port'), () => console.log('funcionando'))