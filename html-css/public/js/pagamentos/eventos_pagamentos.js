beneficiosDescontos = ["Comissão", "Salário", "Imposto de Renda", "Vale Transporte", "Vale Alimentação"];
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
                
                // Contador para value e options
                let contador = 1;
                // Varredura do array de elementos que serão 
                // apresentados nas opções
                beneficiosDescontos.forEach(benDes => {
                    const option = document.createElement("option");
                    option.text = `0${contador} - ${benDes}`;
                    option.value = contador;
                    select.append(option);
                    label.append(select);
                    contador+=1;
                });
                
                select.id = "beneficios";
                select.name = "Beneficios"
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

// Encontra e remove os elementos que estão sendo apresentados na página
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

