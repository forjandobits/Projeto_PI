document.addEventListener('DOMContentLoaded', function () {
    function limparModal() {
        const campos = [
            '#cbo',
            '#nome-cargo',
            '#salario',
            '#carga-horaria',
            '#regime',
            '#escala'
        ];

        campos.forEach(seletor => {
            const el = document.querySelector(seletor);
            if (el) el.value = "";
        });
    }

    async function listarCargos() {
        const respostaExibirCargo = await fetch(`${BASE_URL}/api/funcionarios/exibir_cargo.php`);
        const cargos = await respostaExibirCargo.json();

        const tabelaCargo = document.querySelector('#tabela-saida-cargos')
        if (tabelaCargo) {

            cargos.forEach(cargo => {
                const novaCelulaCargo = tabelaCargo.insertRow();

                const id_cargo = cargo.id_cargo;
                const cbo = novaCelulaCargo.insertCell();
                const nomeCargo = novaCelulaCargo.insertCell();
                const salario = novaCelulaCargo.insertCell();
                const cargaHoraria = novaCelulaCargo.insertCell();
                const regime = novaCelulaCargo.insertCell();
                const escala = novaCelulaCargo.insertCell();
                const editar = novaCelulaCargo.insertCell();

                cbo.textContent = cargo.cbo;
                nomeCargo.textContent = cargo.nome_cargo;
                salario.textContent = cargo.salario;
                cargaHoraria.textContent = cargo.carga_horaria;
                regime.textContent = cargo.regime_trabalhista;
                escala.textContent = cargo.escala;


                editar.innerHTML = `<button type="button" class="abrir-modal" id="${id_cargo}">Editar</button>`;
            })
        }
    }

    async function exibiInformacoes() {
        let idCargo;

        document.addEventListener("click", async function (e) {

            if (e.target.classList.contains("abrir-modal")) {
                e.preventDefault();
                limparModal()

                const exibir = document.querySelector(".modal");
                if (exibir) {
                    exibir.style.display = "flex";
                }

                idCargo = e.target.id;

                try {
                    const respostaCargo = await fetch(`${BASE_URL}/api/funcionarios/puxar_cargo_info.php`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id_cargo: idCargo
                        })
                    });

                    // pega como texto primeiro (debug seguro)
                    const texto = await respostaCargo.text();
                    console.log("Resposta do PHP:", texto);

                    const dadosCargo = JSON.parse(texto);

                    // valida erro vindo do PHP
                    if (dadosCargo.success === false) {
                        console.error("Erro:", dadosCargo.error);
                        return;
                    }

                    // preenche campos
                    const cbo = document.querySelector('#cbo');

                    if (cbo && dadosCargo.cbo !== undefined) {
                        cbo.value = dadosCargo.cbo;
                    } else {
                        console.warn("Campo cbo não encontrado ou não veio na resposta");
                    }

                    const campos = {
                        '#cbo': 'cbo',
                        '#nome-cargo': 'nome_cargo',
                        '#salario': 'salario',
                        '#carga-horaria': 'carga_horaria',
                        '#regime': 'regime_trabalhista',
                        '#escala': 'escala'
                    };

                    Object.entries(campos).forEach(([seletor, chave]) => {
                        const elemento = document.querySelector(seletor);

                        if (elemento) {
                            elemento.value = dadosCargo[chave] ?? "";
                        } else {
                            console.warn(`Campo não encontrado: ${seletor}`);
                        }
                    });

                } catch (erro) {
                    console.error("Erro no fetch:", erro);
                }
            }

            const botaoEditar = e.target.closest(".botao-editar");

            if (botaoEditar) {
                e.preventDefault();

                if (!idCargo) {
                    console.warn("ID do cargo não definido");
                    return;
                }

                window.location.href = `./cargos?id=${idCargo}`;
            }
        });
    }

    listarCargos();
    exibiInformacoes();
})