const ModeloTabela = require('../rotas/fornecedores/modelo-tabela-fornecedor')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada'))
    .catch(console.log)