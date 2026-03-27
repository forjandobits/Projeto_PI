 import { exibiInformacoesEditar, editarFuncionario } from './funcoes.js';
import { enviar } from '../utils/enviar.js';
import { mostrarMensagem } from '../utils/mostrarMensagem.js';


document.addEventListener('DOMContentLoaded', () => {


    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const btnSalvar = document.getElementById("btnSalvar");


    if (id) {
        exibiInformacoesEditar(id);


        if (btnSalvar) {
            btnSalvar.innerText = "Atualizar";
        }
    }


    // Event delegation: o form pode ser criado dinamicamente
    document.addEventListener("submit", async (e) => {


        // Se o form não for o formModal, ignora
        if (!e.target.matches("#formModal")) return;


        e.preventDefault();


        try {
            if (id) {
                // Edição
                await editarFuncionario(id);
            } else {
                // Criação de novo funcionário
                const resposta = await enviar(`${BASE_URL}/api/criar_funcionario.php`, {
                    nomeCompleto: document.getElementById("nome-completo").value,
                    telefone: document.getElementById("telefone").value,
                    email: document.getElementById("email").value,
                    dataNasc: document.getElementById("data-nasc").value,
                    cpf: document.getElementById("cpf").value,
                    rg: document.getElementById("rg").value,
                    genero: document.getElementById("genero").value,
                    estadoCivil: document.getElementById("estado-civil").value,
                    pisPasep: document.getElementById("pis-pasep").value,
                    rua: document.getElementById("rua").value,
                    numeroCasa: document.getElementById("numero-casa").value,
                    bairro: document.getElementById("bairro").value,
                    cidade: document.getElementById("cidade").value,
                    estado: document.getElementById("estado").value,
                    cep: document.getElementById("cep").value,
                    cargo: document.getElementById("cargo").value,
                    cbo: document.getElementById("cbo").value,
                    regime: document.getElementById("regime").value,
                    remuneracao: document.getElementById("remuneracao").value,
                    banco: document.getElementById("banco").value,
                    agencia: document.getElementById("agencia").value,
                    numeroConta: document.getElementById("numero-conta").value,
                    chavePix: document.getElementById("chave-pix").value,
                    certidaoCasamento: document.getElementById("certidao-casamento").checked,
                    pcd: document.getElementById("pcd").checked,
                    cam: document.getElementById("cam").checked,
                    filhos: document.getElementById("filhos").checked,
                    qtdFilhos: document.getElementById("qtd-filhos").value
                });


                if (resposta.status === "ok") {
                    mostrarMensagem(resposta.mensagem, "sucesso");
                    e.target.reset();
                } else {
                    mostrarMensagem(resposta.mensagem, "erro");
                }
            }
        } catch (erro) {
            console.error(erro);
            mostrarMensagem("Erro inesperado ao salvar o funcionário.", "erro");
        }


    });


});
