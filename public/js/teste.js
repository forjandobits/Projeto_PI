document.addEventListener("DOMContentLoaded", () => {
    const btnTeste = document.getElementById("btnTeste");

    btnTeste.addEventListener("click", async (e) => {
        e.preventDefault();

        const resposta = await enviar(`${BASE_URL}/api/teste.php`, { valor: "funcionario teste"});

        alert(resposta.mensagem);
    });

});

async function enviar(local, dados) {
    const resposta = await fetch(local, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    return await resultado;
}