document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#solicitacao");
    const botao = document.querySelector("#concluir");
    const tbody = document.querySelector("#historicoSolicitacoes");

    botao.addEventListener("click", async () => {

        const nome = document.querySelector("#nome").value;
        const tipo = document.querySelector("#opcoes").value;
        const observacao = document.querySelector('#observacoes').value;
        const data = new Date().toISOString().split("T")[0];;

        if (nome.length < 3) {
            alert("Nome inválido.");
            return;
        }

        const dadosFormulario = {
            nome_funcionario : nome,
            tipo_solicitacao : tipo,
            data_solicitacao : data,
            observacao : observacao
        };
        console.log(dadosFormulario);

        try {

            // ============ Mandar dados pro PHP ============

            const resposta = await fetch(`${BASE_URL}/api/processo_add_solicitacao.php`, {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(dadosFormulario)
            });

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }
            console.log(resposta);

            const dados = await resposta.json();
            console.log(dados )

            if (!dados.sucesso) {
                alert(dados.mensagem || "Erro ao processar solicitação.");
                return;
            }

            // ============ Atualizar tabela ============

            const novaLinha = document.createElement("tr");

            const campos = [
                dados.tipo_solicitacao,
                dados.nome_funcionario,
                dados.data_solicitacao,
                dados.status
            ];
            console.log(campos);

            campos.forEach(valor => {
                const td = document.createElement("td");
                td.textContent = valor;
                novaLinha.appendChild(td);
            });

            const tdBotao = document.createElement("td");
            const btn = document.createElement("button");
            btn.textContent = "Visualizar";
            btn.classList.add("abrir-modal");

            tdBotao.appendChild(btn);
            novaLinha.appendChild(tdBotao);

            tbody.appendChild(novaLinha);
            form.reset();

            // ===========================================

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Falha na comunicação com o servidor.");
        }

    });

});
