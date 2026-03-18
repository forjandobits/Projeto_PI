import { listarBeneficiosDescontos, listarFolhasLancadas} from "./conexoes.js";

async function exibirDadosFolhaLancadas(){
    
    const exibir = document.querySelector(".modal");
    let idSelecionado;
    const parametrosURL = new URLSearchParams(window.location.search);
    const idFolha = parametrosURL.get('id');
    
    if(!idFolha) {
        document.addEventListener("click", async (e) => {
            const botaoEditar = e.target.closest(".botao-editar");
            
            // Garante que o botão pressionado retorna o id da folha de pagamento
            if(e.target.classList.contains("abrir-modal")) {
                idSelecionado = e.target.id;
                
                exibir.style.display = "flex";
                if(!idFolha){
                    const respostaFolha = await fetch(`${BASE_URL}/api/pagamentos/exibir_dados_folha.php`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id_folha: e.target.id
                        })
                    });
    
                    const dadosFolhaSelecionada = await respostaFolha.json();
                    const beneficiosDescontos = await listarBeneficiosDescontos();
    
                    const nomeFuncionario = document.querySelector("#nome-exibido");
                    const mes = document.querySelector("#mes");
                    const resumoLiquido = document.querySelector(".resumo-final>p");
    
                    let valorLiquido = 0;
                    let valorFGTS = 0;
                    console.log(dadosFolhaSelecionada);
    
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
                                let idConvertido;
        
                                beneficiosDescontos.forEach(benDes => {
                                
                                    if((benDes.desconto === '0') || (benDes.desconto === '2')){
                    
                                        if(benDes.nome_beneficio === 'FGTS'){
                                            valorFGTS = Number(info.valor);
                                        }else {
                                            id.textContent = info.idBenDes;
                                            idConvertido = Number(info.idBenDes);
                                            if (benDes.id_beneficio == idConvertido) {
                                                evento.textContent = benDes.nome_beneficio;
                                                referencia.textContent = benDes.referencia;
                                                vencimentos.textContent = info.valor;
                                                descontos.textContent = "--";
                                                valorLiquido = valorLiquido + Number(info.valor);
                                            }
                                        }
                                    } else {
                    
                                        id.textContent = info.idBenDes;
                                        idConvertido = Number(info.idBenDes);
                                        if(benDes.id_beneficio == idConvertido){
                                            evento.textContent = benDes.nome_beneficio;
                                            referencia.textContent = benDes.referencia;
                                            vencimentos.textContent = "--";
                                            if((benDes.nome_beneficio === "IRPF") && (info.valor === 0)) {
                                                descontos.textContent = "Isento";
                                                descontos.style.color = "#FF0000";
                                            } else {
                                                descontos.textContent = info.valor;
                                                descontos.style.color = "#FF0000";
                                            }
                                            valorLiquido = valorLiquido - Number(info.valor);
                                        }
                                    };
        
                                    if(valorLiquido < 0){
                                        resumoLiquido.textContent = `FGTS (R$): 0,00 - Total Líquido (R$): 0,00`;
                                    } else {
                                        resumoLiquido.textContent = `FGTS (R$): ${valorFGTS.toFixed(2)} - Total Líquido (R$): ${valorLiquido.toFixed(2)}`;
                                    }
                
                                });
                            })
                        })
        
                    });
                }

            }
            if(botaoEditar){
    
                e.preventDefault();
                window.location.href = `./folha_de_pagamento.php?id=${idSelecionado}`;
                console.log(window.location.href);
                console.log(botaoEditar);
    
            }
        })

    
    } else {
    
        const respostaFolha = await fetch(`${BASE_URL}/api/pagamentos/exibir_dados_folha.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_folha: idFolha
            })
        });
    
        const dadosFolhaSelecionada = await respostaFolha.json();
        const beneficiosDescontos = await listarBeneficiosDescontos();
    
        const nomeFuncionario = document.querySelector("#nome-exibido");
        const campoNome = document.querySelector("#nome");
        const nomeCargo = document.querySelector("#cargo-exibido");
        const mes = document.querySelector("#mes");
        const resumoLiquido = document.querySelector(".resumo-final>p");
    
        let valorLiquido = 0;
        let valorFGTS = 0;
        
    
        const tabelaFolhaSelecionada = document.querySelector("#tabela-saida-folha-pagamento");
        dadosFolhaSelecionada.forEach(valoresRetornados => {
    
            nomeFuncionario.textContent = valoresRetornados.nome_completo;
            mes.textContent = valoresRetornados.mes_referencia;
            nomeCargo.textContent = valoresRetornados.nome_cargo;
    
            campoNome.value = valoresRetornados.nome_completo;
            
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
                    let idConvertido;
    
                    beneficiosDescontos.forEach(benDes => {
                    
                        if((benDes.desconto === '0') || (benDes.desconto === '2')){
        
                            if(benDes.nome_beneficio === 'FGTS'){
                                valorFGTS = Number(info.valor);
                            }else {
                                id.textContent = info.idBenDes;
                                idConvertido = Number(info.idBenDes);
                                if (benDes.id_beneficio == idConvertido) {
                                    evento.textContent = benDes.nome_beneficio;
                                    referencia.textContent = benDes.referencia;
                                    vencimentos.textContent = info.valor;
                                    descontos.textContent = "--";
                                    valorLiquido = valorLiquido + Number(info.valor);
                                }
                            }
                        } else {
        
                            id.textContent = info.idBenDes;
                            idConvertido = Number(info.idBenDes);
                            if(benDes.id_beneficio == idConvertido){
                                evento.textContent = benDes.nome_beneficio;
                                referencia.textContent = benDes.referencia;
                                vencimentos.textContent = "--";
                                if((benDes.nome_beneficio === "IRPF") && (info.valor === 0)) {
                                    descontos.textContent = "Isento";
                                    descontos.style.color = "#FF0000";
                                } else {
                                    descontos.textContent = info.valor;
                                    descontos.style.color = "#FF0000";
                                }
                                valorLiquido = valorLiquido - Number(info.valor);
                            }
                        };
    
                        if(valorLiquido < 0){
                            resumoLiquido.textContent = `FGTS (R$): 0,00 - Total Líquido (R$): 0,00`;
                        } else {
                            resumoLiquido.textContent = `FGTS (R$): ${valorFGTS.toFixed(2)} - Total Líquido (R$): ${valorLiquido.toFixed(2)}`;
                        }
    
                    });
                })
            })
            
        })
    }
}



document.addEventListener('DOMContentLoaded', function () {
    
    async function exibirFolhaLancada() {
    
        const tabelaFolhasLancadas = document.querySelector("#tabela-folhas-lancadas");
        const folhasLancadas = await listarFolhasLancadas();
    
        console.log(folhasLancadas);
        
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
    
                nomeFuncionario.textContent = folhaLancada.nome_completo;
                cargo.textContent = folhaLancada.nome_cargo;
                mesReferencia.textContent = folhaLancada.mes_referencia;
                botaoVisualizar.innerHTML = `<button class='abrir-modal' id='${id}'>Visualizar</button>`;
                botaoBaixar.innerHTML = "<button>Baixar</button>";

            })
    
        }
    }
    
    
    
    exibirFolhaLancada();
    exibirDadosFolhaLancadas();
    
});

export {exibirDadosFolhaLancadas};
