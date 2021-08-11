const express = require('express')
const config = require('config')
const app = express()

app.listen(config.get(api.port), () => console.log('funcionando'))