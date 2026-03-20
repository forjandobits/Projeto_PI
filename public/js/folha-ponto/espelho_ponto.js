import { carregarPontos, editarPonto } from "./funcoes_espelho_ponto.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaMensagens = document.querySelector("#saida-erros");
    const btnSalvarPonto = document.querySelector("#btn-editar-ponto");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    //isis
    const campoMes = document.querySelector("#data-mes-ano");
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");

    campoMes.value = `${ano}-${mes}`;
    //fim isis

    carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);

    campoMes.addEventListener("change", () => {//add campoMes.value
        carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);
    });
    

    btnSalvarPonto.addEventListener("click", (e) => {
        e.preventDefault();

        editarPonto(saidaMensagens);

        carregarPontos(id,campoMes.value, tabela, saidaMensagens, saidaNome);//add campoMes.value
        
    });
});
