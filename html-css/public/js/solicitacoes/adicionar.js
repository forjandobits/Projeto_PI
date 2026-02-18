document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#solicitacao");
    const botao = document.querySelector("#concluir");
    const tbody = document.querySelector("#historicoSolicitacoes");

    botao.addEventListener("click", async function () {

        const nome = document.querySelector("#nome").value.trim();
        const observacoes = document.querySelector("#observacoes").value.trim();

        if (nome.length < 3) {
            alert("Nome inválido.");
            return;
        }

        if (observacoes.length < 10) {
            alert("Observação muito curta.");
            return;
        }

        // =============================
        // CRIA FORM DATA
        // =============================
        const formData = new FormData(form);

        try {

            const resposta = await fetch("public/js/solicitacoes/processo_add_solicitacao.php", {
                method: "POST",
                body: formData
            });

            const dados = await resposta.json();

            if (dados.sucesso) {

                const novaLinha = document.createElement("tr");

                novaLinha.innerHTML = `
                    <td>${dados.tipo}</td>
                    <td>${dados.nome}</td>
                    <td>${dados.data}</td>
                    <td>${dados.status}</td>
                    <td><button class="abrir-modal">Visualizar</button></td>
                `;

                tbody.appendChild(novaLinha);
                form.reset();

            } else {
                alert(dados.mensagem);
            }

        } catch (erro) {
            console.error("Erro:", erro);
        }

    });

});
