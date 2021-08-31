/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.quantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this.inputData);
        console.log(this.quantidade);
        console.log(this.inputValor);
    }
}
