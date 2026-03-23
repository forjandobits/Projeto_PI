
// Importa a função de enviar
// import { enviar } from "./utils/enviar.js";
import { enviar } from "../utils/enviar.js";

// Recomendo colocar para só carregar o JS depois de apresentar a página (torna carregamento mais rápido)
document.addEventListener("DOMContentLoaded", () => {
    // Pega os botões da página
    const btnSalvar = document.getElementById("btnsalvar");

    // Colocar evento no botão btnFuncionario, tem q ser com função async para usar await ao chamar enviar
    btnSalvar.addEventListener("click", async (e) => {
        // Tem que bloquear o evento padrão (submit) se não recarrega a página e quebra o resto
        e.preventDefault();
        
        // Pega as entradas da página
        const cbo = document.getElementById("cbo").value;
        const nomeCargo = document.getElementById("nome-cargo").value;
        const salario = document.getElementById("salario").value;
        const cargaHoraria = document.getElementById("carga-horaria").value;
        const regime = document.getElementById("regime").value;
        const escala = document.getElementById("escala").value;

        // Usa a função enviar() para enviar a requisição pro PHP, enviar() tem que ser chamada com await, usa BASE_URL pra poder pegar o caminho certo
        const resposta = await enviar(`${BASE_URL}/api/criar_cargo.php`, {cbo: cbo, nomeCargo: nomeCargo, salario: salario, cargaHoraria: cargaHoraria,
            regime: regime, escala: escala});


        
        // alert("Dados salvos com sucesso!");
        function salvar(){

            // código para enviar para PHP
            alert("Salvo com sucesso!");
            document.getElementById("formModal").reset();
            document.getElementById("modal").style.display = "none";
        }
        salvar();

    
    });

    
});