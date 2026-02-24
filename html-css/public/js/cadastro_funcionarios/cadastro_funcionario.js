// document.addEventListener('DOMContentLoaded', function(){
    async function listarFuncionarios() {
        const resposta = await fetch("public/js/cadastro_funcionarios/resposta.php");
        const funcionarios = await resposta.json();

        const tabelaFuncionario = document.querySelector('#tabela-saida-colaboradores');
        if(tabelaFuncionario){
            tabelaFuncionario.innerHTML = "";

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
                situacao.textContent = funcionario.situacao;
                desligar.innerHTML = "<button>Desligar</button>";
                visualizar.innerHTML = "<button class='abrir-modal'>Visualizar</button>";
            });
        }
    }

listarFuncionarios();
// })