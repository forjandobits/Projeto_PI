export async function exibiInformacoesEditar(id) {

    const respotaFuncionario = await fetch(`${BASE_URL}/api/funcionarios/exibir_dados_funcionario.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id_funcionario: id
        })

    })

    const dadosFuncionario = await respotaFuncionario.json();
    const nomeCompleto = document.querySelector('#nome-completo');
    const telefone = document.querySelector('#telefone');
    const email = document.querySelector('#email');
    const dataNasc = document.querySelector('#data-nasc');
    const cpf = document.querySelector('#cpf');
    const rg = document.querySelector('#rg');
    const genero = document.querySelector('#genero');
    const estadoCivil = document.querySelector('#estado-civil')
    const pisPasep = document.querySelector('#pis-pasep')
    const rua = document.querySelector('#rua')
    const numeroCasa = document.querySelector('#numero-casa')
    const complementoCasa = document.querySelector('#complemento-casa')
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#cidade')
    const estado = document.querySelector('#estado')
    const cep = document.querySelector('#cep')
    const cargo = document.querySelector('#cargo')
    const cbo = document.querySelector('#cbo')
    const regime = document.querySelector('#regime')
    const salario = document.querySelector('#remuneracao')
    const banco = document.querySelector('#banco')
    const agencia = document.querySelector('#agencia')
    const conta = document.querySelector('#numero-conta')
    const pix = document.querySelector('#chave-pix')
    const nis = document.querySelector('#nis')
    const nit = document.querySelector('#nit')

    const ctps = document.querySelector('#ctps')
    const certCasamento = document.querySelector('#certidao-casamento')

    dadosFuncionario.forEach(dados => {
        nomeCompleto.value = dados.nome_completo;
        telefone.value = dados.telefone;
        email.value = dados.email
        dataNasc.value = dados.data_nascimento
        cpf.value = dados.cpf
        rg.value = dados.rg
        genero.value = dados.sexo
        estadoCivil.value = dados.estado_civil
        pisPasep.value = dados.pis_pasep
        rua.value = dados.rua
        numeroCasa.value = dados.numero_casa
        complementoCasa.value = dados.complemento
        bairro.value = dados.bairro
        cidade.value = dados.cidade
        estado.value = dados.estado
        cep.value = dados.cep
        cargo.value = dados.nome_cargo
        cbo.value = dados.cbo
        regime.value = dados.regime_trabalhista
        salario.value = dados.salario
        banco.value = dados.nome_banco
        agencia.value = dados.agencia
        conta.value = dados.numero_conta
        pix.value = dados.chave_pix
        ctps.value = dados.ctps
        nis.value = dados.nis
        nit.value = dados.nit

        if (dados.certidao_casamento_nascimento == "1") {
            certCasamento.checked = true
        } else {
            certCasamento.checked = false
        }
    })
}