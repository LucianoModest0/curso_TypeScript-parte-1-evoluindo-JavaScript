import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    //can be written as Negociacao[]
    private negociacoes: Array<Negociacao> = [];

    public add(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    // can be written as readonly Negociacao[]
    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    } 

    public paraTexto():string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    
    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }
}
