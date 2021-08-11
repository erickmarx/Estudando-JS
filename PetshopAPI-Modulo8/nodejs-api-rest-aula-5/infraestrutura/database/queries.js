const conexao = require('./conexao')

const executarQuery = (query, parameters = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parameters, (erros, resultados, campos) => {
            if(erros){
                reject(erros)
            }else{
                resolve(resultados)
            }
        })
    })
}

module.exports = executarQuery