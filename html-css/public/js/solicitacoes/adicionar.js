document.addEventListener("DOMContentLoaded", () => {

    // const form = document.querySelector("#solicitacao");
    const botao = document.querySelector("#concluir");
    const tbody = document.querySelector("#historicoSolicitacoes");

    botao.addEventListener("click", async () => {

        const nome = document.querySelector("#nome").value;
        const tipo = document.querySelector("#opcoes").value;
        const observacao = document.querySelector('#observacoes').value;
        const data = new Date().toLocaleDateString("pt-BR");

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

            const resposta = await fetch("/Projeto_PI/api/processo_add_solicitacao.php", {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(dadosFormulario)
            });

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }

            const texto = await resposta.text();
            console.log("Resposta bruta do servidor:");
            console.log(texto);
            return;

            // if (!dados.sucesso) {
            //     alert(dados.mensagem || "Erro ao processar solicitação.");
            //     return;
            // }

            // // ===========================================

            // const novaLinha = document.createElement("tr");

            // const campos = [
            //     dados.tipo_solicitacao,
            //     dados.nome_funcionario,
            //     dados.data_solicitacao,
            //     dados.status
            // ];

            // campos.forEach(valor => {
            //     const td = document.createElement("td");
            //     td.textContent = valor;
            //     novaLinha.appendChild(td);
            // });

            // const tdBotao = document.createElement("td");
            // const btn = document.createElement("button");
            // btn.textContent = "Visualizar";
            // btn.classList.add("abrir-modal");

            // tdBotao.appendChild(btn);
            // novaLinha.appendChild(tdBotao);

            // tbody.appendChild(novaLinha);
            // form.reset();

            // ===========================================

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Falha na comunicação com o servidor.");
        }

    });

});
