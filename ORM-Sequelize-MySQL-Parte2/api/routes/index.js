const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')
const matriculas = require('./matriculasRoute')

module.exports = app => {
    app.use(
        pessoas,
        turmas,
        niveis,
        matriculas
    )
}