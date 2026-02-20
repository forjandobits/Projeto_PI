// Arrays para armazenamento
const valoresRecebidos = [];
const valoresUnidos = [];

// Função para buscar os valores no banco de dados
async function listarBeneficiosDescontos() {
    try {
        const resposta = await fetch("public/js/pagamentos/exibir_beneficios_descontos.php");
        const beneficios_descontos = await resposta.json();
        // console.log(beneficios_descontos);
    
        // beneficios_descontos.forEach(elemento => {
        //     console.log(elemento);
        // });
        
        return beneficios_descontos;
    } catch (error) {
        // if(error.status === "404"){
        //     alert(`Ocorreu um erro: \nNão foi possível realizar 
        //         a conexão com o banco de dados não encontrado!`);
        // } else {
        // }
        alert(`Ocorreu um erro: \n${error.message}`);
    }

}

pessoas = [{id: 1, nome: "João"}, {id: 2, nome: "José Maria"},
    {id: 3, nome: "Maria José"}, {id: 4, nome: "Maria Luiza"}, 
    {id: 5, nome:"José"}, {id: 6, nome: "João Pedro"}
];

// Função para manipulação de elementos visuais e experiência de usuário

async function criarEventos(){
    const criarEvento = document.querySelector("#adicionar-evento");
    beneficiosDescontos = await listarBeneficiosDescontos();

    if(criarEvento){
        criarEvento.addEventListener("click", ()=>{
    
            // Buscando os elementos para adicionar um após o outro e abaixo
            const eventoPagamento = document.querySelector(".eventos-pagamentos");
            const secao = document.createElement("section");
            secao.classList.add("grupo-campo-linha");
            
    
            // FOR para criar o número de elementos necessários no modal
            
            for (let i = 1; i < 4; i++) {
                const div = document.createElement("div");
                div.classList.add("campo");
    
                secao.append(div);
                
                if (i == 1){
                    // Parte com o label e select do elemento
                    const label = document.createElement("label");
                    const select = document.createElement("select");
                    
                    // Conteúdo do label e for
                    label.textContent = "Benefícios:"
                    label.htmlFor = "beneficios";
                    
                    // Varredura do array de elementos que serão 
                    // apresentados nas opções

                    // Para buscar apenas os benefícios
                    const beneficios = beneficiosDescontos.filter(benDes => benDes.desconto === "0");

                    // console.log(beneficios);

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
                    // append é mais utlizado e permite adicionar mais elementos de uma única vez
                    div.append(label, select);
                }
    
                if (i == 2){
                    // Parte para inserir o valor
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
    
                if (i == 3){
                    // Parte para criar o botão para remover o que foi inserido
                    const button = document.createElement("button");
                    button.classList.add("negar");
                    button.textContent = "✘ Remover";
                    button.type = "button"
                    div.append(button);
                }
            }
    
            // Adicionando os elementos a página
            eventoPagamento.append(secao);
        })
    }
}

// Encontra e remove os elementos que estão sendo apresentados na página
function removerEventos() {
    document.addEventListener("click", (e) => {
        // Garante que o botão pressionado está correto
        if(e.target.classList.contains("negar")) {
            // Procura a pai dos elementos em questão
            const grupoEvento = e.target.closest(".eventos-pagamentos>.grupo-campo-linha");
            
            if(grupoEvento){
                // Remove os elementos da seção
                grupoEvento.remove();
            }
        }
    })
}

function buscarNome(valor){
    const valoresObtidos = pessoas.filter(item => {
        
         return item.nome.toLowerCase().includes(valor.toLowerCase())
        
        }
    );
    return valoresObtidos;
}

function listarNomes(){
    const nome = document.querySelector("#nome");
    const listaNomes = document.querySelector("#listaNomes");

    nome.addEventListener("keyup", async (e) =>{
        listaNomes.innerHTML = "";
        if (e.target.value.length >= 3 && nome != "") {
            listaNomes.style.display = "block";
            const nomeInserido = nome.value.trim();
            
            const nomes = await buscarNome(nomeInserido);
            
            if (nomes.length >= 1){
                nomes.forEach(nomesRetornados => {
                    const li = document.createElement("li");
                    li.textContent = `${nomesRetornados.nome}`;
                    li.dataset.value = `${nomesRetornados.id}`;
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

// A função é assíncrona pois depende dos elementos estarem listados para funcionar
const nome = document.querySelector("#nome");
const mesSelecionado = document.querySelector("#data-mes-ano");
let idSelecionado;

async function selecionarNome(){
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
            idSelecionado  = nomeSelecionado.dataset.value;

            // Para mostrar o nome que foi selecionado e o ID do mesmo
            // console.log(`Nome: ${nomeSelecionado.textContent} ID: ${nomeSelecionado.dataset.value}`);

            // Fecha a listagem de nomes
            listaNomes.style.display = "none";
            return;
        });
    })
}

listarNomes();
criarEventos();
removerEventos();

// Para manipular os dados inseridos na tela
const exibir = document.querySelector(".modal");
const botaoSalvar = document.querySelector("#lancar-dados");

function receberBeneficiosSelecionados(){
    
    botaoSalvar.addEventListener("click", () => {
        const camposListados = document.querySelectorAll(".eventos-pagamentos>.grupo-campo-linha");

        // Limpar o array de valoresRecebidos caso alguma alteração seja realizada
        if(valoresRecebidos.length > 0){
            valoresRecebidos.splice(0);
        }

        camposListados.forEach(valoresCampos => {
            let input = valoresCampos.querySelector('.campo>#valor');
            let select = valoresCampos.querySelector('.campo>#beneficios');
            
            valoresRecebidos.push({nome:nome.value, mes:mesSelecionado.value, infoBenDes:[{idBenDes: select.value, valor: input.value}]})
            
            if(select.value === "1"){
                calcularContribuicoesDescontos(input.value);
            }

        });

        // Apenas para debug
        // valoresRecebidos.forEach(valores =>{
        //     alert(`Nome: ${nome.value}; ID: ${idSelecionado};\nMês: ${mesSelecionado.value}\n\n ID Select:${valores.infoBenDes.idBenDes} - ${valores.infoBenDes.valor}`);
        // });
        
        exibir.style.display = "none";
        
        return;
    });

}


// Para valores que devem ser calculados automaticamente, como INSS e IRPF
function calcularContribuicoesDescontos(salario){
    // INSS - Valor de Referência é a base, mas pode ser alterado conforme necessário
    let descontoINSS = 0;
    let descontoIRPF = 0;

    // Até 1621 - 7,5%
    // De 1621.01 até 2902,84 9%
    // De 2902,85 até 4354,27 - 12%
    // Superior a 4354,28 - 14%
    if(salario > 0){
        if(salario <= 1621){
            descontoINSS = salario * 0.075;
        } else if (salario <= 2902.84){
            descontoINSS = salario * 0.09;
        } else if (salario <= 4354.27){
            descontoINSS = salario * 0.12;
        } else {
            descontoINSS = salario * 0.14;
        }
    
        if(salario < 5001){
            descontoIRPF = 0;
        } else if (salario <= 7350) {
            descontoIRPF = 10;
        } else {
            descontoIRPF = 20;
        }
    }

    // alert(`Valor recebido ${salario}!`);
    valoresRecebidos.push({nome:nome.value, mes:mesSelecionado.value, infoBenDes:[{idBenDes: "6", valor: descontoINSS}]});
    valoresRecebidos.push({nome:nome.value, mes:mesSelecionado.value, infoBenDes:[{idBenDes: "7", valor: descontoIRPF}]});
    // IRPF
    // Menor que 5000 Isento, procurar uma tabela correta
}

receberBeneficiosSelecionados();


function exibirDadosInseridos(){
    const mes = document.querySelector("#mes");
    const nomeFuncionario = document.querySelector("#nome-exibido");
    const resumoLiquido = document.querySelector(".resumo-final>p");

    // Buscar a tabela
    const tabelaPagamento = document.querySelector("#tabela-saida-folha-pagamento");
    
    // Receber valor
    // situacao.text content = valor;
    
    botaoSalvar.addEventListener("click", () =>{
        // Por ser variável global ("valoresRecebidos") é possível manipular em qualquer parte do código
        
        if(tabelaPagamento){

            tabelaPagamento.textContent = "";
        }

        let valorLiquido = 0;

        valoresRecebidos.forEach(item => {
        
            // criar uma nova linha e inserir na tabela
            const novasInfos = tabelaPagamento.insertRow()
        
            // criar novas celulas
            const id = novasInfos.insertCell();
            const evento = novasInfos.insertCell(); 
            const referencia = novasInfos.insertCell(); 
            const vencimentos = novasInfos.insertCell(); 
            const descontos = novasInfos.insertCell();

            // Para aparecer as informações apenas uma vez e continuar exibindo as outras conforme necessário
            nomeFuncionario.textContent = "";
            mes.textContent = "";

            nomeFuncionario.textContent = nome.value;
            mes.textContent = item.mes;

            
            // console.log(item.infoBenDes[0]);
            
            item.infoBenDes.forEach(i => {

                beneficiosDescontos.forEach(benDes => {
                    
                    if(benDes.desconto === '0'){
    
                        id.textContent = i.idBenDes;
                        idConvertido = Number(i.idBenDes);
                        if(benDes.id_beneficio == idConvertido){
                            evento.textContent = benDes.nome_beneficio;
                            referencia.textContent = benDes.referencia;
                            vencimentos.textContent = i.valor;
                            descontos.textContent = "00";
                            valorLiquido = valorLiquido + Number(i.valor);
                        }
                    } else {
    
                        id.textContent = i.idBenDes;
                        idConvertido = Number(i.idBenDes);
                        if(benDes.id_beneficio == idConvertido){
                            evento.textContent = benDes.nome_beneficio;
                            referencia.textContent = benDes.referencia;
                            vencimentos.textContent = "00";
                            if((benDes.nome_beneficio === "IRPF") && (i.valor === 0)) {
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

            if(valorLiquido < 0){
                resumoLiquido.textContent = `Total Líquido (R$): 0,00`;
            } else {
                resumoLiquido.textContent = `Total Líquido (R$): ${valorLiquido.toFixed(2)}`;
            }

        });
        alert(`Valor do Id do Nome selecionado: ${idSelecionado}`);

        agruparValoresRecebidos();
    });

}

exibirDadosInseridos();

async function agruparValoresRecebidos(){

    if(valoresUnidos.length > 0){
        valoresUnidos.splice(0);
    }

    // Opção para reunir todas as informações lançadas pelo usuário 
    // em um único array com todos os dados necessários
    valoresRecebidos.forEach(valorAtual =>{
        const valorExiste = valoresUnidos.find(
            valor => valor.nome === valorAtual.nome && valor.mes === valorAtual.mes
        );

        if(valorExiste) {
            valorExiste.infoBenDes.push(...valorAtual.infoBenDes);
        } else {
            valoresUnidos.push({
                infoBenDes: [...valorAtual.infoBenDes]
            });
        }
    })

    // console.log(`Esse são os valores reunidos em apenas um registro:`);
    // console.log(valoresUnidos);
}

// Função para enviar os valores inseridos
function enviarDados() {
    const botaoEnviar = document.querySelector("#enviar-dados");
    
    botaoEnviar.addEventListener("click", async () => {
        
        if(valoresUnidos.length == 0){
            alert("Não há valores inseridos no Array!");
            return;
        } else {
            await fetch("public/js/pagamentos/adicionar_pagamento.php", {
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
            alert(`Nome: ${valoresUnidos.nome} - Mês: ${valoresUnidos.mes} - ${valoresUnidos.infoBenDes}`);
            alert(`Valores enviados! ${JSON.stringify({valoresUnidos})}`);
        }

    });

}

enviarDados()