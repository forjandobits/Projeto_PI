import { listarBeneficiosDescontos, listarFuncionarios, salarioFuncionario } from "./conexoes.js";
import { exibirDadosFolhaLancadas } from "./exibir_folhas_lancadas.js";
import { eventoSelecionado, dataVazia, nomeVazio, valorVazio} from "./validacoes.js";
import { mostrarMensagem } from "../utils/mostrarMensagem.js";

document.addEventListener('DOMContentLoaded', function () {
    // Arrays para armazenamento
    const valoresRecebidos = [];
    const valoresUnidos = [];

    const parametrosURL = new URLSearchParams(window.location.search);
    const idFolha = parametrosURL.get('id');

    if (idFolha) {

        exibirDadosFolhaLancadas();
    }

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
                    // reindexar();
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

                    if (nomes.length >= 1) {
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

                buscarSalario(idSelecionado);

                camposListados.forEach(valoresCampos => {
                    let cont = 0;
                    let input = valoresCampos.querySelector(`.campo>#valor`);
                    let select = valoresCampos.querySelector(`.campo>#beneficios`);


                    valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: select.value, valor: input.value }] })
                    cont++;
                });

                return;
            });
        }

    }

    async function buscarSalario(idSelecionado) {

        const salarioBase = await salarioFuncionario(idSelecionado);
        const nomeCargo = document.querySelector("#cargo-exibido");
        
        if(salarioBase){
            salarioBase.forEach(infoBase => {
                let salario = Number(infoBase.salario);
                let cargo = infoBase.nome_cargo;
    
                nomeCargo.textContent = cargo;
    
                valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "1", valor: salario }] });
                calcularContribuicoesDescontos(salario);
            })
        }

    }


    // Para valores que devem ser calculados automaticamente, como INSS e IRPF, outros
    async function calcularContribuicoesDescontos(salario) {

        let descontoINSS = 0;
        let descontoIRPF = 0;
        let descontoVT = 0;
        let valorFGTS = 0;

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

            // Menor que 5000 Isento, e cálculo progressivo para outras faixas 
            if (salario <= 5000) {
                descontoIRPF = 0;
            } else if (salario <= 6000) {
                descontoIRPF = (salario * 0.075) - 375;
            } else if (salario <= 7000) {
                descontoIRPF = (salario * 0.15) - 825;
            } else if (salario <= 8000) {
                descontoIRPF = (salario * 0.225) - 1350;
            } else {
                descontoIRPF = (salario * 0.275) - 1850;
            }

            // FGTS salario * 0.08 - não desconto
            valorFGTS = salario * 0.08;
            // Vale Transporte salario * 0.06 desconto
            descontoVT = salario * 0.06;
        }

        valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "2", valor: valorFGTS }] });
        valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "3", valor: descontoINSS }] });
        valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "4", valor: descontoIRPF }] });
        valoresRecebidos.push({ nome: nome.value, mes: mesSelecionado.value, infoBenDes: [{ idBenDes: "5", valor: descontoVT }] });
        
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
                let valorFGTS = 0;

                const beneficiosDescontos = await listarBeneficiosDescontos();

                valoresRecebidos.forEach(item => {

                    // criar uma nova linha e inserir na tabela
                    const novasInfos = tabelaPagamento.insertRow()

                    // criar novas celulas
                    const id = novasInfos.insertCell();
                    const evento = novasInfos.insertCell();
                    const vencimentos = novasInfos.insertCell();
                    const descontos = novasInfos.insertCell();
                    let idConvertido;

                    // Para aparecer as informações apenas uma vez e continuar exibindo as outras conforme necessário
                    nomeFuncionario.textContent = "";
                    mes.textContent = "";

                    nomeFuncionario.textContent = nome.value;
                    const data = item.mes;
                    const [ano, meses] = data.split('-');
                    const dataFormatada = `${meses} / ${ano}`;
                    mes.textContent = dataFormatada;

                    item.infoBenDes.forEach(info => {

                        beneficiosDescontos.forEach(benDes => {

                            if ((benDes.desconto === '0') || (benDes.desconto === '2')) {

                                idConvertido = Number(info.idBenDes);

                                if (idConvertido === 2) {
                                    valorFGTS = Number(info.valor);
                                }

                                id.textContent = info.idBenDes;
                                if (benDes.id_beneficio == idConvertido) {
                                    evento.textContent = benDes.nome_beneficio;
                                    vencimentos.textContent = Number(info.valor).toFixed(2).replace(".", ",");
                                    descontos.textContent = "--";
                                    if (idConvertido !== 2) {
                                        valorLiquido = valorLiquido + Number(info.valor);
                                    }
                                }


                            } else {

                                id.textContent = info.idBenDes;
                                idConvertido = Number(info.idBenDes);
                                if (benDes.id_beneficio == idConvertido) {
                                    evento.textContent = benDes.nome_beneficio;
                                    vencimentos.textContent = "--";
                                    if ((benDes.nome_beneficio === "IRPF") && (info.valor === 0)) {
                                        descontos.textContent = "Isento";
                                        descontos.style.color = "#FF0000";
                                    } else {
                                        descontos.textContent = Number(info.valor).toFixed(2).replace(".", ",");
                                        descontos.style.color = "#FF0000";
                                    }
                                    valorLiquido = valorLiquido - Number(info.valor);
                                }
                            };

                        });
                    })

                    if (valorLiquido < 0) {
                        resumoLiquido.textContent = `FGTS (R$): 0,00 - Total Líquido (R$): 0,00`;
                    } else {
                        resumoLiquido.textContent = `FGTS (R$): ${valorFGTS.toFixed(2).replace(".", ",")} - Total Líquido (R$): ${valorLiquido.toFixed(2).replace(".", ",")}`;
                    }

                });


                agruparValoresRecebidos();

                const beneRecebe = eventoSelecionado(valoresUnidos);
                const valorRecebe = valorVazio(valoresUnidos);
                const dataRecebe = dataVazia(mesSelecionado.value);
                const nomeRecebe = nomeVazio(nome.value);
                
                if ((beneRecebe !== false) || (valorRecebe !== false) || (dataRecebe !== false) || (nomeRecebe !== false)) {
                    // ---- Valor Vazio ----
                    tabelaPagamento.textContent = "";
                    return;
                } else {
                    let mensagem = "Folha de Pagamento processada com sucesso! Aguarde..."
                    mostrarMensagem(mensagem, "sucesso");
                    exibir.style.display = "none";
                }
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
            let mensagem = "Folha cadastrada com sucesso! Você será redirecionado. Aguarde..."
            console.log(valoresRecebidos);
            console.log(valoresUnidos);
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
                    
                    mostrarMensagem(mensagem, "sucesso");
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

                        mostrarMensagem(mensagem, "sucesso");
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