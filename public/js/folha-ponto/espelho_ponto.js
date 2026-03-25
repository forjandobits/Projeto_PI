import { carregarPontos, editarPonto, fecharMes } from "./funcoes_espelho_ponto.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaMensagens = document.querySelector("#saida-erros");
    const btnSalvarPonto = document.querySelector("#btn-editar-ponto");
    const btnFecharMes = document.querySelector("#btn-fechar");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const mesReferencia = 3;

    carregarPontos(id, tabela, saidaMensagens, saidaNome);

    btnSalvarPonto.addEventListener("click", (e) => {
        e.preventDefault();

        editarPonto(saidaMensagens);

        carregarPontos(id, tabela, saidaMensagens, saidaNome);
    });

    btnFecharMes.addEventListener("click", () => {
        let confirmacao1 = confirm(`Deseja mesmo fechar o mês do funcionário ${saidaNome.textContent.split("-")[1].trim()}`)
        if (confirmacao1) {
            fecharMes(id, mesReferencia, saidaMensagens);
        } else {
            saidaMensagens.style.color = "red";
            saidaMensagens.textContent = "Fechamento de mês cancelado!";
        }
    })
});