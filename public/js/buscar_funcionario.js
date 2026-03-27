import {enviar} from "./utils/enviar.js"

document.addEventListener("DOMContentLoaded", ()=>{
    const filtro = document.querySelector("#filtro-funcionario-ponto")

    filtro.addEventListener("input", async()=>{
        const valor = filtro.value
        const resposta = await enviar(`${BASE_URL}/api/folha-ponto/buscar_funcionario.php`, {pesquisa: valor})
    })
})