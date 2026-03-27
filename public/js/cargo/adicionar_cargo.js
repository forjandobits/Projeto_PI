export async function adicionarCargo(dados) {
    const resposta = await fetch(`${BASE_URL}/api/cargo/criar_cargo.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    return await resposta.json();
}

// export async function enviarCargo() {

//     const cbo = document.getElementById("cbo").value;
//     const nomeCargo = document.getElementById("nome-cargo").value;
//     const salario = document.getElementById("salario").value;
//     const cargaHoraria = document.getElementById("carga-horaria").value;
//     const regime = document.getElementById("regime").value;

//     const dados = {
//         cbo: cbo,
//         nomeCargo: nomeCargo,
//         salario: salario,
//         cargaHoraria: cargaHoraria,
//         regime: regime
//     };

//     const resposta = await fetch(`${BASE_URL}/api/cargo/criar_cargo.php`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(dados)
//     });

//     const resultado = await resposta.json();

//     console.log("Resposta da API:", resultado);
// }


// document.addEventListener("DOMContentLoaded", () => {

//     const btnSalvar = document.getElementById("btnsalvar");

//     btnSalvar.addEventListener("click", (e) => {
//         e.preventDefault();
//         enviarCargo();
//     });

// });