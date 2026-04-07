import { carregarPontos, editarPonto, fecharMes } from "./funcoes_espelho_ponto.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaMensagens = document.querySelector("#saida-erros");
    const btnSalvarPonto = document.querySelector("#btn-editar-ponto");
    const btnFecharMes = document.querySelector("#btn-fechar");
    const btnRelatorioPonto = document.querySelector("#btn-relatorio-ponto")
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const campoMes = document.querySelector("#data-mes-ano");
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    campoMes.value = `${ano}-${mes}`;
    
    carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);
    
    campoMes.addEventListener("change", () => {
        carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);
    });
    
    
    btnSalvarPonto.addEventListener("click", (e) => {
        e.preventDefault();
        
        editarPonto(saidaMensagens);
        
        carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);
    });
    
    btnFecharMes.addEventListener("click", () => {
        let confirmacao = confirm(`Deseja mesmo fechar o mês do funcionário ${saidaNome.textContent.split("-")[1].trim()}`)
        if (confirmacao) {
            const mesSelecionado = campoMes.value.split("-")[1];
            fecharMes(id, mesSelecionado, saidaMensagens);
        } else {
            saidaMensagens.style.color = "red";
            saidaMensagens.textContent = "Fechamento de mês cancelado!";
        }
    });

    btnRelatorioPonto.addEventListener("click", () => {
        window.location.href = `${BASE_URL}/relatorio_ponto.php?id=${id}&mes=${mes}&ano=${ano}`;
    });
});