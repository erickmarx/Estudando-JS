const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')

app.use(bodyparser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, requisicao, resposta, proximo) => {
    if(erro instanceof NaoEncontrado){
        resposta.status(404)
    } else {
        resposta.status(400)
    }
    resposta.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})



app.listen(config.get('api.port'), () => console.log('funcionando'))