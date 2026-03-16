import { carregarPontos, editarPonto } from "./funcoes_espelho_ponto.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaMensagens = document.querySelector("#saida-erros");
    const btnSalvarPonto = document.querySelector("#btn-editar-ponto");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    carregarPontos(id, tabela, saidaMensagens, saidaNome);

    btnSalvarPonto.addEventListener("click", (e) => {
        e.preventDefault();

        editarPonto(saidaMensagens);

        carregarPontos(id, tabela, saidaMensagens, saidaNome);
    });
});