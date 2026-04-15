import { carregarPontosRelatorio } from "./funcoes_espelho_ponto.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const mes = params.get("mes");
    const ano = params.get("ano");
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#nome-exibido");
    const saidaData = document.querySelector("#data");
    const saidaSaldo = document.querySelector("#saldo_mes")
    const btnImprimir = document.querySelector(".botao-imprimir");
    const btnRetornar = document.querySelector('.botao-retornar');

    carregarPontosRelatorio(id, `${ano}-${mes}`, tabela, saidaNome, saidaData, saidaSaldo);

    btnImprimir.addEventListener("click", () => {
        window.onbeforeprint = () => {
            btnImprimir.style.display = "none";
            btnRetornar.style.display = "none";
        }

        window.onafterprint = () => {
            btnImprimir.style.display = "block";
            btnRetornar.style.display = "block";
        }
        window.print();
    });
});