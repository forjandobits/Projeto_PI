document.addEventListener("DOMContentLoaded", () => {

    const botao = document.querySelector("#concluir");
    const tbody = document.querySelector("#historicoSolicitacoes tbody");
    const form = document.querySelector("#solicitacao");

    // Busca as solicitações no servidor e atualiza a tabela
    async function carregarSolicitacoes() {

        try {

            const dados = await fetch(`${BASE_URL}/api/listar_solicitacao.php`)
            .then(r => r.json());

            const lista = [].concat(dados); // garante que sempre será um array
            tbody.innerHTML = "";

            lista.forEach(item => {
                tbody.innerHTML += `
                    <tr>
                        <td>${item.tipo_solicitacao}</td>
                        <td>${item.nome_completo}</td>
                        <td>${item.data_solicitacao}</td>
                        <td>${item.status}</td>
                        <td><button class="abrir-modal">Visualizar</button></td>
                    </tr>
                `;
            });

        } catch (erro) {
            console.error("Erro ao carregar solicitações:", erro);
        }
    }

    carregarSolicitacoes();

    // Evento responsável por enviar uma nova solicitação
    botao.addEventListener("click", async () => {

        const nome = document.querySelector("#nome").value;
        if (nome.length < 3) return alert("Nome inválido");

        const dadosFormulario = {
            nome_funcionario: nome,
            tipo_solicitacao: document.querySelector("#opcoes").value,
            observacao: document.querySelector("#observacoes").value,
            data_solicitacao: new Date().toISOString().split("T")[0]
        };

        try {

            const dados = await fetch(`${BASE_URL}/api/processo_add_solicitacao.php`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dadosFormulario)
            }).then(r => r.json());

            if (!dados.sucesso) return alert(dados.mensagem || "Erro ao processar solicitação.");

            carregarSolicitacoes(); // atualiza tabela após inserir no banco
            form.reset(); // limpa o formulário

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Falha na comunicação com o servidor.");
        }

    });

});