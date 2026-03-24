import { listarBeneficiosDescontos, listarFolhasLancadas} from "./conexoes.js";

export async function dadosFolhasLancadas(dadosFolhaSelecionada){

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

        if(nomeCargo){
            nomeCargo.textContent = valoresRetornados.nome_cargo;
        }
        
        if(campoNome){
            campoNome.value = valoresRetornados.nome_completo;
        }

        tabelaFolhaSelecionada.textContent = "";
        
        const informacoes = JSON.parse(valoresRetornados.informacoes);
        
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
    
                        idConvertido = Number(info.idBenDes);

                        if(idConvertido === 2){
                            valorFGTS = Number(info.valor);
                        } 

                        id.textContent = info.idBenDes;
                        if (benDes.id_beneficio == idConvertido) {
                            evento.textContent = benDes.nome_beneficio;
                            referencia.textContent = benDes.referencia;
                            vencimentos.textContent = info.valor;
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
            alert("Clicou para baixar! O id selecionado: " + idSelecionado);

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

            alert(dadosFolhaSelecionada);
            localStorage.setItem("relatorio_pagamento", JSON.stringify(dadosFolhaSelecionada));

            window.location.href = `${BASE_URL}/relatorio_pagamento.php`;
            // alert('Clicou para imprimir!');
            // window.print();
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
            mesReferencia.textContent = folhaLancada.mes_referencia;
            botaoVisualizar.innerHTML = `<button class='abrir-modal' id='${id}'>Visualizar</button>`;
            botaoBaixar.innerHTML = `<button class='botao-baixar' id='${id}'>Baixar</button>`;

        });

    }

    async function exibirFolhaLancada() {

        const folhasLancadas = await listarFolhasLancadas();
        // const buttonBusca = document.querySelector("#buscar");
        const filtroBusca = document.querySelector("#filtro");

        if(filtroBusca){

            filtroBusca.addEventListener('input', (e) => {
    
                // buttonBusca.addEventListener('click', (e) => {
                // const valorBuscado = filtroBusca.value.toLowerCase();
                const valorBuscado = e.target.value.toLowerCase();
                // alert(valorBuscado);
                
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
