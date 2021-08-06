const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const sites = []
app.use(bodyParser.json())

app.get('/', (requisicao, resposta) => {
    resposta.send(JSON.stringify(sites))
})

app.post('/', (requisicao, resposta) => {
    try{
        if(!requisicao.body.URL || !requisicao.body.dataDeAcesso){
            throw new Error('Campos invalidos')
        }
        const site = {URL: requisicao.body.URL, dataDeAcesso: requisicao.body.dataDeAcesso}
        sites.push(site)
        resposta.status(201)
        resposta.send(JSON.stringify(site))
    }catch(erro){
        resposta.status(400)
        resposta.send(JSON.stringify({Error: erro.message}))
    }
})



app.listen(3000, () => console.log('funcionando'))