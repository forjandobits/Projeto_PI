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