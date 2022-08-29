import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //can be written as Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    public add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    // can be written as readonly Negociacao[]
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    } 
}
