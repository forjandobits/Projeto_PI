document.addEventListener('DOMContentLoaded', function(){
    async function listarFuncionarios() {
        const respostaExibir = await fetch(`${BASE_URL}/api/funcionarios/exibir_lista_funcionarios.php`);
        const funcionarios = await respostaExibir.json();

        const tabelaFuncionario = document.querySelector('#tabela-saida-colaboradores');
        if(tabelaFuncionario){
            // tabelaFuncionario.innerHTML = "";

            funcionarios.forEach(funcionario =>{
                const novaCelulaFuncionario = tabelaFuncionario.insertRow();

                const id = funcionario.id_funcionario;
                const nome = novaCelulaFuncionario.insertCell();
                const cargo = novaCelulaFuncionario.insertCell();
                const situacao = novaCelulaFuncionario.insertCell();
                const desligar = novaCelulaFuncionario.insertCell();
                const visualizar = novaCelulaFuncionario.insertCell();

                nome.textContent = funcionario.nome_completo;
                cargo.textContent = funcionario.nome_cargo;
                
                if (funcionario.situacao == 1){
                    situacao.textContent = 'ATIVO'
                }else{
                    situacao.textContent = 'DESLIGADO'
                }

                desligar.innerHTML = "<button class='desligar'>Desligar</button>";
                visualizar.innerHTML = `<button class='abrir-modal' id='${id}'>Visualizar</button>`;
            });
        }
    }

    async function exibiInformacoes(){
        document.addEventListener("click", async function(e) {
            if (e.target.classList.contains("abrir-modal")){
                const exibir = document.querySelector(".modal");
                exibir.style.display = "flex";

                const respotaFuncionario = await fetch(`${BASE_URL}/api/funcionarios/exibir_dados_funcionario.php`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id_funcionario: e.target.id
                    })
                })

                const dadosFuncionario = await respotaFuncionario.json();

                const nomeCompleto = document.querySelector('#nome-completo');
                const telefone = document.querySelector('#telefone');
                const email = document.querySelector('#email');
                const dataNasc = document.querySelector('#data-nasc');
                const cpf = document.querySelector('#cpf');
                const rg = document.querySelector('#rg');
                // const genero = document.querySelector('#genero');
                // const telefone = document.querySelector('#telefone');
                
                dadosFuncionario.forEach(dados =>{
                    nomeCompleto.value = dados.nome_completo;
                    telefone.value = dados.telefone;
                    email.value = dados.email
                    dataNasc.value = dados.data_nascimento
                    cpf.value = dados.cpf
                    rg.value = dados.rg
                })
            }
        
        });
    }

   async function desligar(){
            document.addEventListener("click", function(e) {
        if (e.target.classList.contains("desligar")) {
            alert("Clicou!");
                }
            });
    }

listarFuncionarios();
exibiInformacoes();
desligar();
});