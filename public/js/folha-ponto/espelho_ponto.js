import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaMensagens = document.querySelector("#saida-erros");
    const btnSalvarPonto = document.querySelector("#btn-editar-ponto");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    carregarPontos(id, tabela, saidaMensagens, saidaNome);

    btnSalvarPonto.addEventListener("click", (e) => {
        e.preventDefault();

        editarPonto(saidaMensagens);

        carregarPontos(id, tabela, saidaMensagens, saidaNome);
    });
});

async function carregarPontos(id, tabela, saidaMensagens, saidaNome) {
    const exibir = document.querySelector(".modal");
    const informacoesPonto = document.querySelector("#informacoes-ponto");
    const horaEntrada = document.querySelector("#hora-entrada");
    const intervaloSaida = document.querySelector("#intervalo-saida");
    const intervaloRetorno = document.querySelector("#intervalo-retorno");
    const horaSaida = document.querySelector("#hora-saida");
    let resposta = {};
    let dados = [];
    let id_funcionario = 0;
    let id_jornada = 0;
    let linha = "";
    let coluna = "";

    tabela.textContent = "";

    if (id != null && id != "") {
        resposta = await enviar(`${BASE_URL}/api/folha-ponto/espelho_ponto.php`, { id: id });

        dados = resposta.resposta;

        saidaNome.textContent = `Espelho de Ponto - ${dados[0].nome_completo}`;

        dados.forEach(resultado => {
            id_funcionario = resultado.id_funcionario;
            id_jornada = resultado.id_jornada;

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

                resposta = await enviar(`${BASE_URL}/api/folha-ponto/buscar_ponto.php`, { id_funcionario: id_funcionario, id_jornada: id_jornada });

                dados = resposta.resposta[0];

                informacoesPonto.textContent = `${dados["data"].split('-').reverse().join('/')} - ${dados["dia_semana"]}`;
                informacoesPonto.dataset.id_funcionario = id_funcionario;
                informacoesPonto.dataset.id_jornada = id_jornada;
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

async function editarPonto(saidaMensagens) {
    const exibir = document.querySelector(".modal");
    const informacoesPonto = document.querySelector("#informacoes-ponto");
    const horaEntrada = document.querySelector("#hora-entrada");
    const intervaloSaida = document.querySelector("#intervalo-saida");
    const intervaloRetorno = document.querySelector("#intervalo-retorno");
    const horaSaida = document.querySelector("#hora-saida");
    let idFuncionario = informacoesPonto.dataset.id_funcionario;
    let idJornada = informacoesPonto.dataset.id_jornada;
    let resposta = {};
    let dados = [];

    resposta = await enviar(`${BASE_URL}/api/folha-ponto/editar_ponto.php`, {id_funcionario: idFuncionario, id_jornada: idJornada, hora_entrada: horaEntrada.value, hora_saida: horaSaida.value, intervalo_inicio: intervaloSaida.value, intervalo_fim: intervaloRetorno.value});

    dados = resposta.resposta;
    
    exibir.style.display = "none";
    saidaMensagens.style.color = "green";
    saidaMensagens.textContent = dados;
}