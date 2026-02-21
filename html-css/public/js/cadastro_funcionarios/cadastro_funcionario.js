document.addEventListener('DOMContentLoaded', function(){
    async function listarFuncionarios() {
        const resposta = await fetch("public/js/cadastro_funcionarios/resposta.php");
        const funcionarios = await resposta.json();
        

    return funcionarios;
}

listarFuncionarios();
})



