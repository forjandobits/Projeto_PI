// Para simular o retorno do banco
beneficiosDescontos = [{id: 1, tipo: "Salário"}, {id: 2, tipo:"13º Salário"}, {id: 3, tipo:"INSS"}, {id: 4, tipo:"IRPF"}, {id: 5, tipo:"Comissão"}, {id: 6, tipo:"Imposto de Renda"}, {id: 7, tipo:"Vale Transporte"}, {id: 8, tipo:"Vale Alimentação"}];
pessoas = [{id: 1, nome: "João"}, {id: 2, nome: "José Maria"}, {id: 3, nome: "Maria José"}, {id: 4, nome: "Maria Luiza"}, {id: 5, nome:"José"}, {id: 6, nome: "João Pedro"}];

// Função para manipulação de elementos visuais e experiência de usuário

function criarEventos(){
    const criarEvento = document.querySelector("#adicionar-evento");
    
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
                    label.textContent = "Benefícios/Descontos:"
                    label.htmlFor = "beneficios";
                    
                    // Varredura do array de elementos que serão 
                    // apresentados nas opções
                    beneficiosDescontos.forEach(benDes => {
                        const option = document.createElement("option");
                        option.text = `0${benDes.id} - ${benDes.tipo}`;
                        option.value = benDes.id;
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
let idSelecionado = 0;

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
valoresRecebidos = [];
const exibir = document.querySelector(".modal");
const botaoSalvar = document.querySelector("#lancar-dados");

function receberDadosSelecionados(){
    const mesSelecionado = document.querySelector("#data-mes-ano");
    const mes = document.querySelector("#mes");
    const nomeFuncionario = document.querySelector("#nome-exibido");
    
    
    botaoSalvar.addEventListener("click", () => {
        const camposListados = document.querySelectorAll(".eventos-pagamentos>.grupo-campo-linha");
        nomeFuncionario.textContent = "";
        mes.textContent = "";

        nomeFuncionario.textContent = nome.value;
        mes.textContent = mesSelecionado.value;

        if(valoresRecebidos.length > 0){
            valoresRecebidos.splice(0);
        }

        camposListados.forEach(valoresCampos => {
            let input = valoresCampos.querySelector('.campo>#valor');
            let select = valoresCampos.querySelector('.campo>#beneficios');

            valoresRecebidos.push({id: select.value, valor: input.value})
        });

        // Apenas para debug
        // valoresRecebidos.forEach(valores =>{
        //     alert(`Nome: ${nome.value}; ID: ${idSelecionado};\nMês: ${mesSelecionado.value}\n\n ID Select:${valores.id} - ${valores.valor}`);
        // });

        exibir.style.display = "none";

        return;
    });

}


receberDadosSelecionados();
// function validarCampos(){

// };

function manipularDados(){
    botaoSalvar.addEventListener("click", () =>{
        
        valoresRecebidos.forEach(item =>{
            alert(`ID:${item.id} - R$${item.valor}`);
        })
    })
}

manipularDados();