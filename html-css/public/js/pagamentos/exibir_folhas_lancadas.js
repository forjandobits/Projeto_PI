async function listarBeneficiosDescontos() {
    try {
        const respostaBenDes = await fetch("public/js/pagamentos/exibir_beneficios_descontos.php");
        const beneficiosDescontos = await respostaBenDes.json();
        // console.log(beneficiosDescontos);
    
        // beneficiosDescontos.forEach(elemento => {
        //     console.log(elemento);
        // });
        
        return beneficiosDescontos;
    } catch (error) {
        // if(error.status === "404"){
        //     alert(`Ocorreu um erro: \nNão foi possível realizar 
        //         a conexão com o banco de dados não encontrado!`);
        // } else {
        // }
        alert(`Ocorreu um erro: \n${error.message}`);
    }

}

async function listarFolhasLancadas() {
    try {
        const respostaFolhaLancada = await fetch("public/js/pagamentos/exibir_folhas_lancadas.php");
        const folhaLancada = await respostaFolhaLancada.json();
        
        return folhaLancada;
    } catch (error) {
        // if(error.status === "404"){
        //     alert(`Ocorreu um erro: \nNão foi possível realizar 
        //         a conexão com o banco de dados não encontrado!`);
        // } else {
        // }
        alert(`Ocorreu um erro: \n${error.message}`);
    }

}

async function exibirFolhaLancada() {

    const tabelaFolhasLancadas = document.querySelector("#tabela-folhas-lancadas");
    folhasLancadas = await listarFolhasLancadas();

    
    if(tabelaFolhasLancadas){

        tabelaFolhasLancadas.textContent = "";
        
        folhasLancadas.forEach(folhaLancada => {

            const id = folhaLancada.id;
            const listaFolhas = tabelaFolhasLancadas.insertRow();
            const nomeFuncionario = listaFolhas.insertCell();
            const cargo = listaFolhas.insertCell(); 
            const mesReferencia = listaFolhas.insertCell();
            const botaoVisualizar = listaFolhas.insertCell();
            const botaoBaixar = listaFolhas.insertCell();

            // console.log(folhaLancada);
            nomeFuncionario.textContent = folhaLancada.nome_completo;
            cargo.textContent = folhaLancada.nome_cargo;
            mesReferencia.textContent = folhaLancada.mes_referencia;
            botaoVisualizar.innerHTML = `<button class='abrir-modal' id='${id}'>Visualizar</button>`;
            botaoBaixar.innerHTML = "<button>Baixar</button>";

            
        })

    }
}

function exibirDadosFolhaLancadas(){

    const exibir = document.querySelector(".modal");
    let idSelecionado;

    document.addEventListener("click", async (e) => {
        
        // Garante que o botão pressionado retorna o id da folha de pagamento
        
        if(e.target.classList.contains("abrir-modal")) {
            
            exibir.style.display = "flex";
            const respostaFolha = await fetch("public/js/pagamentos/exibir_dados_folha.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_folha: e.target.id
                })
            });
            
            idSelecionado = e.target.id;

            const dadosFolhaSelecionada = await respostaFolha.json();
            const beneficiosDescontos = await listarBeneficiosDescontos();

            const nomeFuncionario = document.querySelector("#nome-exibido");
            const mes = document.querySelector("#mes");
            const resumoLiquido = document.querySelector(".resumo-final>p");

            let valorLiquido = 0;

            const tabelaFolhaSelecionada = document.querySelector("#tabela-saida-folha-pagamento");

            dadosFolhaSelecionada.forEach(valoresRetornados => {

                nomeFuncionario.textContent = valoresRetornados.nome_completo;
                mes.textContent = valoresRetornados.mes_referencia;

                tabelaFolhaSelecionada.textContent = "";
                
                const informacoes = JSON.parse(valoresRetornados.informacoes);
                
                console.log(informacoes);
                // console.log(typeof(informacoes));
                
                informacoes.forEach(informacao => {
                    // console.log(item);
                    
                    
                    informacao.infoBenDes.forEach(info =>{
                        const novasInfos = tabelaFolhaSelecionada.insertRow()
            
                        // criar novas celulas
                        const id = novasInfos.insertCell();
                        const evento = novasInfos.insertCell(); 
                        const referencia = novasInfos.insertCell(); 
                        const vencimentos = novasInfos.insertCell(); 
                        const descontos = novasInfos.insertCell();

                        beneficiosDescontos.forEach(benDes => {
                        
                            if(benDes.desconto === '0'){
            
                                id.textContent = info.idBenDes;
                                idConvertido = Number(info.idBenDes);
                                if(benDes.id_beneficio == idConvertido){
                                    evento.textContent = benDes.nome_beneficio;
                                    referencia.textContent = benDes.referencia;
                                    vencimentos.textContent = info.valor;
                                    descontos.textContent = "00";
                                    valorLiquido = valorLiquido + Number(info.valor);
                                }
                            } else {
            
                                id.textContent = info.idBenDes;
                                idConvertido = Number(info.idBenDes);
                                if(benDes.id_beneficio == idConvertido){
                                    evento.textContent = benDes.nome_beneficio;
                                    referencia.textContent = benDes.referencia;
                                    vencimentos.textContent = "00";
                                    if((benDes.nome_beneficio === "IRPF") && (info.valor === 0)) {
                                        descontos.textContent = "Isento";
                                        descontos.style.color = "#FF0000";
                                    } else {
                                        descontos.textContent = info.valor.toFixed(2);
                                        descontos.style.color = "#FF0000";
                                    }
                                    valorLiquido = valorLiquido - Number(info.valor);
                                }
                            };

                            if(valorLiquido < 0){
                                resumoLiquido.textContent = `Total Líquido (R$): 0,00`;
                            } else {
                                resumoLiquido.textContent = `Total Líquido (R$): ${valorLiquido.toFixed(2)}`;
                            }
        
                        });
                    })
                })


            })
        }
        
        const botaoEditar = e.target.closest(".botao-editar");
        
        if(botaoEditar){

            e.preventDefault();
            window.location.href = `./folha_de_pagamento.php?id=${idSelecionado}`;
            console.log(window.location.href);
            console.log(botaoEditar);

        }
        
    });
    
}


exibirFolhaLancada();
exibirDadosFolhaLancadas();