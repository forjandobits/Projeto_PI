fetch("http://localhost/Projeto_PI/api/listar_funcionarios.php")
    .then(response => response.json())
    .then(dados => {

        const tbody = document.querySelector("#tabela-saida-ponto");

        tbody.innerHTML = "";

        dados.forEach(funcionario => {

            const linha = document.createElement("tr");

            const colunaNome = document.createElement("td");
            colunaNome.textContent = funcionario.nome_completo;

            const colunaBanco = document.createElement("td");
            colunaBanco.textContent = funcionario.banco_horas;

            if (parseInt(funcionario.banco_horas) < 0) {
                colunaBanco.style.color = "red";
            }

            linha.appendChild(colunaNome);
            linha.appendChild(colunaBanco);

            tbody.appendChild(linha);
        });
    })
    .catch(erro => console.error("Erro:", erro));
