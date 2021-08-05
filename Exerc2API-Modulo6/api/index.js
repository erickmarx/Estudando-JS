const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jogos = []
app.use(bodyParser.json())

app.get('/get/jogos', (requisicao, resposta) => {
    resposta.send(JSON.stringify(jogos))
})

app.post('/', (requisicao, resposta) => {
    try{
        if(!requisicao.body.nome || !requisicao.body.plataforma){
            throw new Error('Cammpos invalidos')
        }
        jogos.push(requisicao.body)
        resposta.send(JSON.stringify(requisicao.body))
    }catch(erro){
        resposta.send(JSON.stringify({mensagem: erro.message}))
    }
})



app.listen(3000, () => console.log('funcionando'))