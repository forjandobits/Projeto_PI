import { dadosFolhasLancadas } from "./exibir_folhas_lancadas.js";

document.addEventListener('DOMContentLoaded', ()=> {
    function carregarRelatorio(){
        const relatorio_pagamento = JSON.parse(localStorage.getItem("relatorio_pagamento")) || [];

        dadosFolhasLancadas(relatorio_pagamento);

        const botaoImprimir = document.querySelector('.botao-imprimir');

        botaoImprimir.addEventListener('click', ()=> {
            alert('Clicou para imprimir!');
            window.onbeforeprint = () => {
                botaoImprimir.style.display = "none";
            }

            window.onafterprint = () => {
                botaoImprimir.style.display = "block";
            }
            window.print();
        })
    }
    window.onload = carregarRelatorio();
    carregarRelatorio();
})
