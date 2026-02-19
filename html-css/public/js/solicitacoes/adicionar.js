document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#solicitacao");
    const botao = document.querySelector("#concluir");
    const tbody = document.querySelector("#historicoSolicitacoes");

    function ehJsonValido(texto) {
        try {
            JSON.parse(texto);
            return true;
        } catch {
            return false;
        }
    }

    botao.addEventListener("click", async () => {

        const nomeFuncionario = document.querySelector("#nome").value.trim();

        if (nomeFuncionario.length < 3) {
            alert("Nome inválido.");
            return;
        }

        const formData = new FormData(form);

        try {

            const resposta = await fetch("public/js/solicitacoes/processo_add_solicitacao.php", {
                method: "POST",
                body: formData
            });

            if (!resposta.ok) {
                throw new Error(`Erro HTTP: ${resposta.status}`);
            }

            const texto = await resposta.text();

            if (!ehJsonValido(texto)) {
                console.error("Resposta não é JSON válido:");
                console.error(texto);
                alert("Erro inesperado do servidor.");
                return;
            }

            const dados = JSON.parse(texto);

            if (!dados.sucesso) {
                alert(dados.mensagem || "Erro ao processar solicitação.");
                return;
            }

            const novaLinha = document.createElement("tr");

            const campos = [
                dados.tipo_solicitacao,
                dados.nome_funcionario,
                dados.data_solicitacao,
                dados.status
            ];

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

        } catch (erro) {
            console.error("Erro na requisição:", erro);
            alert("Falha na comunicação com o servidor.");
        }

    });

});
