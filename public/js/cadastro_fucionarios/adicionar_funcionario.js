
// Importa a função de enviar
// import { enviar } from "./utils/enviar.js";
import { enviar } from "../utils/enviar.js";


// Carregar cargos no select
async function carregarCargos() {
    const response = await fetch("api/listar_cargos.php");
    const cargos = await response.json();

    const select = document.getElementById("cargo");

    cargos.forEach(cargo => {
        const option = document.createElement("option");
        option.value = cargo.id_cargo;
        option.textContent = cargo.nome_cargo;
        select.appendChild(option);
    });
}

// Quando selecionar um cargo
document.getElementById("cargo").addEventListener("change", async function () {
    const id = this.value;

    if (!id) return;

    const response = await fetch(`api/buscar_cargo.php?id=${id}`);
    const dados = await response.json();

    // Preencher os campos
    document.getElementById("cbo").value = dados.cbo || "";
    document.getElementById("regime").value = dados.regime_trabalhista || "";
    document.getElementById("remuneracao").value = dados.salario || "";
});

// Executa ao carregar a página
carregarCargos();


// Recomendo colocar para só carregar o JS depois de apresentar a página (torna carregamento mais rápido)
document.addEventListener("DOMContentLoaded", () => {
    // Pega os botões da página
    const btnSalvar = document.getElementById("btnSalvar");

    // Colocar evento no botão btnFuncionario, tem q ser com função async para usar await ao chamar enviar
    btnSalvar.addEventListener("click", async (e) => {
        // Tem que bloquear o evento padrão (submit) se não recarrega a página e quebra o resto
        e.preventDefault();

        const cargo = document.getElementById("cargo").value;

        if (!cargo) {
            alert("Selecione um cargo!");
            return;
    }
        
        // Pega as entradas da página
        const nomeCompleto = document.getElementById("nome-completo").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const dataNasc = document.getElementById("data-nasc").value;
        const cpf = document.getElementById("cpf").value;
        const rg = document.getElementById("rg").value;
        const genero = document.getElementById("genero").value;
        const estadoCivil = document.getElementById("estado-civil").value;
        const rua = document.getElementById("rua").value;
        const numeroCasa = document.getElementById("numero-casa").value;
        const bairro = document.getElementById("bairro").value;
        const cidade = document.getElementById("cidade").value;
        const estado = document.getElementById("estado").value;
        const cep = document.getElementById("cep").value;
        // const cargo = document.getElementById("cargo").value;
        const cbo = document.getElementById("cbo").value;
        const regime = document.getElementById("regime").value;
        const remuneracao = document.getElementById("remuneracao").value;
        const banco = document.getElementById("banco").value;
        const agencia = document.getElementById("agencia").value;
        const numeroConta = document.getElementById("numero-conta").value;
        const chavePix = document.getElementById("chave-pix").value;
        const nis = document.getElementById("nis").value;
        const nit = document.getElementById("nit").value;
        const ctps = document.getElementById("ctps").value;
        const pisPasep = document.getElementById("pis-pasep").value;
        const certidaoCasamento = document.getElementById("certidao-casamento").checked;
        const pcd = document.getElementById("pcd").checked;
        const cam = document.getElementById("cam").checked;
        const filhos = document.getElementById("filhos").checked;
        const qtdFilhos = document.getElementById("qtd-filhos").value;
        
        // const arquivos = document.getElementById("arquivos").value;



        // Usa a função enviar() para enviar a requisição pro PHP, enviar() tem que ser chamada com await, usa BASE_URL pra poder pegar o caminho certo
        const resposta = await enviar(`${BASE_URL}/api/criar_funcionario.php`, {nomeCompleto: nomeCompleto, telefone: telefone, email: email, dataNasc: dataNasc, cpf: cpf, rg: rg, genero: genero,
            estadoCivil: estadoCivil, pisPasep: pisPasep, nis: nis, nit: nit, ctps: ctps, rua: rua, numeroCasa: numeroCasa, bairro: bairro, cidade: cidade, estado: estado, cep: cep, cargo: cargo, cbo: cbo, regime: regime,
            remuneracao: remuneracao, banco: banco, agencia: agencia, numeroConta: numeroConta, chavePix: chavePix, certidaoCasamento: certidaoCasamento, pcd: pcd, cam: cam, 
            filhos: filhos, qtdFilhos: qtdFilhos});



        


        
        // alert("Dados salvos com sucesso!");
        function salvar(){

            // código para enviar para PHP
            alert("Salvo com sucesso!");
            document.getElementById("formModal").reset();
            window.location.href = "colaboradores.php"
        }
        salvar();

        
        // Mostra a requisição no terminal
        // Só pra visualização, não faça isso
        console.log(resposta);
        console.log(resposta.mensagem);
    });

    
});