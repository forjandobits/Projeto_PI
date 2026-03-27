import { adicionarCargo } from "./adicionar_cargo.js";
import { atualizarCargo } from "./update_cargo.js";
import { 
    listarCargos, 
    configurarEdicao, 
    idCargoAtual,
    resetIdCargo,
    limparModalCampos
} from "./exibir_cargo.js";

document.addEventListener("DOMContentLoaded", () => {

    const btnAdicionar = document.querySelector(".abrir-modal-adicionar");

    if (btnAdicionar) {
        btnAdicionar.addEventListener("click", () => {

            // modo criar
            resetIdCargo();

            // limpa o formulário
            limparModalCampos();
        });
    }
    const btnSalvar = document.getElementById("btnsalvar");

    // 🔹 pega dados do formulário
    function pegarDadosFormulario() {
        return {
            cbo: document.getElementById("cbo").value,
            nomeCargo: document.getElementById("nome-cargo").value,
            salario: document.getElementById("salario").value,
            cargaHoraria: document.getElementById("carga-horaria").value,
            regime: document.getElementById("regime").value
        };
    }

    // 🔹 botão salvar (create ou update)
    btnSalvar.addEventListener("click", async (e) => {
        e.preventDefault();

        const dados = pegarDadosFormulario();

        let resposta;

        if (idCargoAtual) {
            // ✏️ EDITAR
            resposta = await atualizarCargo(idCargoAtual, dados);
            console.log("Atualizado:", resposta);
        } else {
            // ➕ CRIAR
            resposta = await adicionarCargo(dados);
            console.log("Criado:", resposta);
        }

        // 🔹 atualiza tabela
        await listarCargos();
    });

    // 🔹 inicialização
    listarCargos();
    configurarEdicao();

});