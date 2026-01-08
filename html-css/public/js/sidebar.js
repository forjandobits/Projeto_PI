// Espera o carregamento completo do DOM antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona a sidebar pelo ID
    const sidebar = document.getElementById("sidebar");
    // Por algum motivo getElementsByTagName não funcionou
    const main = document.querySelector("main");
    const verModal = document.querySelectorAll(".abrir-modal");
    const fechar = document.querySelector(".fechar");

    const criar = document.querySelector(".mostrar");
    const formSolicitacoes = document.querySelector("#solicitacoes");
    const exibir = document.querySelector(".modal");

    // Seleciona o botão de abrir/fechar (toggle)
    const botaoToggle = document.getElementById("botao-abrefecha");

    // Adiciona um "ouvinte" de evento para o clique no botão
    botaoToggle.addEventListener("click", () => {
        // Alterna a classe "open" na sidebar
        // Se a classe existir, remove. Se não existir, adiciona.
        sidebar.classList.toggle("open");
        main.classList.toggle("open");
    });

    // Verifica se o elemento está na página acessada
    if(criar){
        criar.addEventListener("click", ()=>{
            formSolicitacoes.classList.toggle("ocultar");
        })
    }

    if(verModal){
        // É necessária essa varredura pois o elemento está em em diversas 
        // áreas do código para abrir o elemento em questão 
        verModal.forEach(modal => {
            modal.addEventListener("click", ()=>{
                exibir.style.display = "flex";
            })
        });
    }

    // Fecha o modal se ele existir
    if(fechar){
        fechar.addEventListener("click", ()=> {
            exibir.style.display = "none";
        })
    }
});