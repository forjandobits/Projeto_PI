// Auto-preencher campos ao selecionar cargo
export function configurarSelectCargo() {
    const select = document.querySelector("#cargo");

    if (!select) return;

    select.addEventListener("change", function () {
        const selected = this.options[this.selectedIndex];

        document.querySelector("#cbo").value = selected.dataset.cbo || "";
        document.querySelector("#regime").value = selected.dataset.regime || "";
        document.querySelector("#salario").value = selected.dataset.remuneracao || "";
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