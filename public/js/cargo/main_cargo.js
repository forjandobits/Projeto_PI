import { mostrarMensagem } from "../utils/mostrarMensagem.js";
import { adicionarCargo } from "./adicionar_cargo.js";
import { atualizarCargo } from "./update_cargo.js";
import { listarCargos,  configurarEdicao,  idCargoAtual, resetIdCargo, limparModalCampos } from "./exibir_cargo.js";

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
    const btnSalvar = document.querySelector("#btnsalvar");
    const exibir = document.querySelector(".modal");

    // pega dados do formulário
    function pegarDadosFormulario() {
        return {
            cbo: document.querySelector("#cbo").value,
            nomeCargo: document.querySelector("#nome-cargo").value,
            salario: document.querySelector("#salario").value,
            cargaHoraria: document.querySelector("#carga-horaria").value,
            regime: document.querySelector("#regime").value
        };
    }

    // botão salvar (create ou update)
    btnSalvar.addEventListener("click", async (e) => {
        e.preventDefault();

        const dados = pegarDadosFormulario();

        let resposta;

        if (idCargoAtual) {
            // EDITAR
            resposta = await atualizarCargo(idCargoAtual, dados);
            mostrarMensagem(resposta.mensagem, resposta.status);
            if(resposta.status === "sucesso"){
                exibir.style.display = "none";
            }

        } else {
            // CRIAR
            resposta = await adicionarCargo(dados);
            mostrarMensagem(resposta.mensagem, resposta.status);
            if(resposta.status === "sucesso"){
                exibir.style.display = "none";
            }
            
        }

        // atualiza tabela
        await listarCargos();
    });

    // inicialização
    listarCargos();
    configurarEdicao();

});