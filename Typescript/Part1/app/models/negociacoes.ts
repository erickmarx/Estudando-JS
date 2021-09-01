import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []

    adicionar(param: Negociacao){
        this.negociacoes.push(param)
    }

    listar(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }
}