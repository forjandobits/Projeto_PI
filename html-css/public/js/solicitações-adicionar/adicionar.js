document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#concluir").addEventListener("click",function(){
        
        const form = document.querySelector("#solicitacao");
        const tbody = document.querySelector("#tabelaSolicitacao");
        
        // ==== Tabela ====
        function renderizarTabela(){
            // Limpa tabela
            tbody.innerHTML = "";
            
            const dados = db.listar();
            
            dados.forEach(solicitacao => {
                const linha = document.createElement("tr");
                
                linha.innerHTML =`
                <td>${solicitacao.opcoes}</td>
                <td>${solicitacao.nome}</td>
                <td>${solicitacao.dataFormatada}</td>
                <td>${solicitacao.status}</td>
                <td><button class='abrir-modal'>Visualizar</button></td>
                `;
                
                tbody .appendChild(linha);
            });
        }
        
        // ==== Pega dados do formulario ====
        form.addEventListener("submit", function() {
            const status = "pendente";
            
            const hoje = new Date();
            const dataFormatada = hoje.toLocaleDateString("pt-BR");
            console.log(dataFormatada);
            
            const nome = form.elements["nome"].value;
            const opcoes = form.elements["opcoes"].value;
            const observacoes = form.elements["observacoes"].value;
            console.log(nome,opcoes,observacoes);

            form.submit({nome,opcoes,observacoes,dataFormatada,status});
            renderizarTabela();
            form.reset();
        });
        renderizarTabela();
    })
});
//     // ==== Banco local ====
//     class BancoDeDados{
//         constructor(chave){
//             this.chave = chave;
//             this.dados = JSON.parse(localStorage.getItem(this.chave)) || [];
//         }
        
//         salvar() {
//             localStorage.setItem(this.chave, JSON.stringify(this.dados));
//         }
        
//         inserir(registro){
//             registro.id = Date.now();
//             this.dados.push(registro);
//             this.salvar();
//         }
        
//         listar(){
//             return this.dados;
//         }
//     }
    
    
//     const db = new BancoDeDados("solicitacoes");
//     const form = document.querySelector("#solicitacao");
//     const tbody = document.querySelector("#tabelaSolicitacao");
    
//     // ==== Tabela ====
//     function renderizarTabela(){
//         // Limpa tabela
//         tbody.innerHTML = "";
        
//         const dados = db.listar();
        
//         dados.forEach(solicitacao => {
//             const linha = document.createElement("tr");
            
//             linha.innerHTML =`
//             <td>${solicitacao.opcoes}</td>
//             <td>${solicitacao.nome}</td>
//             <td>${solicitacao.dataFormatada}</td>
//             <td>${solicitacao.status}</td>
//             <td><button class='abrir-modal'>Visualizar</button></td>
//             `;
            
//             tbody .appendChild(linha);
//         });
//     }
    
//     // ==== Pega dados do formulario ====
//     form.addEventListener("submit", function() {
//         const status = "pendente";
        
//         const hoje = new Date();
//         const dataFormatada = hoje.toLocaleDateString("pt-BR");
//         console.log(dataFormatada);
        
//         const nome = form.elements["nome"].value;
//         const opcoes = form.elements["opcoes"].value;
//         const observacoes = form.elements["observacoes"].value;
//         console.log(nome,opcoes,observacoes);
        
//         db.inserir({nome,opcoes,observacoes,dataFormatada,status})
//         renderizarTabela();
//         form.reset();
//     });
//     renderizarTabela();
