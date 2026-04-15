import { mostrarMensagem } from "../utils/mostrarMensagem.js";

export async function carregarCargos() {
    try {
        const response = await fetch(`${BASE_URL}/api/cargo/exibir_cargo.php`);
        const cargos = await response.json();
        const select = document.querySelector("#cargo");
        // console.log(cargos);
        cargos.forEach(cargo => {
            const option = document.createElement("option");
            option.value = cargo.id_cargo;
            option.textContent = cargo.nome_cargo;
            select.appendChild(option);
        });
    } catch (error) {
        mostrarMensagem("Erro ao carregar cargos.", "erro");
        console.error(error);
    }
}

export async function exibiInformacoesEditar(id) {
    const respotaFuncionario = await fetch(`${BASE_URL}/api/funcionarios/exibir_dados_funcionario.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_funcionario: id })
    });


    const dadosFuncionario = await respotaFuncionario.json();


    // Função helper para preencher inputs com segurança
    const valorSeguro = (valor, tipo) => {
        if (valor === undefined || valor === null) return '';
        if (tipo === 'number') return Number(valor) || '';
        if (tipo === 'date') return valor; // certifique-se que vem como 'YYYY-MM-DD'
        return String(valor);
    }


    // Seleciona todos os campos
    const campos = {
        nomeCompleto : document.querySelector('#nome-completo'),
        telefone : document.querySelector('#telefone'),
        email : document.querySelector('#email'),
        dataNasc : document.querySelector('#data-nasc'),
        cpf : document.querySelector('#cpf'),
        rg : document.querySelector('#rg'),
        genero : document.querySelector('#genero'),
        estadoCivil : document.querySelector('#estado-civil'),
        pisPasep : document.querySelector('#pis-pasep'),
        rua : document.querySelector('#rua'),
        numeroCasa : document.querySelector('#numero-casa'),
        complementoCasa : document.querySelector('#complemento'),
        bairro : document.querySelector('#bairro'),
        cidade : document.querySelector('#cidade'),
        estado : document.querySelector('#estado'),
        cep : document.querySelector('#cep'),
        cargo : document.querySelector('#cargo'),
        cbo : document.querySelector('#cbo'),
        regime : document.querySelector('#regime'),
        salario : document.querySelector('#remuneracao'),
        banco : document.querySelector('#banco'),
        agencia : document.querySelector('#agencia'),
        conta : document.querySelector('#numero-conta'),
        pix : document.querySelector('#chave-pix'),
        nis : document.querySelector('#nis'),
        nit : document.querySelector('#nit'),
        ctps : document.querySelector('#ctps'),
        certidaoCasamento : document.querySelector('#certidao-casamento'),
        cnh : document.querySelector('#cnh'),
        pcd : document.querySelector('#pcd'),
        certificadoAlistamento : document.querySelector('#cam'),
        temFilhos : document.querySelector('#filhos'),
        qtdFilhos : document.querySelector('#qtd-filhos')
    }

    // Preenche os campos com segurança
    dadosFuncionario.forEach(dados => {
        campos.nomeCompleto.value = valorSeguro(dados.nome_completo);
        campos.telefone.value = valorSeguro(dados.telefone);
        campos.email.value = valorSeguro(dados.email);
        campos.dataNasc.value = valorSeguro(dados.data_nascimento, 'date');
        campos.cpf.value = valorSeguro(dados.cpf);
        campos.rg.value = valorSeguro(dados.rg);
        campos.genero.value = valorSeguro(dados.sexo);
        campos.estadoCivil.value = valorSeguro(dados.estado_civil);
        campos.pisPasep.value = valorSeguro(dados.pis_pasep);
        campos.rua.value = valorSeguro(dados.rua);
        campos.numeroCasa.value = valorSeguro(dados.numero_casa, 'number');
        campos.complementoCasa.value = valorSeguro(dados.complemento);
        campos.bairro.value = valorSeguro(dados.bairro);
        campos.cidade.value = valorSeguro(dados.cidade);
        campos.estado.value = valorSeguro(dados.estado);
        campos.cep.value = valorSeguro(dados.cep);
        campos.cargo.value = (valorSeguro(dados.id_cargo));
        campos.cbo.value = valorSeguro(dados.cbo);
        campos.regime.value = valorSeguro(dados.regime_trabalhista);
        campos.salario.value = valorSeguro(dados.salario, 'number');
        campos.banco.value = valorSeguro(dados.nome_banco);
        campos.agencia.value = valorSeguro(dados.agencia, 'number');
        campos.conta.value = valorSeguro(dados.numero_conta);
        campos.pix.value = valorSeguro(dados.chave_pix);
        campos.ctps.value = valorSeguro(dados.ctps);
        campos.nis.value = valorSeguro(dados.nis);
        campos.nit.value = valorSeguro(dados.nit);
        campos.qtdFilhos.value = valorSeguro(dados.numero_filho);


        campos.certidaoCasamento.checked = dados.certidao_casamento_nascimento === "1";
        campos.certificadoAlistamento.checked = dados.cam === "1";
        campos.cnh.checked = dados.cnh === "1";
        campos.pcd.checked = dados.laudo_pcd === "1";
        campos.temFilhos.checked = dados.tem_filho === "1";
    })
}


export async function editarFuncionario(id) {

    
    const dados = {
        id_funcionario: id,
        nome_completo: document.querySelector('#nome-completo').value,
        telefone: document.querySelector('#telefone').value,
        email: document.querySelector('#email').value,
        data_nascimento: document.querySelector('#data-nasc').value,
        cpf: document.getElementById("cpf").value,
        rg: document.getElementById("rg").value,
        sexo: document.querySelector('#genero').value,
        estado_civil: document.querySelector('#estado-civil').value,
        id_cargo: document.querySelector('#cargo').value,

        rua: document.querySelector('#rua').value,
        numero_casa: document.querySelector('#numero-casa').value,
        complemento: document.getElementById("complemento").value,
        bairro: document.querySelector('#bairro').value,
        cidade: document.querySelector('#cidade').value,
        estado: document.getElementById("estado").value,
        cep: document.querySelector('#cep').value,

        cargo: document.getElementById("cargo").value,

        banco: document.getElementById("banco").value,
        agencia: document.querySelector('#agencia').value,
        numero_conta: document.querySelector('#numero-conta').value,
        chave_pix: document.querySelector('#chave-pix').value,

        certidaoCasamento: document.querySelector("#certidao-casamento").checked ? 1 : 0,
        pcd: document.querySelector("#pcd").checked ? 1 : 0,
        cam: document.querySelector("#cam").checked ? 1 : 0,
        cnh: document.querySelector("#cnh").checked ? 1 : 0,
        pisPasep: document.getElementById("pis-pasep").value,
        nis: document.getElementById("nis").value,
        nit: document.getElementById("nit").value,
        ctps: document.querySelector("#ctps").value,
        filhos: document.querySelector("#filhos").checked ? 1 : 0,
        qtdFilhos: document.querySelector("#qtd-filhos").value || 0
    };


    const resposta = await fetch(`${BASE_URL}/api/funcionarios/editar_funcionario.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });


    const resultado = await resposta.json();


    if (resultado.status === "sucesso") {
        mostrarMensagem("Atualizado com sucesso!", "sucesso");
        window.location.href = "colaboradores.php";
    } else {
        mostrarMensagem("Erro ao atualizar", "erro");
    }
}
