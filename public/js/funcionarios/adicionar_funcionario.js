import { enviar } from "../utils/enviar.js";
import { mostrarMensagem } from '../utils/mostrarMensagem.js';
import { carregarCargos } from "./funcoes.js";

document.addEventListener("DOMContentLoaded", () => {
    carregarCargos();

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // Se estiver editando, não adiciona o listener de salvar novo
    if (id) return;

    const btnSalvar = document.querySelector("#btnSalvar");
    btnSalvar.addEventListener("click", async (e) => {
        e.preventDefault();

        const cargo = document.querySelector("#cargo").value;
        if (!cargo) {
            mostrarMensagem("Selecione um cargo!", "erro");
            return;
        }

        const formData = {
            nomeCompleto: document.querySelector("#nome-completo").value,
            telefone: document.querySelector("#telefone").value,
            email: document.querySelector("#email").value,
            dataNasc: document.querySelector("#data-nasc").value || null,
            cpf: document.querySelector("#cpf").value,
            rg: document.querySelector("#rg").value,
            genero: document.querySelector("#genero").value,
            estadoCivil: document.querySelector("#estado-civil").value,
            rua: document.querySelector("#rua").value,
            numeroCasa: document.querySelector("#numero-casa").value || null,
            bairro: document.querySelector("#bairro").value,
            cidade: document.querySelector("#cidade").value,
            estado: document.querySelector("#estado").value,
            cep: document.querySelector("#cep").value,
            cargo: cargo,
            // cbo: document.querySelector("#cbo").value || "",
            // regime: document.querySelector("#regime").value || "",
            // remuneracao: document.querySelector("#remuneracao").value || 0,
            banco: document.querySelector("#banco").value,
            agencia: document.querySelector("#agencia").value,
            numeroConta: document.querySelector("#numero-conta").value,
            chavePix: document.querySelector("#chave-pix").value,
            nis: document.querySelector("#nis").value || 0,
            nit: document.querySelector("#nit").value || 0,
            ctps: document.querySelector("#ctps").value || 0,
            pisPasep: document.querySelector("#pis-pasep").value || 0,
            certidaoCasamento: document.querySelector("#certidao-casamento").checked ? 1 : 0,
            cnh: document.querySelector("#cnh").checked ? 1 : 0,
            pcd: document.querySelector("#pcd").checked ? 1 : 0,
            cam: document.querySelector("#cam").checked ? 1 : 0,
            filhos: document.querySelector("#filhos").checked ? 1 : 0,
            qtdFilhos: document.querySelector("#qtd-filhos").value || 0
        };

        try {
            const resposta = await enviar(`${BASE_URL}/api/funcionarios/criar_funcionario.php`, formData);

            if (resposta.status === "sucesso") {
                mostrarMensagem("Funcionário cadastrado com sucesso!", "sucesso");
                document.querySelector("#formModal").reset();
                window.location.href = "colaboradores.php";
            } else {
                mostrarMensagem(resposta.mensagem || "Erro ao cadastrar funcionário.", "erro");
            }
        } catch (error) {
            mostrarMensagem("Erro na requisição de cadastro.", "erro");
            console.log(error);
        }
    });
});