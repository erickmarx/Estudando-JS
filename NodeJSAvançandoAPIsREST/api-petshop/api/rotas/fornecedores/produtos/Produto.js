const tabela = require('./tabelaProdutos')

class Produto{
    constructor({id, titulo, preco, estoque, fornecedor, dataCriacao, dataAtualizacao, versao}){
        this.id = id
        this.titulo = titulo
        this.preco = preco
        this.estoque = estoque
        this.fornecedor = fornecedor
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    validar(){
        if(typeof this.titulo !== 'string' || this.titulo.length === 0){
            throw new Error('O campo titulo está invalido')
        }
        if(typeof this.preco !== 'number' || this.preco.length === 0){
            throw new Error('O campo preco está invalido')
        }
        
    }

    async criar(){
        this.validar()
        const resultado = await tabela.inserir({
            titulo: this.titulo,
            preco: this.preco,
            estoque: this.estoque,
            fornecedor: this.fornecedor
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }

    deletar(){
        return tabela.deletar(this.id, this.fornecedor)
    }

    async carregarUmProduto(){
        
        const produto = await tabela.carregarUmProduto(this.id, this.fornecedor)
        this.titulo = produto.titulo
        this.preco = produto.preco
        this.estoque = produto.estoque
        this.dataCriacao = produto.dataCriacao
        this.dataAtualizacao = produto.dataAtualizacao
        this.versao = produto.versao
    }

    async atualizar(){
        const dadosParaAtualizar = {}

        if(typeof this.titulo === 'string' && this.titulo.length > 0){
            dadosParaAtualizar.titulo = this.titulo
        }

        if (typeof this.preco === 'number' && this.preco > 0){
            dadosParaAtualizar.preco = this.preco
        }

        if(typeof this.estoque === 'number' && this.estoque >= 0){
            dadosParaAtualizar.estoque = this.estoque
        }

        if(Object.keys(dadosParaAtualizar).length === 0){
            throw new Error('Não foram fornecidos dados para atualizar')
        }

        return tabela.atualizar({
            id: this.id,
            fornecedor: this.fornecedor
        },
        dadosParaAtualizar
        )
    }

    diminuirEstoque(){
        return tabela.subtrair(
            this.id,
            this.fornecedor,
            "estoque",
            this.estoque
        )
    }
}

module.exports = Produto