function carregarRelatorio(){
    const relatorio_pagamento = JSON.parse(localStorage.getItem("relatorio_pagamento")) || [];

    relatorio_pagamento.forEach(element => {
        // element.forEach(item => {
            
        // })
        const div = document.querySelector("div");

        const li = document.createElement("li");

        li.textContent = element;
        console.log(element);

        div.append(li);
    });
}

window.onload = carregarRelatorio();