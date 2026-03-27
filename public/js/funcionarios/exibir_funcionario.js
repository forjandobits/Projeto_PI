document.addEventListener('DOMContentLoaded', function () {

    function limparTabela() {
        const tbody = document.querySelector("#tabela-saida-colaboradores");
        if (tbody) {
            tbody.innerHTML = "";
        }
    }

    async function listarFuncionarios(funcionarios) {

        const tabelaFuncionario = document.querySelector('#tabela-saida-colaboradores');
        if (tabelaFuncionario) {
            tabelaFuncionario.textContent = "";

            funcionarios.forEach(funcionario => {
                const novaCelulaFuncionario = tabelaFuncionario.insertRow();

                const id = funcionario.id_funcionario;
                const nome = novaCelulaFuncionario.insertCell();
                const cargo = novaCelulaFuncionario.insertCell();
                const situacao = novaCelulaFuncionario.insertCell();
                const desligar = novaCelulaFuncionario.insertCell();
                const visualizar = novaCelulaFuncionario.insertCell();

                nome.textContent = funcionario.nome_completo;
                cargo.textContent = funcionario.nome_cargo;

                desligar.innerHTML = `
                    <button class='desligar' 
                        id='${id}' 
                        data-nome='${funcionario.nome_completo}'>
                        Desligar
                    </button>`;

                visualizar.innerHTML = `<button class='abrir-modal' id='${id}'>Visualizar</button>`;

                const botaoDesligar = novaCelulaFuncionario.querySelector(".desligar");

                if (funcionario.situacao == 1) {
                    situacao.textContent = 'ATIVO';
                } else {
                    situacao.textContent = 'DESLIGADO';

                    if (botaoDesligar) {
                        botaoDesligar.disabled = true;
                        botaoDesligar.style.opacity = "0.5";
                        botaoDesligar.style.cursor = "not-allowed";
                    }
                }
            });
        }
    }

    // ✅ NOVA FUNÇÃO PARA RECARREGAR A TABELA
    async function recarregarTabela() {
        const resposta = await fetch(`${BASE_URL}/api/funcionarios/exibir_lista_funcionarios.php`);
        const funcionarios = await resposta.json();

        limparTabela();
        listarFuncionarios(funcionarios);
    }

    async function exibiInformacoes() {
        let idFuncionario;

        document.addEventListener("click", async function (e) {

            if (e.target.classList.contains("abrir-modal")) {
                const exibir = document.querySelector(".modal");
                exibir.style.display = "flex";

                const travarCampos = exibir.querySelectorAll("input, select");

                travarCampos.forEach(campos => {
                    campos.disabled = true;
                });

                const respotaFuncionario = await fetch(`${BASE_URL}/api/funcionarios/exibir_dados_funcionario.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_funcionario: e.target.id
                    })
                });

                idFuncionario = e.target.id;

                const dadosFuncionario = await respotaFuncionario.json();

                const nomeCompleto = document.querySelector('#nome-completo');
                const telefone = document.querySelector('#telefone');
                const email = document.querySelector('#email');

                dadosFuncionario.forEach(dados => {
                    nomeCompleto.value = dados.nome_completo;
                    telefone.value = dados.telefone;
                    email.value = dados.email;
                });
            }

            const botaoEditar = e.target.closest(".botao-editar");

            if (botaoEditar) {
                e.preventDefault();
                window.location.href = `./cadastro_de_funcionario.php?id=${idFuncionario}`;
            }
        });
    }

    async function desligarFuncionario() {

        document.addEventListener("click", async function (e) {

            if (e.target.classList.contains("desligar")) {

                const botao = e.target;
                const idFuncionario = botao.getAttribute("id");
                const nomeFuncionario = botao.dataset.nome;

                if (!nomeFuncionario) return;

                // 1. DESLIGAR
                const resposta = await fetch(`${BASE_URL}/api/funcionarios/desligar.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_funcionario: idFuncionario
                    })
                });

                const resultado = await resposta.json();

                if (!resultado.success) {
                    console.log("Erro ao desligar funcionário");
                    return;
                }

                // 2. REGISTRAR DEMISSÃO
                try {
                    await fetch(`${BASE_URL}/api/funcionarios/mandar_demissao.php`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id_funcionario: idFuncionario,
                            nome_funcionario: nomeFuncionario,
                            data_demissao: new Date().toISOString().split("T")[0],
                        })
                    });

                } catch (erro) {
                    console.error("Erro ao registrar demissão:", erro);
                }

                // 3. ATUALIZA TABELA
                await recarregarTabela();
            }
        });
    }

    async function exibirFuncionarioCadastrado() {
        const respostaExibir = await fetch(`${BASE_URL}/api/funcionarios/exibir_lista_funcionarios.php`);
        const funcionarios = await respostaExibir.json();

        const filtroBusca = document.querySelector("#filtro");

        if (filtroBusca) {
            filtroBusca.addEventListener('input', (e) => {

                const valorBuscado = e.target.value.toLowerCase();

                const resultadoBusca = funcionarios.filter(buscaFuncionario => {
                    return (
                        buscaFuncionario.nome_completo.toLowerCase().includes(valorBuscado) ||
                        buscaFuncionario.nome_cargo.toLowerCase().includes(valorBuscado)
                    );
                });

                listarFuncionarios(resultadoBusca);
            });

            listarFuncionarios(funcionarios);
        }
    }

    //REMOVIDO listarFuncionarios();
    desligarFuncionario();
    exibiInformacoes();
    exibirFuncionarioCadastrado();
});