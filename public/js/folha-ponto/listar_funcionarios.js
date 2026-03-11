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
            const colunaBotao = document.createElement("td");

            //const link = document.createElement("a");
            //link.href = "espelho_de_ponto.php?id=" + funcionario.id_funcionario;

            const botao = document.createElement("button");
            botao.textContent = "Visualizar";

            botao.addEventListener("click",() => {                
                verEspelho(funcionario.id_funcionario);
                
            })

//            link.appendChild(botao);
            colunaBotao.appendChild(botao);

            linha.appendChild(colunaNome);
            linha.appendChild(colunaBanco);
            linha.appendChild(colunaSituacao);
            linha.appendChild(colunaBotao);
           

            tbody.appendChild(linha);
            
        });
        
        
    })
    .catch(erro => console.error("Erro:", erro));

    function verEspelho(id){
        /* console.log("ID:", id);   
        enviar(`${BASE_URL}/api/folha-ponto/espelho_ponto.php`, {id})
        .then(dados => {

        if(dados.status === "sucesso"){
            console.log(dados.resposta);
        } */
        window.location.href = `espelho_de_ponto.php?id=${id}`;
    };
