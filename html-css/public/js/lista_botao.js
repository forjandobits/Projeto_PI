// async function carregarTabela(tabelaSaida, opcaoLeitura, json = 0) {
//     tabelaSaida.innerHTML = "";
//     let resposta = "";
//     if (json != 0) {
//         resposta = await fetch("./api/ler.php", {
//             method: "POST",
//             body: JSON.stringify(json)
//         });
//     } else {
//         resposta = await fetch("./api/ler.php", {
//             method: "POST",
//             body: JSON.stringify({
//                 opcao: `${opcaoLeitura}`
//             })
//         });
//     }

//     const listaAlugueis = await resposta.json();

//     listaAlugueis.forEach(item => {
//         const tr = document.createElement("tr");

//         tr.innerHTML = `
//             <td>${item.nome_cliente}</td>
//             <td>${item.nome_livro}</td>
//             <td>${item.data_devolucao}</td>
//             <td></td>`;

//         const botaoEditar = document.createElement("button");
//         botaoEditar.textContent = "Editar";
//         botaoEditar.onclick = () => {
//             window.name = JSON.stringify(item.id_cliente);
//             window.location.href = "editar.php";
//         }

//         // adiciona o botão à última célula
//         tr.children[3].appendChild(botaoEditar);

//         tabelaSaida.appendChild(tr);
//     });
// }