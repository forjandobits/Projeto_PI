// O que esse arquivo faz?

import { dadosFolhasLancadas } from "./exibir_folhas_lancadas.js";

document.addEventListener('DOMContentLoaded', () => {

    function carregarRelatorio() {

        const relatorio_pagamento = JSON.parse(localStorage.getItem("relatorio_pagamento")) || [];

        dadosFolhasLancadas(relatorio_pagamento);

        const botaoImprimir = document.querySelector('.botao-imprimir');
        const botaoRetornar = document.querySelector('.botao-retornar');

        if (botaoImprimir) {
            botaoImprimir.addEventListener('click', () => {

                window.onbeforeprint = () => {
                    botaoImprimir.style.display = "none";
                    if (botaoRetornar) botaoRetornar.style.display = "none";
                };

                window.onafterprint = () => {
                    botaoImprimir.style.display = "block";
                    if (botaoRetornar) botaoRetornar.style.display = "block";
                };

                window.print();
            });
        }
    }

    carregarRelatorio(); // ✅ certo

});