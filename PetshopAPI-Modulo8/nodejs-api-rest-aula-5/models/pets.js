const conexao = require('../infraestrutura/conexao')
const uploadDeArquivos = require('../arquivos/uploadDeArquivos')


class Pet {
    adiciona(data,res) {
        console.log(data.pet.imagem)
        const query = 'INSERT INTO Pets SET ?'
        uploadDeArquivos(data.pet.imagem, data.pet.nome, (erro, novoCaminho) => {
            if(erro){
                res.status(400).json({erro})
            }else{
            const novoPet = { nome: data.pet.nome, imagem: novoCaminho}
            conexao.query(query, data.pet, erro => {
                if(erro) {
                    res.status(400).json(erro)
                } else{
                    res.status(200).json(novoPet)
                    }
                })
            }
        })
    }
}

module.exports = new Pet()