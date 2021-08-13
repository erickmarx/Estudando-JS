const express = require('express')
const config = require('config')
const app = express()
const roteador = require('./rotas/fornecedores/index')
const NaoEncontrado = require('./erros/NaoEncontrado')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/fornecedores', roteador)

app.use((err, _, res, next) => {
    if(err instanceof NaoEncontrado){
        res.status(404)
    }else{
        res.status(400)
    }
    res.json({
        mensagem: err.message,
        id: err.idErro
    })
})

app.listen(config.get('api.port'), () => console.log('funcionando'))