import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //can be written as Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    // can be written as readonly Negociacao[]
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    } 
}
