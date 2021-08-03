const express = require('express') //criar API
const app = express() //instancia para gerar aplicação
const bodyParser = require('body-parser') //plugin
const config = require('config')

app.use(bodyParser.json()) //usar plugin

const roteador = require('./rotas/fornecedores/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.get('api.porta'), () => console.log('API funcionando')) //listen uma porta