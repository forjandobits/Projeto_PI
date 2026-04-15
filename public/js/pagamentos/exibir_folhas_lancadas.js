import { listarBeneficiosDescontos, listarFolhasLancadas} from "./conexoes.js";
import { mostrarMensagem } from "../utils/mostrarMensagem.js";

export async function dadosFolhasLancadas(dadosFolhaSelecionada){

    const beneficiosDescontos = await listarBeneficiosDescontos();
    
    const nomeFuncionario = document.querySelector("#nome-exibido");
    const campoNome = document.querySelector("#nome");
    const nomeCargo = document.querySelector("#cargo-exibido");
    const mes = document.querySelector("#mes");
    const mesExibido = document.querySelector("#data-mes-ano");
    const resumoLiquido = document.querySelector(".resumo-final>p");

    let valorLiquido = 0;
    let valorFGTS = 0;

    const tabelaFolhaSelecionada = document.querySelector("#tabela-saida-folha-pagamento");

    dadosFolhaSelecionada.forEach(valoresRetornados => {
    
        nomeFuncionario.textContent = valoresRetornados.nome_completo;
        const data = valoresRetornados.mes_referencia;
        const [ano, meses] = data.split('-');
        const dataFormatada = `${meses} / ${ano}`;
        mes.textContent = dataFormatada;

        if(nomeCargo){
            nomeCargo.textContent = valoresRetornados.nome_cargo;
        }
        
        if(campoNome){
            campoNome.value = valoresRetornados.nome_completo;
        }

        if(mesExibido){
            // console.log("Existe mês a ser exibido" + `mês: ${valoresRetornados.mes_referencia}`);
            const [meses, ano] = data.split('-');
            mesExibido.value = `${ano}-${meses}`;
            mesExibido.value = valoresRetornados.mes_referencia;
        }

        tabelaFolhaSelecionada.textContent = "";
        
        const informacoes = JSON.parse(valoresRetornados.informacoes);
        
        informacoes.forEach(informacao => {
            
            
            informacao.infoBenDes.forEach(info =>{
                const novasInfos = tabelaFolhaSelecionada.insertRow()
    
                // criar novas celulas
                const id = novasInfos.insertCell();
                const evento = novasInfos.insertCell(); 
                const vencimentos = novasInfos.insertCell(); 
                const descontos = novasInfos.insertCell();
                let idConvertido;

                beneficiosDescontos.forEach(benDes => {
                
                    if((benDes.desconto === '0') || (benDes.desconto === '2')){
    
                        idConvertido = Number(info.idBenDes);

                        if(idConvertido === 2){
                            valorFGTS = Number(info.valor);
                        } 

                        id.textContent = info.idBenDes;
                        if (benDes.id_beneficio == idConvertido) {
                            evento.textContent = benDes.nome_beneficio;
                            vencimentos.textContent = Number(info.valor).toFixed(2).replace(".", ",");
                            descontos.textContent = "--";
                            if(idConvertido !== 2){
                                valorLiquido = valorLiquido + Number(info.valor);
                            }
                        }

                    } else {
    
                        id.textContent = info.idBenDes;
                        idConvertido = Number(info.idBenDes);
                        if(benDes.id_beneficio == idConvertido){
                            evento.textContent = benDes.nome_beneficio;
                            vencimentos.textContent = "--";
                            if((benDes.nome_beneficio === "IRPF") && (info.valor === 0)) {
                                descontos.textContent = "Isento";
                                descontos.style.color = "#FF0000";
                            } else {
                                descontos.textContent = Number(info.valor).toFixed(2).replace(".", ",");
                                descontos.style.color = "#FF0000";
                            }
                            valorLiquido = valorLiquido - Number(info.valor);
                        }
                    };

                    if(valorLiquido < 0){
                        resumoLiquido.textContent = `FGTS (R$): 0,00 - Total Líquido (R$): 0,00`;
                    } else {
                        resumoLiquido.textContent = `FGTS (R$): ${valorFGTS.toFixed(2).replace(".", ",")} - Total Líquido (R$): ${valorLiquido.toFixed(2).replace(".", ",")}`;
                    }

                });
            })
        })
        
    })
}

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

                    dadosFolhasLancadas(dadosFolhaSelecionada);

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
        
        const cabecalhoEdicao = document.querySelector(".cabecalhos>h1");
        cabecalhoEdicao.textContent = "Edição - Folha de Pagamento";

        let mensagem = "Abrindo modo de edição da Folha de Pagamento!";
        mostrarMensagem(mensagem, "sucesso");

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

        dadosFolhasLancadas(dadosFolhaSelecionada);

    }
}

async function gerarRelatorio() {
    
    document.addEventListener("click", async (e) =>{
        const botaoBaixar = e.target.closest(".botao-baixar");

        if(botaoBaixar){
            const idSelecionado = e.target.id;

            const respostaFolha = await fetch(`${BASE_URL}/api/pagamentos/exibir_dados_folha.php`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_folha: idSelecionado
                })
            });
    
            const dadosFolhaSelecionada = await respostaFolha.json();

            localStorage.setItem("relatorio_pagamento", JSON.stringify(dadosFolhaSelecionada));

            window.location.href = `${BASE_URL}/relatorio_pagamento.php`;
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    
    function listarFolhas(folhas){
        const tabelaFolhasLancadas = document.querySelector("#tabela-folhas-lancadas");

        tabelaFolhasLancadas.textContent = "";

        folhas.forEach(folhaLancada => {
    
            const id = folhaLancada.id;
            const listaFolhas = tabelaFolhasLancadas.insertRow();
            const nomeFuncionario = listaFolhas.insertCell();
            const cargo = listaFolhas.insertCell(); 
            const mesReferencia = listaFolhas.insertCell();
            const botaoVisualizar = listaFolhas.insertCell();
            const botaoBaixar = listaFolhas.insertCell();

            nomeFuncionario.textContent = folhaLancada.nome_completo;
            cargo.textContent = folhaLancada.nome_cargo;
            const data = folhaLancada.mes_referencia;
            const [ano, meses] = data.split('-');
            const dataFormatada = `${meses} / ${ano}`;
            mesReferencia.textContent = dataFormatada;
            botaoVisualizar.innerHTML = `<button class='abrir-modal' id='${id}'>Visualizar</button>`;
            botaoBaixar.innerHTML = `<button class='botao-baixar' id='${id}'>Baixar</button>`;

        });

    }

    async function exibirFolhaLancada() {

        const folhasLancadas = await listarFolhasLancadas();
        const filtroBusca = document.querySelector("#filtro");

        if(filtroBusca){

            filtroBusca.addEventListener('input', (e) => {
    
                const valorBuscado = e.target.value.toLowerCase();
                
                const resultadoBusca = folhasLancadas.filter(buscaFolhasLancadas => {
    
                    return (buscaFolhasLancadas.nome_completo.toLowerCase().includes(valorBuscado) ||
                    buscaFolhasLancadas.nome_cargo.toLowerCase().includes(valorBuscado));
                    
                })
                
                listarFolhas(resultadoBusca);
            })
            
            listarFolhas(folhasLancadas);
        }
        
    }
    
    exibirFolhaLancada();
    exibirDadosFolhaLancadas();
    gerarRelatorio();
    
});

export {exibirDadosFolhaLancadas};
