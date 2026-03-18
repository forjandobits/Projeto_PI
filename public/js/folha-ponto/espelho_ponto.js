import { carregarPontos, editarPonto } from "./funcoes_espelho_ponto.js";

document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaNome = document.querySelector("#saida-nome-funcionario-espelho-ponto");
    const saidaMensagens = document.querySelector("#saida-erros");
    const btnSalvarPonto = document.querySelector("#btn-editar-ponto");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    //isis
    const campoMes = document.querySelector("#data-mes-ano");
    const hoje = new Date();
    campoMes.value = hoje.toISOString().slice(0,7);
    //fim isis

    carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);

    campoMes.addEventListener("change", () => {
        carregarPontos(id, campoMes.value, tabela, saidaMensagens, saidaNome);
    });
    

    btnSalvarPonto.addEventListener("click", (e) => {
        e.preventDefault();

        editarPonto(saidaMensagens);

        carregarPontos(id, tabela, saidaMensagens, saidaNome);
        
    });
       /*  async function carregarEspelho() {

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
    }  */
});
