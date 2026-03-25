document.addEventListener("DOMContentLoaded", () => {

    // ====== Seleciona campos e botões ======   
    const motivo = document.querySelector("#modal-motivo-recusar");
    const btnAceitar = document.querySelector(".aceitar");
    const btnNegar = document.querySelector(".negar");
    const tbody = document.querySelector("table tbody");
    const mensagem = document.querySelector('#mensagem-status');
    const areasBotoes = document.querySelector('.resumo-final');

    // ====== Evento para preencher o modal de acordo com Histórico de solicitações ======
    tbody.addEventListener("click", function(e){

        // Verificando clique no botão correto
        const botao = e.target.closest(".abrir-modal");
        if(!botao) return;

        // Pegando o id da linha
        const linha = botao.closest("tr");
        const id = linha.getAttribute("data-id");

            // Faz requisição e retorna os dados
            fetch(`/Projeto_PI/api/solicitacoes_visualizar.php?id=${id}`)
                .then(response => response.json())
                .then(dados => {

                    // Se retronar erro interrompe a conexão
                    if (dados.erro) {
                        alert(dados.erro);
                        return;
                    }

                    // Preenchendo o modal com os dados
                    document.querySelector('#id-solicitacao').value = dados.id_solicitacao;
                    document.querySelector('#modal-nome-solicitante').value = dados.nome_completo;
                    document.querySelector('#modal-data-solicitacao').value = dados.data_solicitacao.split("-").reverse().join("/");
                    document.querySelector('#modal-opcao-selecionada').value = dados.tipo_solicitacao;
                    document.querySelector('#modal-exibir-observacao').value = dados.observacao;
                    document.querySelector('#modal-motivo-recusar').value = dados.motivo || "";

                    if (dados.status === "Pendente") {
                        btnAceitar.disabled = false;
                        btnNegar.disabled = false;

                        document.querySelector('#modal-motivo-recusar').readOnly  = false;

                        areasBotoes.style.display = 'flex';
                        mensagem.style.display = 'none';
                        
                    }  else {
                        document.querySelector('#modal-motivo-recusar').readOnly  = true;

                        btnAceitar.disabled = true;
                        btnNegar.disabled = true;

                        areasBotoes.style.display = 'none';
                        mensagem.className = "";
                        mensagem.style.display = 'block';
                        mensagem.textContent = "Status: " + dados.status;
                    }

                    document.querySelector('#modal-solicitacoes').style.display = 'block'; // Exibe o modal alterado
                })

                // Mostra o erro caso a requisição falhe
                .catch(erro => {
                    console.log("Erro ao buscar dados:", erro);
                });
    });
        
    // ====== Botão Aceitar ==> Atualiza o status para Autorizado ======
    btnAceitar.addEventListener('click', function (e) {

        e.preventDefault(); 

        const motivoAceitar = document.querySelector('#modal-motivo-recusar').value;
        const statusAprovado = "Aprovado";
        const id = document.querySelector('#id-solicitacao').value;

        fetch("/Projeto_PI/api/visualizar_aceitar_negar.php", {
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

            mensagem.className = "";
            mensagem.textContent = "Solicitação aceita";
            mensagem.style.display = "block";
            mensagem.classList.add("msg-sucesso", "msg-menor");

           
            setTimeout(() => {
            location.reload(); // recarrega a página
        }, 2000);
        });
                  
    })

    // ====== Botão Negar ==> Atualiza o status para Negado ======
    btnNegar.addEventListener('click', function(e) {

        e.preventDefault(); 

        const motivoNegar = document.querySelector('#modal-motivo-recusar').value;
        const statusNegado = "Negado";
        const id = document.querySelector('#id-solicitacao').value;

        // Se o campo motivo não foi preenchido deve retornar ao campo e depois negar
        if (motivo.value.trim() === "") {
            mensagem.className = ""; // Limpando a classe mensagem
            mensagem.textContent = "Motivo da recusa deve ser preenchido!";
            mensagem.style.display = "block";
            mensagem.classList.add("msg-erro", "msg-menor");
            motivo.focus(); // Coloca o cursor dentro do campo motivo
            return;
        } 

        fetch("/Projeto_PI/api/visualizar_aceitar_negar.php", {
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

            mensagem.className = ""; // Limpando a classe mensagem
            mensagem.textContent = "Solicitação negada";
            mensagem.style.display = "block";
            mensagem.classList.add("msg-sucesso", "msg-menor");

            setTimeout(() => {
            location.reload(); // recarrega a página
        }, 2000);
        });

    });

});


