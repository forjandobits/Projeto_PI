import { enviar } from "../utils/enviar.js";

enviar(`${BASE_URL}./api/folha-ponto/listar_funcionarios.php`, {})
    .then(dados => {
        console.log(dados);

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

            //const link = document.createElement("a");
            //link.href = "espelho_de_ponto.php?id=" + funcionario.id_funcionario;

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


    })
    .catch(erro => console.error("Erro:", erro));

function verEspelho(id) {
    window.location.href = `espelho_de_ponto.php?id=${id}`;
};