import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", async () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaErros = document.querySelector("#saida-erros");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    tabela.textContent = "";

    if (id != null && id != "") {    
        const resposta = await enviar(`${BASE_URL}/api/folha-ponto/espelho_ponto.php`, {id: id});
        console.log(resposta);
    } else {
        saidaErros.style.color = "red";
        saidaErros.textContent = "Acesso inapropriado, por favor acesse a página pelo controle de ponto";
    }
});