const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
routes(app)
const port = 3000


app.listen(port, console.log(`API rodando na porta ${port}`))