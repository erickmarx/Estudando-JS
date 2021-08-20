const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = 3000

app.get('/teste', (req, res) => {
    res.send('teste')
})

app.listen(port, console.log(`API rodando na porta ${port}`))