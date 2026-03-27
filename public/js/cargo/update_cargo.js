// Auto-preencher campos ao selecionar cargo
export function configurarSelectCargo() {
    const select = document.getElementById("cargo");

    if (!select) return;

    select.addEventListener("change", function () {
        const selected = this.options[this.selectedIndex];

        document.getElementById("cbo").value = selected.dataset.cbo || "";
        document.getElementById("regime").value = selected.dataset.regime || "";
        document.getElementById("salario").value = selected.dataset.remuneracao || "";
    });
}


// Função para atualizar no backend
export async function atualizarCargo(idCargo, dados) {

    const resposta = await fetch(`${BASE_URL}/api/cargo/update_cargo.php`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id_cargo: idCargo,
            ...dados
        })
    });

    return await resposta.json();
}