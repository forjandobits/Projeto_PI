document.addEventListener("DOMContentLoaded", () => {

    // ====== Seleciona campos e botões ======   
    const motivo = document.querySelector("#modal-motivo-recusar");
    const btnAceitar = document.querySelector(".aceitar");
    const btnNegar = document.querySelector(".negar");
    const tbody = document.querySelector("table tbody");
    const mensagem = document.querySelector(".aprovado");
    const modal = document.querySelector("#modal-solicitacoes");

    
        
    // ====== Botão Aceitar ==> Atualiza o status para Autorizado ======
    btnAceitar.addEventListener('click', function () {

        const motivoAceitar = document.querySelector('#modal-motivo-recusar').value;
        const statusAprovado = "Aprovado";
        const id = document.querySelector('#id-solicitacao').value;

        fetch("/Projeto_PI/api/visualizar_adicionar.php", {
            method: "POST",
            body: JSON.stringify({
                id_solicitacao: id,
                motivo: motivoAceitar,
                status: statusAprovado
            })
        })
        .then(res => res.json())
        .then(resposta => {
            console.log(resposta);

            mensagem.textContent = "Solicitação aceita";
            setTimeout(() => {
            modal.style.display = "none";
            mensagem.textContent = "";
            }, 2000); // Não está funcionando - a pagina é recarregada muito rápido
        });
            
        console.log("Solicitação autorizada!");
        
    })

    // ====== Botão Negar ==> Atualiza o status para Negado ======
    btnNegar.addEventListener('click', function(e) {

        const motivoNegar = document.querySelector('#modal-motivo-recusar').value;
        const statusNegado = "Negado";
        const id = document.querySelector('#id-solicitacao').value;

        // Se o campo motivo não foi preenchido deve retornar ao campo e depois negar
        if (motivo.value.trim() === "") {
            e.preventDefault(); // Aqui o envio do formulário e cancelado
            alert("Motivo da recusa deve ser preenchido!");
            motivo.focus(); // Coloca o cursor dentro do campo motivo
            return;
        } 

        fetch("/Projeto_PI/api/visualizar_adicionar.php", {
            method: "POST",
            body: JSON.stringify({
                id_solicitacao: id,
                motivo: motivoNegar,
                status: statusNegado
            })
        })
        .then(r => r.json())
        .then(resposta => {
            console.log(resposta);

            mensagem.textContent = "Solicitação negada";
            setTimeout(() => {
            modal.style.display = "none";
            mensagem.textContent = "";
            }, 4000);
        });

        console.log("Solicitação Negada") 
    });

    // ====== Evento para preencher o modal de acordo com Histórico de solicitações ======
    tbody.addEventListener("click", function(e){

        const botao = e.target.closest(".abrir-modal");
        if(!botao) return;

        const linha = botao.closest("tr");
        const id = linha.getAttribute("data-id");

        console.log("ID enviado:", id);

            // Faz requisição e retorna os dados
            fetch(`/Projeto_PI/api/solicitacoes_visualizar.php?id=${id}`)
                .then(response => response.json())
                .then(dados => {

                    console.log(dados);

                    // Se retronar erro interrompe a conexão
                    if (dados.erro) {
                        alert(dados.erro);
                        return;
                    }

                    // Preenchendo o modal com os dados
                    document.querySelector('#id-solicitacao').value = dados.id_solicitacao;
                    document.querySelector('#modal-nome-solicitante').value = dados.nome_completo;
                    document.querySelector('#modal-data-solicitacao').value = dados.data_solicitacao;
                    document.querySelector('#modal-opcao-selecionada').value = dados.tipo_solicitacao;
                    document.querySelector('#modal-exibir-observacao').value = dados.observacao;
                    document.querySelector('#modal-motivo-recusar').value = dados.motivo || "";


                    if (dados.status === "Pendente") {
                        btnAceitar.disabled = false;
                        btnNegar.disabled = false;
                    }  else {
                        btnAceitar.disabled = true;
                        btnNegar.disabled = true;
                    }

                    document.querySelector('#modal-solicitacoes').style.display = 'block'; // Exibe o modal alterado
                })

                // Mostra o erro caso a requisição falhe
                .catch(erro => {
                    console.log("Erro ao buscar dados:", erro);
                });
    });
    

});


