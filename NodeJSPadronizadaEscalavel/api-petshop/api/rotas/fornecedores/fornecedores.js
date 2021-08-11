const roteador = require('express').Router()

roteador.use('/', (req, res) => {
    res.json('Ok')
})

module.exports = roteador