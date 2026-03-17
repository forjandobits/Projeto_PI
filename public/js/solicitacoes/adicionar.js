document.addEventListener("DOMContentLoaded", () => {

    const botao = document.querySelector(".resumo button");
    const tbody = document.querySelector("table tbody");
    const form = document.querySelector(".modal-cadastro form");

    // ================= CRIAR ÁREA DE MENSAGEM =================
    // Como não existe um elemento de mensagem no HTML,
    // criamos dinamicamente usando JavaScript
    const msgBox = document.createElement("div");

    // Classe base definida no CSS
    msgBox.classList.add("mensagem-campo");

    // Inserimos a caixa de mensagem no final do formulário
    form.appendChild(msgBox);


    // ================= FUNÇÃO DE MENSAGEM =================
    // Esta função exibe mensagens de erro, sucesso ou informação
    function mostrarMensagem(texto, tipo) {

        // Define o texto da mensagem
        msgBox.textContent = texto;

        // Reseta as classes para evitar conflito
        msgBox.className = "mensagem-campo";

        // Adiciona classe de cor dependendo do tipo
        if (tipo === "erro") {
            msgBox.classList.add("msg-erro"); // vermelho
        }

        if (tipo === "sucesso") {
            msgBox.classList.add("msg-sucesso"); // verde
        }

        if (tipo === "info") {
            msgBox.classList.add("info"); // azul
        }

        // Faz a mensagem desaparecer após 4 segundos
        setTimeout(() => {
            msgBox.textContent = "";
            msgBox.className = "mensagem-campo";
        }, 4000);
    }


    // ================= CARREGAR SOLICITAÇÕES =================
    async function carregarSolicitacoes() {

        try {

            // Faz requisição para API que lista solicitações
            const dados = await fetch(`${BASE_URL}/api/listar_solicitacao.php`)
            .then(r => r.json()); 

            // Garante que sempre será um array
            const lista = [].concat(dados);

            // Limpa a tabela antes de inserir novos dados
            tbody.innerHTML = "";

            // Percorre cada solicitação retornada
            lista.forEach(item => {

                // Cria uma linha na tabela ------> Incluir data-id="${item.id_solicitacao}
                tbody.innerHTML += `
                <tr class="${item.status.toLowerCase()}" data-id="${item.id_solicitacao}">
                    <td>${item.nome_completo}</td>
                    <td>${item.tipo_solicitacao}</td>
                    <td>${item.data_solicitacao}</td>
                    <td>${item.status}</td>
                    <td>
                        <button class="abrir-modal">Visualizar</button>
                    </td>
                </tr>
                `;

            });

        } catch (erro) {

            console.error("Erro:", erro);

            // Exibe erro visual
            mostrarMensagem("Erro ao carregar solicitações.", "erro");

        }

    }

    // Carrega as solicitações ao abrir a página
    carregarSolicitacoes();

    // ================= AUTOCOMPLETE =================
    async function ativarAutocomplete(inputSelector, listaSelector){

        try {
            const response = await fetch(`${BASE_URL}/api/listar_solicitacao.php`);
            const dados = await response.json();

            const nomesLista = [].concat(dados);

            const input = document.querySelector(inputSelector);
            const lista = document.querySelector(listaSelector);

            if (!input || !lista) {
                console.error("Input ou lista não encontrados");
                return;
            }

            input.addEventListener("input", function(){

                lista.innerHTML = "";
                const valor = input.value.toLowerCase();

                if(valor === "") return;

                nomesLista.forEach(item => {

                    if(item.nome_completo.toLowerCase().includes(valor)){

                        const li = document.createElement("li");
                        li.textContent = item.nome_completo;

                        li.addEventListener("click", () => {
                            input.value = item.nome_completo;
                            lista.innerHTML = ""; // limpa corretamente
                        });

                        lista.appendChild(li);
                    }
                });
            });

        } catch (erro) {
            console.error("Erro:", erro);
        }
    }
    
    ativarAutocomplete("#nome", "#sugestoesNomes");
    
    // ================= ENVIAR SOLICITAÇÃO =================
    botao.addEventListener("click", async (e) => {
        
        // Impede o formulário de recarregar a página
        e.preventDefault();
        
        // Captura o nome digitado
        const nome = document.querySelector("#nome").value;
        
        // Validação simples
        if (nome.length < 3) {

            mostrarMensagem("Nome inválido. Digite pelo menos 3 caracteres.", "erro");
            return;

        }

        // Objeto com dados que serão enviados para o servidor
        const dadosFormulario = {

            nome_funcionario: nome,
            tipo_solicitacao: document.querySelector("#opcoes").value,
            observacao: document.querySelector("#observacoes").value,
            data_solicitacao: new Date().toISOString().split("T")[0],
            // pendente: document.querySelector("#pendente").checked

        };

        try {

            // Envia os dados para a API
            const dados = await fetch(`${BASE_URL}/api/processo_add_solicitacao.php`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosFormulario)

            }).then(r => r.json());

            // Se a API retornar erro
            if (!dados.sucesso) {

                mostrarMensagem(dados.mensagem || "Erro ao processar solicitação.", "erro");
                return;

            }

            // Mensagem de sucesso
            mostrarMensagem("Solicitação enviada com sucesso!", "sucesso");

            // Atualiza tabela
            carregarSolicitacoes();

            // Limpa formulário
            form.reset();

        } catch (erro) {

            console.error("Erro:", erro);

            // Erro de comunicação com servidor
            mostrarMensagem("Falha na comunicação com o servidor.", "erro");

        }

    });

});
