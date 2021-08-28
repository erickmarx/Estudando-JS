const express = require('express');
const app = express();

require('./src/usuarios') //Estrategias Autenticação


app
.use(express.json())
.use(express.urlencoded({ extended: true}))

module.exports = app;
