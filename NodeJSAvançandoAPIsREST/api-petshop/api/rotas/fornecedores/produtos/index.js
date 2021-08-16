const roteador = require('express').Router()

roteador.get('/', (req, res) => {
    res.json([])
})

module.exports = roteador