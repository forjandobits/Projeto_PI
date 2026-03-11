import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", async () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaErros = document.querySelector("#saida-erros");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    //console.log("ID recebido da URL:", id);
    const exibir = document.querySelector(".modal");

    tabela.textContent = "";

    if (id != null && id != "") {    
        //console.log("Chamando API com id:", id);

        let resposta = await enviar(`${BASE_URL}/api/folha-ponto/espelho_ponto.php`, {id: id});
        //console.log("Resposta da API:", resposta);
        
        
        let dados = resposta.resposta;

        //console.log("Dados recebidos:", dados);

        saidaNome.textContent += dados[0].nome_completo;

        console.log(dados[0]);

        dados.forEach(resultado => {
            let linha = document.createElement("tr");
            linha.id = resultado.id_jornada;

            let colData = document.createElement("td");
            colData.textContent = resultado.data;
            linha.appendChild(colData);

            let colSemana = document.createElement("td");
            colSemana.textContent = resultado.dia_semana;
            linha.appendChild(colSemana);

            let colEntrada = document.createElement("td");
            colEntrada.textContent = resultado.hora_entrada;
            linha.appendChild(colEntrada);

            let colSaida = document.createElement("td");
            colSaida.textContent = resultado.hora_saida;
            linha.appendChild(colSaida);

            let colInterSaida = document.createElement("td");
            colInterSaida.textContent = resultado.intervalo_inicio;
            linha.appendChild(colInterSaida);

            let colInterRetorno = document.createElement("td");
            colInterRetorno.textContent = resultado.intervalo_fim;
            linha.appendChild(colInterRetorno);

            let colTotalInter = document.createElement("td");
            colTotalInter.textContent = resultado.total_intervalo;
            linha.appendChild(colTotalInter);

            let colFalta = document.createElement("td");
            if (resultado.faltas == null) {
                colFalta.textContent = "Não";
            } else {
                colFalta .textContent = "Sim";
            }
            linha.appendChild(colFalta);

            let colFeriasAbono = document.createElement("td");
            colFeriasAbono.textContent = "Não";
            linha.appendChild(colFeriasAbono);

            let colTotalHoras = document.createElement("td");
            colTotalHoras.textContent = resultado.total_horas_dia;
            linha.appendChild(colTotalHoras);

            let btn = document.createElement("button");
            btn.textContent = "...";
            btn.className = "abrir-modal"
            btn.addEventListener("click", () => {
                exibir.style.display = "flex";
            });

            let colBtn = document.createElement("td");
            colBtn.appendChild(btn);
            linha.appendChild(colBtn);

            tabela.appendChild(linha);
        });
    } else {
        saidaErros.style.color = "red";
        saidaErros.textContent = "Acesso inapropriado, por favor acesse a página pelo controle de ponto";
    }
});