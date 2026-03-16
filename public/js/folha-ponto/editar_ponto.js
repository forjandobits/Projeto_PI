import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const exibir = document.querySelector(".modal");

    const observador = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            const btnsEditarPonto = document.querySelectorAll(".abrir-modal");

            btnsEditarPonto.forEach((btn) => {
                btn.addEventListener("click", async () => {
                    exibir.style.display = "flex";
                    const id_funcionario = btn.dataset.id_funcionario;
                    const id_jornada = btn.dataset.id_jornada;

                    const resposta = await enviar(`${BASE_URL}/api/folha-ponto/buscar_ponto.php`, { id_funcionario: id_funcionario, id_jornada: id_jornada });

                    const dados = resposta.resposta[0];

                    const informacoesPonto = document.querySelector("#informacoes-ponto");
                    const horaEntrada = document.querySelector("#hora-entrada");
                    const intervaloSaida = document.querySelector("#intervalo-saida");
                    const intervaloRetorno = document.querySelector("#intervalo-retorno");
                    const horaSaida = document.querySelector("#hora-saida");

                    informacoesPonto.textContent = `${dados["data"].split('-').reverse().join('/')} - ${dados["dia_semana"]}`;
                    horaEntrada.value = dados["hora_entrada"];
                    intervaloSaida.value = dados["intervalo_inicio"];
                    intervaloRetorno.value = dados["intervalo_fim"];
                    horaSaida.value = dados["hora_saida"];
                })
            })
        });
    })

    const config = {
        childList: true
    }

    observador.observe(tabela, config);
})