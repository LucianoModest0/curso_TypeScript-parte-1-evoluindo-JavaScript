export class Negociacoes {
    constructor() {
        //can be written as Negociacao[]
        this.negociacoes = [];
    }
    add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // can be written as readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
