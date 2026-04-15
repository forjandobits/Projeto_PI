import { mostrarMensagem } from "../utils/mostrarMensagem.js";

async function listarBeneficiosDescontos() {
    try {
        const respostaBenDes = await fetch(`${BASE_URL}/api/pagamentos/exibir_beneficios_descontos.php`);
        const beneficiosDescontos = await respostaBenDes.json();
        
        return beneficiosDescontos;
    } catch (error) {
        mostrarMensagem(error.message, "erro");
        // alert(`Ocorreu um erro: \n${error.message}`);
    }
    
}

async function listarFolhasLancadas() {
    try {
        const respostaFolhaLancada = await fetch(`${BASE_URL}/api/pagamentos/exibir_folhas_lancadas.php`);
        const folhaLancada = await respostaFolhaLancada.json();
        
        return folhaLancada;
    } catch (error) {
        mostrarMensagem(error.message, "erro");
        // alert(`Ocorreu um erro: \n${error.message}`);
    }
    
}

async function listarFuncionarios() {
    try {
        const respostaFuncionarios = await fetch(`${BASE_URL}/api/pagamentos/exibir_funcionarios.php`);
        const funcionarios = await respostaFuncionarios.json();
        
        return funcionarios;
    } catch (error) {
        mostrarMensagem(error.message, "erro");
        // alert(`Ocorreu um erro: \n${error.message}`);
    }
    
}

async function salarioFuncionario(idFuncionario) {
    try {
        const salarioFuncionario = await fetch(`${BASE_URL}/api/pagamentos/salario.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idFuncionario: idFuncionario
            })
        });

        const salario = await salarioFuncionario.json();
        
        return salario;
    } catch (error) {
        mostrarMensagem(error.message, "erro");
        // alert(`Ocorreu um erro: \n${error.message}`);
    }
}

export {listarBeneficiosDescontos, listarFolhasLancadas, listarFuncionarios, salarioFuncionario};
