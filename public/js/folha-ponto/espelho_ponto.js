import { enviar } from "../utils/enviar.js";

document.addEventListener("DOMContentLoaded", async () => {
    const tabela = document.querySelector("#tabela-saida-espelho-ponto");
    const saidaErros = document.querySelector("#saida-erros");
    const url = window.location.href.toString();
    const id = url.slice(url.indexOf("?") + 1)

    tabela.textContent = "";

    if (url === id) {
        saidaErros.style.color = "red";
        saidaErros.textContent = "Acesso inapropriado, por favor acesse a página pelo controle de ponto";
    } else {
        const resposta = await enviar(`${BASE_URL}/api/folha-ponto/espelho_ponto.php`, {id: id});
        
        console.log(await resposta);
    }

});