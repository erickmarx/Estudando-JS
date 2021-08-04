const express = require('express')
const app = express()
const bodyparser = require('body-parser')
// const config = require('config')

app.use(bodyparser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(3000, () => console.log('funcionando'))