import { enviar } from "../utils/enviar.js";

export async function carregarPontos(id, mes, tabela, saidaMensagens, saidaNome) {
    const exibir = document.querySelector(".modal");
    const informacoesPonto = document.querySelector("#informacoes-ponto");
    const horaEntrada = document.querySelector("#hora-entrada");
    const intervaloSaida = document.querySelector("#intervalo-saida");
    const intervaloRetorno = document.querySelector("#intervalo-retorno");
    const horaSaida = document.querySelector("#hora-saida");
    const campoSaldo = document.querySelector("#saldo_mes");
    //Isis
    /*    const hoje = new Date();
       const mesAtual = hoje.toISOString().slice(0,7);
       const campoMes = document.querySelector("#data-mes-ano");
       campoMes.value = mesAtual; */
    //fim Isis
    let resposta = {};
    let dados = [];
    let id_funcionario = 0;
    let id_jornada = 0;
    let id_ponto = 0;
    let linha = "";
    let coluna = "";
    let saldo_acumulado = "";

    tabela.textContent = "";

    if (id != null && id != "") {
        dados = [];

        resposta = await enviar(`${BASE_URL}/api/folha-ponto/espelho_ponto.php`, { id: id, mes: mes });

        console.log("Resposta completa:", resposta);

        dados = resposta.resposta || [];
        saldo_acumulado = resposta.saldo_acumulado || "00:00:00";

        campoSaldo.textContent = `Banco de Horas(*): ${saldo_acumulado}`;

        // if (campoSaldo) {
        //     campoSaldo.textContent = saldo_mes;
        // }

        //se nao tiver registros no mes corrente
        if (!dados || dados.length === 0) {
            tabela.innerHTML = "<tr><td colspan='11'>Nenhum registro encontrado</td></tr>";
            return;
        }

        saidaNome.textContent = `Espelho de Ponto - ${dados[0].nome_completo}`;

        dados.forEach(resultado => {
            id_funcionario = resultado.id_funcionario;
            id_jornada = resultado.id_jornada;
            id_ponto = resultado.id_ponto;

            linha = document.createElement("tr");
            linha.id = id_jornada;

            coluna = document.createElement("td");
            coluna.textContent = resultado.data.split('-').reverse().join('/');
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.dia_semana;
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.hora_entrada;
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.hora_saida;
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.intervalo_inicio;
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.intervalo_fim;
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.total_intervalo;
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            if (resultado.faltas == null) {
                coluna.textContent = "Não";
            } else {
                coluna.textContent = "Sim";
            }
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = "Não";
            linha.appendChild(coluna);

            coluna = document.createElement("td");
            coluna.textContent = resultado.total_horas_dia;
            linha.appendChild(coluna);

            let btn = document.createElement("button");
            btn.textContent = "...";
            btn.className = "abrir-modal"

            btn.addEventListener("click", async () => {
                saidaMensagens.textContent = "";
                exibir.style.display = "flex";

                resposta = await enviar(`${BASE_URL}/api/folha-ponto/buscar_jornada.php`, { id_funcionario: id_funcionario, id_jornada: id_jornada });

                dados = resposta.resposta[0];

                informacoesPonto.textContent = `${dados["data"].split('-').reverse().join('/')} - ${dados["dia_semana"]}`;
                informacoesPonto.dataset.id_funcionario = id_funcionario;
                informacoesPonto.dataset.id_jornada = id_jornada;
                informacoesPonto.dataset.id_ponto = id_ponto;
                horaEntrada.value = dados["hora_entrada"];
                intervaloSaida.value = dados["intervalo_inicio"];
                intervaloRetorno.value = dados["intervalo_fim"];
                horaSaida.value = dados["hora_saida"];
            });

            coluna = document.createElement("td");
            coluna.appendChild(btn);
            linha.appendChild(coluna);

            tabela.appendChild(linha);
        });
    } else {
        saidaMensagens.style.color = "red";
        saidaMensagens.textContent = "Acesso inapropriado, por favor acesse a página pelo controle de ponto";
    }
}

export async function editarPonto(saidaMensagens) {
    const exibir = document.querySelector(".modal");
    const informacoesPonto = document.querySelector("#informacoes-ponto");
    const horaEntrada = document.querySelector("#hora-entrada");
    const intervaloSaida = document.querySelector("#intervalo-saida");
    const intervaloRetorno = document.querySelector("#intervalo-retorno");
    const horaSaida = document.querySelector("#hora-saida");
    const feriasFaltaAbonada = document.querySelector("#ferias-falta-abonada");
    let idFuncionario = informacoesPonto.dataset.id_funcionario;
    let idJornada = informacoesPonto.dataset.id_jornada;
    let idPonto = informacoesPonto.dataset.id_ponto;
    let resposta = {};
    let dados = [];

    resposta = await enviar(`${BASE_URL}/api/folha-ponto/editar_ponto.php`, { id_funcionario: idFuncionario, id_jornada: idJornada, id_ponto: idPonto, hora_entrada: horaEntrada.value, hora_saida: horaSaida.value, intervalo_inicio: intervaloSaida.value, intervalo_fim: intervaloRetorno.value, ferias_falta: feriasFaltaAbonada.value });

    dados = resposta.resposta;

    exibir.style.display = "none";
    saidaMensagens.style.color = "green";
    saidaMensagens.textContent = dados;
}

export async function fecharMes(id, mesReferencia, saidaMensagens) {
    let resposta = {};

    resposta = await enviar(`${BASE_URL}/api/folha-ponto/fechar_pontos.php`, { id_funcionario: id, mes_fechar: mesReferencia });

    if (resposta["status"] == "sucesso") {
        saidaMensagens.style.color = "green";
        saidaMensagens.textContent = resposta["resposta"];
    } else {
        saidaMensagens.style.color = "red";
        saidaMensagens.textContent = resposta["resposta"];
    }
}