export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(param) {
        this.negociacoes.push(param);
    }
    listar() {
        return this.negociacoes;
    }
}
