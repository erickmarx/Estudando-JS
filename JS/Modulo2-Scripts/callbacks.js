const nomes = ['aluno1', 'aluno2', 'aluno3']

nomes.forEach(imprimeNomes)
    function imprimeNomes(nome){
        console.log(nome)
    }

nomes.forEach(nomes => {
    console.log(nomes)
})