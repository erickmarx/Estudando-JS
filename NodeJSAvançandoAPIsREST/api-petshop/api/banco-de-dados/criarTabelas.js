const modelosTabela = [
    require('../rotas/fornecedores/modeloTabelaFornecedor'),
    require('../rotas/fornecedores/produtos/modeloTabelaFornecedor')
]
async function criarTabelas(){
    for(let i = 0; i < modelosTabela.length; i++){
        const modelo = modelosTabela[i]
        await modelo.sync()
    }
}

criarTabelas()

// const modelosTabela = [
//     require('../rotas/fornecedores/modeloTabelaFornecedor'),
//     require('../rotas/fornecedores/produtos/modeloTabelaFornecedor')
// ]
// function criarTabelas(){
//     modelosTabela.forEach(async(i) => {
//         const modelo = modelosTabela[i]
//         await modelo.sync()
// })}

// criarTabelas()