const express = require('express')
const config = require('config')
const app = express()
const roteador = require('./rotas/fornecedores/fornecedores')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/api/fornecedores', roteador)

app.listen(config.get('api.port'), () => console.log('funcionando'))