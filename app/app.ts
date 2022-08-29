// aulas 1 e 2: import { Negociacao } from "./models/negociacao.js";

import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

// aulas 1 e 2: const negociacao = new Negociacao(new Date(), 10, 100);

// aulas 1 e 2: console.log(negociacao.volume);

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adicionar();
});
