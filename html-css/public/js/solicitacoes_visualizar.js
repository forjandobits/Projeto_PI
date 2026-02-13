document.addEventListener("DOMContentLoaded", () => {

    const motivo = document.querySelector("#motivo-recusar");
    const btnAceitar = document.querySelector(".aceitar");
    const btnNegar = document.querySelector(".negar");

    btnAceitar.addEventListener('click', function () {
        // Atualizar o status para Autorizado
        console.log("Solicitação autorizada!");
        alert("Solicitação Aceita!")
    })

    btnNegar.addEventListener('click', function(e) {
        // Atualizar o status para Autorizado
        // Se o campo motivo não foi preenchido deve retornar ao campo e depois negar

        if (motivo.value.trim() === "") {
            e.preventDefault(); // Aqui o envio do formulário e cancelado
            alert("Motivo da recusa deve ser preenchido!");
            motivo.focus(); // Coloca o cursor dentro do campo motivo
        } else {
            alert("Solicitação negada!");
        }
    })

    
})

