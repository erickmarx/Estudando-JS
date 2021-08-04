const express = require('express')
const nodemon = require('nodemon')
const app = express()

app.listen(3000, () => console.log('Está funcionando'))

app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e você está na rota do GET'))

