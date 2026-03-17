import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", async () => {
    const hoje = new Date();
    const mesAtual = hoje.toISOString().slice(0,7);
    const campoMes = document.querySelector("#data-mes-ano");
    campoMes.value = mesAtual;
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaErros = document.querySelector("#saida-erros");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    //console.log("ID recebido da URL:", id);
    const exibir = document.querySelector(".modal");

    // função para carregar os dados do espelho de ponto
    
    async function carregarEspelho() {

    tabela.innerHTML = "";

    let resposta = await enviar(`${BASE_URL}/api/espelho_ponto.php`, {
        id: id,
        mes: campoMes.value
    });

    let dados = resposta.resposta;

    if (!dados || dados.length === 0) {
        tabela.innerHTML = "<tr><td colspan='11'>Nenhum registro encontrado</td></tr>";
        return;
    }

    saidaNome.textContent = dados[0].nome_completo;

    dados.forEach(resultado => {

        let linha = document.createElement("tr");
        linha.id = resultado.id_jornada;

        linha.innerHTML = `
            <td>${resultado.data}</td>
            <td>${resultado.dia_semana}</td>
            <td>${resultado.hora_entrada}</td>
            <td>${resultado.hora_saida ?? ""}</td>
            <td>${resultado.intervalo_inicio ?? ""}</td>
            <td>${resultado.intervalo_fim ?? ""}</td>
            <td>${resultado.total_intervalo ?? ""}</td>
            <td>${resultado.faltas == null ? "Não" : "Sim"}</td>
            <td>Não</td>
            <td>${resultado.total_horas_dia}</td>
            <td><button class="abrir-modal">...</button></td>
        `;

        linha.querySelector(".abrir-modal").addEventListener("click", () => {
            exibir.style.display = "flex";
        });

        tabela.appendChild(linha);

    });

}
    
    if (id != null && id != "") {

    await carregarEspelho();   

    campoMes.addEventListener("change", () => {
        carregarEspelho();
    });
    } else {
        saidaErros.style.color = "red";
        saidaErros.textContent = "Acesso inapropriado, por favor acesse a página pelo controle de ponto";
    } 
});