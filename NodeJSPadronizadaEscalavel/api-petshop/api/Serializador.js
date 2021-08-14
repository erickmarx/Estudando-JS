const ValorNaoSuportado = require("./erros/ValorNaoSuportado")

class Serializador{
    json(dados){
        return json.stringify(dados)
    }

    serializar(dados){
        if(this.contentType === 'application/json'){
            return this.json(dados)
        }
        throw new ValorNaoSuportado(this.contentType)
    }
}