document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado. Pronto para executar.");
  
    const form = document.querySelector("#solicitacao");
    const tbody = document.querySelector("#tabelaSoc");
    const status = "pendente";

    form.addEventListener("submit", function() {
        const hoje = new Date();
        const nome = form.elements["nome"].value;
        const opcoes = form.elements["opcoes"].value;
        const observacoes = form.elements["observacoes"].value;

        const dataFormatada = hoje.toLocaleDateString("pt-BR");

        console.log(dataFormatada);
        console.log(nome,opcoes,observacoes);
        adicionarLinha(opcoes,nome,dataFormatada,status);
    });
    
    function adicionarLinha(opcoes,nome,dataFormatada,status){
        const tr = document.createElement("tr");
        
        const tdOpcoe = document.createElement("td");
        tdOpcoe.textContent = opcoes;
        
        const tdNome = document.createElement("td");
        tdNome.textContent = nome;
        
        const tdData = document.createElement("td");
        tdData.textContent = dataFormatada;
        
        const tdStatus = document.createElement("td");
        tdStatus.textContent = status;
        
        tr.appendChild(tdOpcoe);
        tr.appendChild(tdNome);
        tr.appendChild(tdData);
        tr.appendChild(tdStatus);
        
        tbody.appendChild(tr);
    };
});