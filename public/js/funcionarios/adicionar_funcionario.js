import { enviar } from "../utils/enviar.js";
import { mostrarMensagem } from '../utils/mostrarMensagem.js';

async function carregarCargos() {
    try {
        const response = await fetch(`${BASE_URL}/api/cargo/exibir_cargo.php`);
        const cargos = await response.json();
        const select = document.getElementById("cargo");
        console.log(cargos);
        cargos.forEach(cargo => {
            const option = document.createElement("option");
            option.value = cargo.id_cargo;
            option.textContent = cargo.nome_cargo;
            select.appendChild(option);
        });
    } catch (error) {
        mostrarMensagem("Erro ao carregar cargos", "erro");
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    carregarCargos();

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // Se estiver editando, não adiciona o listener de salvar novo
    if (id) return;

    const btnSalvar = document.getElementById("btnSalvar");
    btnSalvar.addEventListener("click", async (e) => {
        e.preventDefault();

        const cargo = document.getElementById("cargo").value;
        if (!cargo) {
            mostrarMensagem("Selecione um cargo!", "erro");
            return;
        }

        const formData = {
            nomeCompleto: document.getElementById("nome-completo").value,
            telefone: document.getElementById("telefone").value,
            email: document.getElementById("email").value,
            dataNasc: document.getElementById("data-nasc").value || null,
            cpf: document.getElementById("cpf").value,
            rg: document.getElementById("rg").value,
            genero: document.getElementById("genero").value,
            estadoCivil: document.getElementById("estado-civil").value,
            rua: document.getElementById("rua").value,
            numeroCasa: document.getElementById("numero-casa").value || null,
            bairro: document.getElementById("bairro").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            cep: document.getElementById("cep").value,
            cargo: cargo,
            cbo: document.getElementById("cbo").value || "",
            regime: document.getElementById("regime").value || "",
            remuneracao: document.getElementById("remuneracao").value || 0,
            banco: document.getElementById("banco").value,
            agencia: document.getElementById("agencia").value,
            numeroConta: document.getElementById("numero-conta").value,
            chavePix: document.getElementById("chave-pix").value,
            nis: document.getElementById("nis").value || 0,
            nit: document.getElementById("nit").value || 0,
            ctps: document.getElementById("ctps").value || 0,
            pisPasep: document.getElementById("pis-pasep").value || 0,
            certidaoCasamento: document.getElementById("certidao-casamento").checked ? 1 : 0,
            cnh: document.getElementById("cnh").checked ? 1 : 0,
            pcd: document.getElementById("pcd").checked ? 1 : 0,
            cam: document.getElementById("cam").checked ? 1 : 0,
            filhos: document.getElementById("filhos").checked ? 1 : 0,
            qtdFilhos: document.getElementById("qtd-filhos").value || 0
        };

        try {
            const resposta = await enviar(`${BASE_URL}/api/criar_funcionario.php`, formData);

            if (resposta.sucesso) {
                mostrarMensagem("Funcionário cadastrado com sucesso!", "erro");
                alert("Chegou aqui!")
                document.getElementById("formModal").reset();
                window.location.href = "colaboradores.php";
            } else {
                mostrarMensagem(resposta.mensagem || "Erro ao cadastrar funcionário", "erro");
            }
        } catch (error) {
            mostrarMensagem("Erro na requisição de cadastro", "erro");
            console.error(error);
        }
    });
});