import { enviar } from "../utils/enviar.js";


enviar(`${BASE_URL}./api/listar_funcionarios.php`, {})
    .then(dados => {

        const tbody = document.querySelector("#tabela-saida-ponto");

        tbody.innerHTML = "";

        dados.forEach(funcionario => {

            const linha = document.createElement("tr");

            const colunaNome = document.createElement("td");
            colunaNome.textContent = funcionario.nome_completo;

            const colunaBanco = document.createElement("td");
            colunaBanco.textContent = funcionario.diferenca_horas;

            const colunaSituacao = document.createElement("td");
            colunaSituacao.textContent = funcionario.situacao;

            if (parseInt(funcionario.diferenca_horas) < 0) {
                colunaBanco.style.color = "red";
            }

            linha.appendChild(colunaNome);
            linha.appendChild(colunaBanco);
            linha.appendChild(colunaSituacao);

            tbody.appendChild(linha);
        });
    })
    .catch(erro => console.error("Erro:", erro));
