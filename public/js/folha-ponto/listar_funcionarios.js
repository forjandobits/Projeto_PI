import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", async () => {
    const filtro = document.querySelector("#filtro");
    const dados = await enviar(`${BASE_URL}./api/folha-ponto/listar_funcionarios.php`, {});

    listarPontos(dados);

    filtro.addEventListener("input", () => {
        let pesquisa = filtro.ariaValueMax.toLowerCase();

    })

});

function verEspelho(id) {
    window.location.href = `espelho_de_ponto.php?id=${id}`;
};

function listarPontos(dados) {
    const tbody = document.querySelector("#tabela-saida-ponto");

    tbody.innerHTML = "";

    dados.forEach(funcionario => {


        const linha = document.createElement("tr");

        const colunaNome = document.createElement("td");
        colunaNome.textContent = funcionario.nome_completo;

        const colunaBanco = document.createElement("td");
        colunaBanco.textContent = funcionario.saldo_mes;

        const colunaSituacao = document.createElement("td");
        colunaSituacao.textContent = funcionario.situacao;

        if (parseInt(funcionario.saldo_mes) < 0) {
            colunaBanco.style.color = "red";
        }
        const colunaBotao = document.createElement("td");

        const botao = document.createElement("button");
        botao.textContent = "Visualizar";

        botao.addEventListener("click", () => {
            verEspelho(funcionario.id_funcionario);

        })


        colunaBotao.appendChild(botao);

        linha.appendChild(colunaNome);
        linha.appendChild(colunaBanco);
        linha.appendChild(colunaSituacao);
        linha.appendChild(colunaBotao);


        tbody.appendChild(linha);

    });
}