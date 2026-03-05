document.addEventListener('DOMContentLoaded', function(){
    async function listarFuncionarios() {
        const respostaExibir = await fetch(`${BASE_URL}/api/funcionarios/exibir.php`);
        const funcionarios = await respostaExibir.json();

        const tabelaFuncionario = document.querySelector('#tabela-saida-colaboradores');
        if(tabelaFuncionario){
            // tabelaFuncionario.innerHTML = "";

            funcionarios.forEach(funcionario =>{
                const novaCelulaFuncionario = tabelaFuncionario.insertRow();
                console.log(funcionario);

                const nome = novaCelulaFuncionario.insertCell();
                const cargo = novaCelulaFuncionario.insertCell();
                const situacao = novaCelulaFuncionario.insertCell();
                const desligar = novaCelulaFuncionario.insertCell();
                const visualizar = novaCelulaFuncionario.insertCell();

                nome.textContent = funcionario.nome_completo;
                cargo.textContent = funcionario.nome_cargo;
                // situacao.textContent = funcionario.situacao;
                
                if (funcionario.situacao == 1){
                    situacao.textContent = 'ATIVO'
                }else{
                    situacao.textContent = 'DESLIGADO'
                }

                desligar.innerHTML = "<button class='desligar'>Desligar</button>";
                visualizar.innerHTML = "<button class='abrir-modal'>Visualizar</button>";
            });
        }
    }

    async function exibiInformacoes(){
        document.addEventListener("click", function(e) {
            if (e.target.classList.contains("abrir-modal")){
                    const exibir = document.querySelector(".modal");
                    exibir.style.display = "flex";
                    }
                });
    }

   async function desligar(){
        // const respostaAtualizar = await fetch("public/js/cadastro_funcionarios/atualizar.php");
        // const funcionarios = await respostaAtualizar.json();
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