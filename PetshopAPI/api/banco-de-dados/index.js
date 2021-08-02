const Sequelize = require('sequelize') //exportar conexão com banco de dados
const config = require('config')

const instancia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql'
    }
) //criar uma instancia

module.exports = instancia