const moment = require('moment')
const conexao = require('../infraestrutura/conexao.js')

class Atendimentos {
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const validarData = moment(data).isSameOrAfter(dataCriacao)
        const validarCliente = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: validarData,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: validarCliente,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }   else {
            const atendimentoDatada = {...atendimento, dataCriacao, data}


            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatada, (erro, resultados) => {
            if (erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(atendimento)
            }
        })
    }
    }

    listar(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(atendimento)
            }
        })
    }

    alterar(id, valores, res){
        if(valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })
    }

    deletar(id, res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

        


module.exports = new Atendimentos