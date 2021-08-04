const Sequelize = require('sequelize')
const instancia = require('api\banco-de-dados\index.js')


const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamp: True,
    createAt: 'dataCriacao',
    updateAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)