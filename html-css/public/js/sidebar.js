// Espera o carregamento completo do DOM antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona a sidebar pelo ID
    const sidebar = document.getElementById("sidebar");
    // Por algum motivo getElementsByTagName não funcionou
    const main = document.querySelector("main");

    const criar = document.querySelector(".mostrar");
    const formSolicitacoes = document.querySelector("#solicitacoes");

    // Seleciona o botão de abrir/fechar (toggle)
    const botaoToggle = document.getElementById("botao-abrefecha");

    // Adiciona um "ouvinte" de evento para o clique no botão
    botaoToggle.addEventListener("click", () => {
        // Alterna a classe "open" na sidebar
        // Se a classe existir, remove. Se não existir, adiciona.
        sidebar.classList.toggle("open");
        main.classList.toggle("open");
    });

    criar.addEventListener("click", ()=>{
        formSolicitacoes.classList.toggle("ocultar");
    })
});