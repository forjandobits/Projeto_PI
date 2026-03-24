document.addEventListener('DOMContentLoaded', function () {

    async function listarCargos() {
        const respostaExibirCargo = await fetch(`${BASE_URL}/api/funcionarios/exibir_cargo.php`);
        const cargos = await respostaExibirCargo.json();

        const tabelaCargo = document.querySelector('#tabela-saida-cargos')
        if (tabelaCargo) {

            cargos.forEach(cargo => {
                const novaCelulaCargo = tabelaCargo.insertRow();

                const id_cargo = cargo.id_cargo;
                const cbo = novaCelulaCargo.insertCell();
                const nomeCargo = novaCelulaCargo.insertCell();
                const salario = novaCelulaCargo.insertCell();
                const cargaHoraria = novaCelulaCargo.insertCell();
                const regime = novaCelulaCargo.insertCell();
                const escala = novaCelulaCargo.insertCell();
                const editar = novaCelulaCargo.insertCell();

                cbo.textContent = cargo.cbo;
                nomeCargo.textContent = cargo.nome_cargo;
                salario.textContent = cargo.salario;
                cargaHoraria.textContent = cargo.carga_horaria;
                regime.textContent = cargo.regime_trabalhista;
                escala.textContent = cargo.escala;


                editar.innerHTML = `<button class='abrir-modal' id='${id_cargo}'>Editar</button>`;
            })
        }
    }

    async function exibiInformacoes(){
        let idCargo;
        document.addEventListener("click", async function(e) {
            
            if (e.target.classList.contains("abrir-modal")){
                const exibir = document.querySelector(".modal");
                exibir.style.display = "flex";

                const respotaCargo = await fetch(`${BASE_URL}/api/funcionarios/exibir_cargo.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_cargo: e.target.id
                    })
                })

                idCargo = e.target.id;

                const dadosCargo = await respotaCargo.json();
                const cbo = document.querySelector('#cbo')


                dadosCargo.forEach(dados =>{
                    cbo.value = dados.cbo;
                })
            }
            const botaoEditar = e.target.closest(".botao-editar");

            if (botaoEditar) {

                e.preventDefault();
                window.location.href = `./cargos?id=${idCargo}`;
            }
        });
        
    }

    listarCargos();
    exibiInformacoes();
})