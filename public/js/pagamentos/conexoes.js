async function listarBeneficiosDescontos() {
    try {
        const respostaBenDes = await fetch(`${BASE_URL}/api/pagamentos/exibir_beneficios_descontos.php`);
        const beneficiosDescontos = await respostaBenDes.json();
        
        return beneficiosDescontos;
    } catch (error) {
        alert(`Ocorreu um erro: \n${error.message}`);
    }
    
}

async function listarFolhasLancadas() {
    try {
        const respostaFolhaLancada = await fetch(`${BASE_URL}/api/pagamentos/exibir_folhas_lancadas.php`);
        const folhaLancada = await respostaFolhaLancada.json();
        
        return folhaLancada;
    } catch (error) {
        alert(`Ocorreu um erro: \n${error.message}`);
    }
    
}

async function listarFuncionarios() {
    try {
        const respostaFuncionarios = await fetch(`${BASE_URL}/api/pagamentos/exibir_funcionarios.php`);
        const funcionarios = await respostaFuncionarios.json();
        
        return funcionarios;
    } catch (error) {
        alert(`Ocorreu um erro: \n${error.message}`);
    }
    
}

export {listarBeneficiosDescontos, listarFolhasLancadas, listarFuncionarios};
