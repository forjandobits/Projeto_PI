import { exibiInformacoesEditar, editarFuncionario, carregarCargos } from './funcoes.js';
import { enviar } from '../utils/enviar.js';
import { mostrarMensagem } from '../utils/mostrarMensagem.js';


document.addEventListener('DOMContentLoaded', () => {


    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const btnSalvar = document.getElementById("btnSalvar");


    if (id) {
        exibiInformacoesEditar(id);
        
        const cabecalhoEdicao = document.querySelector(".cabecalhos>h1");
        const btnEdicao = document.querySelector(".botao-editar");
        cabecalhoEdicao.textContent = "Edição - Funcionário";
        btnEdicao.style.display = "none";

        let mensagem = "Abrindo modo de edição dos dados do Funcionário!";
        mostrarMensagem(mensagem, "sucesso");

        if (btnSalvar) {
            btnSalvar.innerText = "Atualizar";
        }
    }


    carregarCargos();
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

                const dados =  {
                    nomeCompleto: document.getElementById("nome-completo").value,
                    telefone: document.getElementById("telefone").value,
                    email: document.getElementById("email").value,
                    dataNasc: document.getElementById("data-nasc").value,
                    cpf: document.getElementById("cpf").value,
                    rg: document.getElementById("rg").value,
                    genero: document.getElementById("genero").value,
                    estadoCivil: document.getElementById("estado-civil").value,
                    rua: document.getElementById("rua").value,
                    numeroCasa: document.getElementById("numero-casa").value,
                    complemento: document.getElementById("complemento").value,
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
                    cnh: document.getElementById("cnh").checked,
                    pisPasep: document.getElementById("pis-pasep").value,
                    nis: document.getElementById("nis").value,
                    nit: document.getElementById("nit").value,
                    ctps: document.querySelector("#ctps").value,
                    filhos: document.getElementById("filhos").checked,
                    num_filhos: document.querySelector("#qtd-filhos").value
                };

                const resposta = await fetch(`${BASE_URL}/api/funcionarios/criar_funcionario.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dados)
                });

                console.log(resposta);

                if (resposta.ok === true) {
                    mostrarMensagem("Funcionário cadastrado com sucesso!", "sucesso");
                    e.target.reset();
                    window.location.href = "colaboradores.php";
                } else {
                    mostrarMensagem("Erro ao cadastrar o funcionário!", "erro");
                }
            }
        } catch (erro) {
            console.log(erro);
            mostrarMensagem("Erro inesperado ao salvar o funcionário.", "erro");
        }


    });


});
