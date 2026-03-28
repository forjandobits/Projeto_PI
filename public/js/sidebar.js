// Espera o carregamento completo do DOM antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona a sidebar pelo ID
    const sidebar = document.getElementById("sidebar");
    // Por algum motivo getElementsByTagName não funcionou
    const main = document.querySelector("main");
    const verModal = document.querySelectorAll(".abrir-modal");
    const fechar = document.querySelectorAll(".fechar");

    const criar = document.querySelector(".solicitar");
    const exibir = document.querySelector(".modal");
    const modalSolicitacoes = document.querySelector(".modal#solicitacoes");
    const exibirSolicitacoes = document.querySelector("#modal-solicitacoes");

    // Seleciona o botão de abrir/fechar (toggle)
    const botaoToggle = document.querySelector("#botao-abrefecha");

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
            exibir.style.display = "flex"
            if(modalSolicitacoes || exibirSolicitacoes){
                modalSolicitacoes.style.display = "flex";
                exibirSolicitacoes.style.display = "none";
            }
        })
    }

    if(verModal){
        // É necessária essa varredura pois o elemento está em em diversas 
        // áreas do código para abrir o elemento em questão 
        verModal.forEach(modal => {
            modal.addEventListener("click", ()=>{
                exibir.style.display = "flex";
                if(modalSolicitacoes || exibirSolicitacoes){
                    modalSolicitacoes.style.display = "none";
                    exibirSolicitacoes.style.display = "flex";
                }
            })
        });
    }

    // Fecha o modal se ele existir
    if(fechar){
        fechar.forEach(fecharModais => {
            // console.log(fecharModais);
            fecharModais.addEventListener("click", ()=>{
                exibir.style.display = "none";
                if(modalSolicitacoes || exibirSolicitacoes){
                    exibirSolicitacoes.style.display = "none";
                }
            })
        })
    }
});