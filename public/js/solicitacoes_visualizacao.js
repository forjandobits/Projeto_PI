document.addEventListener("DOMContentLoaded", () => {

    const motivo = document.querySelector("#motivo-recusar");
    const btnAceitar = document.querySelector(".aceitar");
    const btnNegar = document.querySelector(".negar");

    btnAceitar.addEventListener('click', function () {
        // Atualizar o status para Autorizado
        console.log("Solicitação autorizada!");
        alert("Solicitação Aceita!")
    })

    btnNegar.addEventListener('click', function(e) {
        // Atualizar o status para Autorizado
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

    btnVisualizar.forEach(botao => {

        botao.addEventListener("click", function () {

            fetch("/Projeto_PI/api/solicitacoes_visualizar.php")
                .then(response => response.json())
                .then(dados => {

                    console.log(dados);

                    if (dados.erro) {
                        alert(dados.erro);
                        return;
                    }

                    document.querySelector('#nome-solicitante').textContent = dados.nome_completo;
                    document.querySelector('#data-solicitacao').textContent = dados.data_solicitacao;
                    document.querySelector('#opcao-selecionada').textContent = dados.tipo_solicitacao;
                    document.querySelector('#exibir-observacao').textContent = dados.observacao;

                    // document.querySelector('#modal-solicitacoes').classList.add('ativo');


                })
                .catch(erro => {
                    console.log("Erro ao buscar dados:", erro);
                });

        });

    });

});