document.addEventListener("DOMContentLoaded", () => {

    // Seleciona campos e botões    
    const motivo = document.querySelector("#modal-motivo-recusar");
    const btnAceitar = document.querySelector(".aceitar");
    const btnNegar = document.querySelector(".negar");
        
    // Atualizar o status para Autorizado
    btnAceitar.addEventListener('click', function () {

        // const motivo = document.querySelector('modal-motivo-recusar').value;

        // const dados = {
        //     motivo: modal-motivo-recusar,
        // };

        // fetch("/Projeto_PI/api/solicitacoes_visualizar.php")
            


        console.log("Solicitação autorizada!");
        alert("Solicitação Aceita!")
    })

    btnNegar.addEventListener('click', function(e) {
        // Atualizar o status para negado
        // Se o campo motivo não foi preenchido deve retornar ao campo e depois negar

        if (motivo.value.trim() === "") {
            e.preventDefault(); // Aqui o envio do formulário e cancelado
            alert("Motivo da recusa deve ser preenchido!");
            motivo.focus(); // Coloca o cursor dentro do campo motivo
        } else {
            alert("Solicitação negada!");
        }
    });

    const btnVisualizar = document.querySelectorAll(".abrir-modal");

    // Percorrer os botões
    btnVisualizar.forEach(botao => {

        // Adiciona um evento de click para cada botão
        botao.addEventListener("click", function () {

            // Faz requisição e retorna os dados
            fetch("/Projeto_PI/api/solicitacoes_visualizar.php")
                .then(response => response.json())
                .then(dados => {

                    console.log(dados);

                    // Se retronar erro interrompe a conexão
                    if (dados.erro) {
                        alert(dados.erro);
                        return;
                    }

                    // Preenchendo o modal com os dados
                    document.querySelector('#modal-nome-solicitante').value = dados.nome_completo;
                    document.querySelector('#modal-data-solicitacao').value = dados.data_solicitacao;
                    document.querySelector('#modal-opcao-selecionada').value = dados.tipo_solicitacao;
                    document.querySelector('#modal-exibir-observacao').value = dados.observacao;
                    
                    // document.querySelector('#modal-solicitacoes').style.display = 'block'; // Exibe o modal alterado


                })

                // Mostra o erro caso a requisição falhe
                .catch(erro => {
                    console.log("Erro ao buscar dados:", erro);
                });

        });

    });

});
