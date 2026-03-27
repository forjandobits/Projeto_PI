// Função utilitária
export function resetIdCargo() {
    idCargoAtual = null;
}

export function limparModalCampos() {
    const campos = [
        '#cbo',
        '#nome-cargo',
        '#salario',
        '#carga-horaria',
        '#regime'
    ];

    campos.forEach(seletor => {
        const el = document.querySelector(seletor);
        if (el) el.value = "";
    });
}

// variável compartilhada
export let idCargoAtual = null;

// EXPORT: listar cargos (tabela)
export async function listarCargos() {
    const resposta = await fetch(`${BASE_URL}/api/cargo/exibir_cargo.php`);
    const cargos = await resposta.json();

    const tabelaCargo = document.querySelector('#tabela-saida-cargos');
    if (!tabelaCargo) return;

    tabelaCargo.innerHTML = ""; // limpa antes (IMPORTANTE)

    cargos.forEach(cargo => {
        const linha = tabelaCargo.insertRow();

        linha.insertCell().textContent = cargo.cbo;
        linha.insertCell().textContent = cargo.nome_cargo;
        linha.insertCell().textContent = cargo.salario;
        linha.insertCell().textContent = cargo.carga_horaria;
        linha.insertCell().textContent = cargo.regime_trabalhista;

        linha.insertCell().innerHTML =
            `<button class="abrir-modal-edicao" data-id="${cargo.id_cargo}">Editar</button>`;
    });
}


export function configurarEdicao() {
    document.addEventListener("click", async (e) => {

        if (e.target.classList.contains("abrir-modal-edicao")) {
            e.preventDefault();

            const modal = document.querySelector("#edicao-cargo");
            if (modal) modal.style.display = "flex";

            idCargoAtual = e.target.dataset.id;

            const resposta = await fetch(`${BASE_URL}/api/cargo/puxar_cargo_info.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id_cargo: idCargoAtual })
            });

            const dados = await resposta.json();

            const campos = {
                '#cbo': 'cbo',
                '#nome-cargo': 'nome_cargo',
                '#salario': 'salario',
                '#carga-horaria': 'carga_horaria',
                '#regime': 'regime_trabalhista'
            };

            Object.entries(campos).forEach(([seletor, chave]) => {
                const el = document.querySelector(seletor);
                if (el) el.value = dados[chave] ?? "";
            });
        }
    });
}
