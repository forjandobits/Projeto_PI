document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector("#solicitacao");
    const botao = document.querySelector("#concluir");
    const tbody = document.querySelector("#historicoSolicitacoes tbody");
    
    // ============ Função para atualizar tabelas ============
        
    async function carregarSolicitacoes() {

        try {

            const resposta = await fetch(`${BASE_URL}/api/listar_solicitacao.php`);

            if (!resposta.ok) {
                throw new Error("Erro ao buscar dados");
            }

            const dados = await resposta.json();

            const lista = Array.isArray(dados) ? dados : [dados];

            tbody.innerHTML = "";

            lista.forEach(item => {

                const linha = document.createElement("tr");

                linha.innerHTML = `
                    <td>${item.tipo_solicitacao}</td>
                    <td>${item.nome_completo}</td>
                    <td>${item.data_solicitacao}</td>
                    <td>${item.status}</td>
                    <td><button class='abrir-modal'>Visualizar</button></td>
                `;

                tbody.appendChild(linha);

            });

        }catch (erro) {

        console.error("Erro ao carregar solicitações:", erro);

        }
    }

    carregarSolicitacoes();
    
    // ====================================================

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

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Falha na comunicação com o servidor.");
        }

    });

});
