const alunos = ['aluno1', 'aluno2', 'aluno3', 'aluno4']
const mediaAlunos = [10,7,9,6]

var listaDeAlunoENotas = [alunos, mediaAlunos]

const exibirNomeNota = (nomeDoAluno) => {
    if (listaDeAlunoENotas[0].includes(nomeDoAluno)){
        indice = listaDeAlunoENotas[0].indexOf(nomeDoAluno)
        return `A média do ${listaDeAlunoENotas[0][indice]} é de ${listaDeAlunoENotas[1][indice]}`
    } else {
        return "Aluno não cadastrado"
    }
}

console.log(exibirNomeNota('aluno3'))