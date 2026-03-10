import { listarBeneficiosDescontos, listarFuncionarios } from "./conexoes.js";
import { mostrarMensagem } from "./validacoes.js";

document.addEventListener('DOMContentLoaded', function () {
    // Arrays para armazenamento
    const valoresRecebidos = [];
    const valoresUnidos = [];

    // Função para manipulação de elementos visuais e experiência de usuário

    async function criarEventos() {
        const criarEvento = document.querySelector("#adicionar-evento");
        const beneficiosDescontos = await listarBeneficiosDescontos();

        if (criarEvento) {
            criarEvento.addEventListener("click", () => {

                // Buscando os elementos para adicionar um após o outro e abaixo
                const eventoPagamento = document.querySelector(".eventos-pagamentos");
                const secao = document.createElement("section");
                secao.classList.add("grupo-campo-linha");


                // FOR para criar o número de elementos necessários no modal           
                for (let i = 1; i < 4; i++) {
                    const div = document.createElement("div");
                    div.classList.add("campo");

                    secao.append(div);

                    if (i == 1) {
                        // Parte com o label e select do elemento
                        const label = document.createElement("label");
                        const select = document.createElement("select");

                        // Conteúdo do label e for
                        label.textContent = "Benefícios:"
                        label.htmlFor = "beneficios";

                        // Varredura dos elementos retornados que serão 
                        // apresentados nas opções e buscar apenas os benefícios
                        const beneficios = beneficiosDescontos.filter(benDes => benDes.desconto === "0")

                        beneficios.forEach(benDes => {
                            const option = document.createElement("option");
                            option.text = `0${benDes.id_beneficio} - ${benDes.nome_beneficio}`;
                            option.value = benDes.id_beneficio;
                            select.append(option);
                            label.append(select);
                        });

                        select.name = "Beneficios";
                        select.id = "beneficios";
                        select.required = true;
                        // append() é mais utlizado e permite adicionar mais elementos de uma única vez
                        div.append(label, select);
                    }

                    if (i == 2) {
                        // Parte criar o campo para inserir os valores
                        const label = document.createElement("label");
                        label.textContent = "Valor:"
                        label.htmlFor = "valor";

                        const input = document.createElement("input");
                        input.name = "Valor";
                        input.id = "valor";
                        input.type = "number";
                        input.placeholder = "200,00"
                        input.required = true;
                        div.append(label, input);

                        input.addEventListener("keyup", () => {
                            let texto = " ";

                            if (input.value == "" || isNaN(input.value)) {
                                texto = "Você não pode deixar o valor vazio!!";
                                mostrarMensagem(texto);
                                return;
                            }
                            else {
                                mostrarMensagem(texto);
                                return;
                            }
                        })
                    }

                    if (i == 3) {
                        // Parte para criar o botão para remover o que foi inserido
                        const button = document.createElement("button");
                        button.classList.add("negar");
                        button.textContent = "✘ Remover";
                        button.type = "button"
                        div.append(button);
                    }
                }

                // Adicionando os elementos criados à página
                eventoPagamento.append(secao);
            })
        }
    }

    // Encontra os elementos que foram criados na página para se necessário remover
    function removerEventos() {
        document.addEventListener("click", (e) => {
            // Garante que o botão pressionado está correto
            if (e.target.classList.contains("negar")) {
                // Procura a pai dos elementos em questão
                const grupoEvento = e.target.closest(".eventos-pagamentos>.grupo-campo-linha");

                if (grupoEvento) {
                    // Remove os elementos da seção
                    grupoEvento.remove();
                }
            }
        })
    }

    // Função para buscar valores e retornar todos os que foram encontrados
    async function buscarNome(nomeInserido) {
        const funcionarios = await listarFuncionarios();

        const valoresObtidos = funcionarios.filter(funcionario => {

            return funcionario.nome_completo.toLowerCase().includes(nomeInserido.toLowerCase())

        }
        );

        return valoresObtidos;
    }

    // Função para listar os valores encontrados 
    function listarNomes() {
        const nome = document.querySelector("#nome");
        const listaNomes = document.querySelector("#listaNomes");

        if (nome) {
            nome.addEventListener("keyup", async (e) => {
                listaNomes.innerHTML = "";
                if (e.target.value.length >= 3 && nome != "") {
                    listaNomes.style.display = "block";
                    const nomeInserido = nome.value.trim();

                    const nomes = await buscarNome(nomeInserido);
                    console.log(nomes);
                    
                    if (nomes.length >= 1){
                        nomes.forEach(nomesRetornados => {
                            const li = document.createElement("li");
                            li.textContent = `${nomesRetornados.nome_completo}`;
                            li.dataset.value = `${nomesRetornados.id_funcionario}`;
                            listaNomes.append(li);

                        });
                        await selecionarNome();
                    } else {
                        const li = document.createElement("li");
                        li.textContent = "Funcionário não encontrado!";
                        listaNomes.append(li);
                    }

                    return;
                } else if (e.target.value.length > 0) {
                    listaNomes.style.display = "block";
                    const li = document.createElement("li");
                    li.textContent = "Procurando...";
                    listaNomes.append(li);
                    return;
                } else {
                    listaNomes.style.display = "none";
                }
            });
        }
    }

    // A função é assíncrona pois depende dos elementos estarem listados para funcionar
    const nome = document.querySelector("#nome");
    const mesSelecionado = document.querySelector("#data-mes-ano");
    let idSelecionado;

    async function selecionarNome() {
        // Selecionando todos os elementos para a execução
        const listaNomes = document.querySelector("#listaNomes");
        const nomesListados = document.querySelectorAll("#listaNomes>li");

        // Busca os elementos existentes
        nomesListados.forEach(nomeSelecionado => {
            nomeSelecionado.addEventListener("click", () => {

                // Limpa e preenche com o valor selecionado
                nome.value = "";
                let nomeInput = `${nomeSelecionado.textContent.trim()}`;
                nome.value = nomeInput;
                // Para o valor no formulário caso necessário
                idSelecionado = nomeSelecionado.dataset.value;

                // Para mostrar o nome que foi selecionado e o ID do mesmo
                // console.log(`Nome: ${nomeSelecionado.textContent} ID: ${nomeSelecionado.dataset.value}`);

                // Fecha a listagem de nomes
                listaNomes.style.display = "none";
                return;
            });
        })
    }

    // Para manipular os dados inseridos na tela
    const exibir = document.querySelector(".modal");
    const botaoSalvar = document.querySelector("#lancar-dados");

    // Função para armazenar os valores inseridos pelo usuário
    function receberBeneficiosSelecionados() {

        if (botaoSalvar) {

            botaoSalvar.addEventListener("click", () => {
                const camposListados = document.querySelectorAll(".eventos-pagamentos>.grupo-campo-linha");

                // Limpar o array de valoresRecebidos caso alguma alteração seja realizada
                if (valoresRecebidos.length > 0) {
                    valoresRecebidos.splice(0);
                }

                camposListados.forEach(valoresCampos => {
                    let input = valoresCampos.querySelector('.campo>#valor');
                    let select = valoresCampos.querySelector('.campo>#beneficios');

                    valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: select.value, valor: input.value }] })

                    if (select.value === "1") {
                        calcularContribuicoesDescontos(input.value);
                    }

                });

                exibir.style.display = "none";

                return;
            });
        }

    }
    
    async function buscarSalario (){

        const salarioBase = await salarioFuncionario(nome.value);
        const salario = salarioBase.JSON();

        console.log(salario);
    }

    
    // Para valores que devem ser calculados automaticamente, como INSS e IRPF
    async function calcularContribuicoesDescontos(salario){

        buscarSalario();
        // INSS - Valor de Referência é a base, mas pode ser alterado conforme necessário
        let descontoINSS = 0;
        let descontoIRPF = 0;

        // Até 1621 - 7,5%
        // De 1621.01 até 2902,84 9%
        // De 2902,85 até 4354,27 - 12%
        // Superior a 4354,28 - 14%
        if (salario > 0) {
            if (salario <= 1621) {
                descontoINSS = salario * 0.075;
            } else if (salario <= 2902.84) {
                descontoINSS = salario * 0.09;
            } else if (salario <= 4354.27) {
                descontoINSS = salario * 0.12;
            } else {
                descontoINSS = salario * 0.14;
            }

            if (salario < 5001) {
                descontoIRPF = 0;
            } else if (salario <= 7350) {
                descontoIRPF = 10;
            } else {
                descontoIRPF = 20;
            }

            // FGTS salario * 0.08 - não desconto
            // Vale Transporte salario * 0.06 desconto
        }

        valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "6", valor: descontoINSS }] });
        valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "7", valor: descontoIRPF }] });
        // IRPF
        // Menor que 5000 Isento, procurar uma tabela correta
    }

    function exibirDadosInseridos() {
        const mes = document.querySelector("#mes");
        const nomeFuncionario = document.querySelector("#nome-exibido");
        const resumoLiquido = document.querySelector(".resumo-final>p");

        // Buscar a tabela em que os elementos serão exibidos
        const tabelaPagamento = document.querySelector("#tabela-saida-folha-pagamento");

        if (botaoSalvar) {

            botaoSalvar.addEventListener("click", async () => {

                if (tabelaPagamento) {

                    tabelaPagamento.textContent = "";
                }

                let valorLiquido = 0;

                const beneficiosDescontos = await listarBeneficiosDescontos();

                valoresRecebidos.forEach(item => {

                    // criar uma nova linha e inserir na tabela
                    const novasInfos = tabelaPagamento.insertRow()

                    // criar novas celulas
                    const id = novasInfos.insertCell();
                    const evento = novasInfos.insertCell();
                    const referencia = novasInfos.insertCell();
                    const vencimentos = novasInfos.insertCell();
                    const descontos = novasInfos.insertCell();
                    let idConvertido;
        
                    // Para aparecer as informações apenas uma vez e continuar exibindo as outras conforme necessário
                    nomeFuncionario.textContent = "";
                    mes.textContent = "";

                    nomeFuncionario.textContent = nome.value;
                    mes.textContent = item.mes;

                    item.infoBenDes.forEach(i => {

                        beneficiosDescontos.forEach(benDes => {

                            if (benDes.desconto === '0') {

                                id.textContent = i.idBenDes;
                                idConvertido = Number(i.idBenDes);
                                if (benDes.id_beneficio == idConvertido) {
                                    evento.textContent = benDes.nome_beneficio;
                                    referencia.textContent = benDes.referencia;
                                    vencimentos.textContent = i.valor;
                                    descontos.textContent = "00";
                                    valorLiquido = valorLiquido + Number(i.valor);
                                }
                            } else {

                                id.textContent = i.idBenDes;
                                idConvertido = Number(i.idBenDes);
                                if (benDes.id_beneficio == idConvertido) {
                                    evento.textContent = benDes.nome_beneficio;
                                    referencia.textContent = benDes.referencia;
                                    vencimentos.textContent = "00";
                                    if ((benDes.nome_beneficio === "IRPF") && (i.valor === 0)) {
                                        descontos.textContent = "Isento";
                                        descontos.style.color = "#FF0000";
                                    } else {
                                        descontos.textContent = i.valor.toFixed(2);
                                        descontos.style.color = "#FF0000";
                                    }
                                    valorLiquido = valorLiquido - Number(i.valor);
                                }
                            };

                        });
                    })

                    if (valorLiquido < 0) {
                        resumoLiquido.textContent = `Total Líquido (R$): 0,00`;
                    } else {
                        resumoLiquido.textContent = `Total Líquido (R$): ${valorLiquido.toFixed(2)}`;
                    }

                });

                agruparValoresRecebidos();
            });
        }

    }

    // Função para agrupar os valores inseridos pelo usuário em um array de dados
    async function agruparValoresRecebidos() {

        if (valoresUnidos.length > 0) {
            valoresUnidos.splice(0);
        }

        // Opção para reunir todas as informações lançadas pelo usuário 
        // em um único array com todos os dados necessários
        valoresRecebidos.forEach(valorAtual => {
            const valorExiste = valoresUnidos.find(
                valor => valor.nome === valorAtual.nome && valor.mes === valorAtual.mes
            );

            if (valorExiste) {
                valorExiste.infoBenDes.push(...valorAtual.infoBenDes);
            } else {
                valoresUnidos.push({
                    infoBenDes: [...valorAtual.infoBenDes]
                });
            }
        })
    }

    // Função para enviar os valores inseridos
    function enviarDados() {
        const botaoEnviar = document.querySelector("#enviar-dados");

        if (botaoEnviar) {

            botaoEnviar.addEventListener("click", async (e) => {
                const parametrosURL = new URLSearchParams(window.location.search);

                if (parametrosURL.get('id') !== null) {
                    const idFolha = parametrosURL.get('id');

                    await fetch(`${BASE_URL}/api/pagamentos/editar_pagamento.php`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            idFolha: idFolha,
                            valoresUnidos: valoresUnidos
                        })
                    });
                    window.location.href = "pagamento.php";

                } else {
                    if (valoresUnidos.length == 0) {
                        return;
                    } else {
                        await fetch(`${BASE_URL}/api/pagamentos/adicionar_pagamento.php`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                id_funcionario: idSelecionado,
                                mes_referencia: mesSelecionado.value,
                                valoresUnidos: valoresUnidos
                            })
                        })

                        window.location.href = "pagamento.php";
                    }
                }

            });
        }

    }

    listarNomes();
    criarEventos();
    removerEventos();
    receberBeneficiosSelecionados();
    exibirDadosInseridos();
    enviarDados()

})