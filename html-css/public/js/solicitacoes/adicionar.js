document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#solicitacao");
    const tbody = document.querySelector("#tabelaSolicitacao");
    const botao = document.querySelector("#concluir");

    // =========================
    // BUSCAR DADOS DO BANCO
    // =========================
    async function carregarSolicitacoes() {

    try {

        const resposta = await fetch("/projeto_pi/html-css/public/js/solicitacoes/listar_solicitacao.php");

        if (!resposta.ok) {
            throw new Error("Erro HTTP: " + resposta.status);
        }

        const dados = await resposta.json();

        tbody.innerHTML = "";

        dados.forEach(solicitacao => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${solicitacao.opcoes}</td>
                <td>${solicitacao.nome}</td>
                <td>${solicitacao.data_solicitacao}</td>
                <td>${solicitacao.status}</td>
                <td><button class='abrir-modal'>Visualizar</button></td>
            `;

            tbody.appendChild(linha);
        });

    } catch (erro) {
        console.error("Erro ao carregar solicitações:", erro);
    }
}


    // =========================
    // ENVIAR PARA O PHP
    // =========================
    botao.addEventListener("click", async function () {

        const formData = new FormData(form);

        try {
            const resposta = await fetch(("/projeto_pi/html-css/public/js/solicitacoes/processo_add_solicitacao.php")
,
                {
                    method: "POST",
                    body: formData
                }
            );

            const resultado = await resposta.text();

            console.log(resultado);

            form.reset();
            carregarSolicitacoes();

        } catch (erro) {
            console.error("Erro ao enviar:", erro);
        }
    });

    // Carrega ao abrir a página
    carregarSolicitacoes();

});
