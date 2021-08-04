const customExpress = require('./config/customExpress.js')
const conexao = require('./infraestrutura/conexao.js')
const tabelas = require('./infraestrutura/tabelas.js')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else{
        const app = customExpress()

        tabelas.init(conexao)
        app.listen(3000, () => console.log('Está funcionando'))
    }
})
