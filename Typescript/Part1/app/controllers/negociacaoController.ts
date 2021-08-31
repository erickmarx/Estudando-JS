import { Negociacao } from "../models/negociacao.js";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class NegociacaoController{
    private inputData: Number
    private inputQuantidade: Number
    private inputValor: Number

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }


    adiciona(){
        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        console.log(negociacao)
    }
}