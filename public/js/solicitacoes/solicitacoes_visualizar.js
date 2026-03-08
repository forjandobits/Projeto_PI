document.addEventListener("DOMContentLoaded", () => {

    // Seleciona campos e botões    
    const motivo = document.querySelector("#modal-motivo-recusar");
    const btnAceitar = document.querySelector(".aceitar");
    const btnNegar = document.querySelector(".negar");
    const tbody = document.querySelector("table tbody");
        
    // Atualizar o status para Autorizado
    btnAceitar.addEventListener('click', function () {

        // const motivo = document.querySelector('#modal-motivo-recusar').value;
        // const id = document.querySelector('#id-solicitacao').value;

        // // const dados = {
        // //     motivo: modal-motivo-recusar,
        // // };

        // fetch("/Projeto_PI/api/solicitacoes_visualizar.php", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         id_solicitacao: id,
        //         motivo: motivo
        //     })
        // })
        // .then(res => res.json())
        // .then(resposta => {
        //     console.log(resposta);
        // });
            
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
                    
                    document.querySelector('#modal-solicitacoes').style.display = 'block'; // Exibe o modal alterado



                })

                // Mostra o erro caso a requisição falhe
                .catch(erro => {
                    console.log("Erro ao buscar dados:", erro);
                });
    });
    

});




    // const btnVisualizar = document.querySelectorAll(".abrir-modal");

    // // Percorrer os botões
    // btnVisualizar.forEach(botao => {

    //     // Adiciona um evento de click para cada botão
    //     botao.addEventListener("click", function () {

    //         // Faz requisição e retorna os dados
    //         fetch("/Projeto_PI/api/solicitacoes_visualizar.php")
    //             .then(response => response.json())
    //             .then(dados => {

    //                 console.log(dados);

    //                 // Se retronar erro interrompe a conexão
    //                 if (dados.erro) {
    //                     alert(dados.erro);
    //                     return;
    //                 }

    //                 // Preenchendo o modal com os dados
    //                 document.querySelector('#modal-nome-solicitante').value = dados.nome_completo;
    //                 document.querySelector('#modal-data-solicitacao').value = dados.data_solicitacao;
    //                 document.querySelector('#modal-opcao-selecionada').value = dados.tipo_solicitacao;
    //                 document.querySelector('#modal-exibir-observacao').value = dados.observacao;
                    
    //                 document.querySelector('#modal-solicitacoes').style.display = 'block'; // Exibe o modal alterado


    //             })

    //             // Mostra o erro caso a requisição falhe
    //             .catch(erro => {
    //                 console.log("Erro ao buscar dados:", erro);
    //             });

    //     });

    // });


