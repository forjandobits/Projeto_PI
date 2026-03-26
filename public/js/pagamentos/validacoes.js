// "Nome Vazio" X
// "Valor Vazio" X
// "Opção de Evento Selecionada" X
// "Data vazia" X

// class = ".classe"
// id = "#id"
// tag = ""


export function eventoSelecionado(valores) {
    // se o evento ja foi selecionado na folha em registro ele não pode mais ser selecionado
    // fazer contagem que acompanha o foreach pra pegar o valor anterior com valores[i-1]

    let texto = "";
    const contagem = {};
    let duplicado = false;

    valores.forEach(valor => {
        valor.infoBenDes.forEach(idVerificado => {
            const id = idVerificado.idBenDes;
            contagem[id] = (contagem[id] || 0) + 1;
        })

        const duplicados = Object.keys(contagem).filter(id => contagem[id] > 1);

        if (duplicados.length > 0) {
            texto = "não pode ter 2 eventos iguais!!";
            mostrarMensagem(texto);
            duplicado = true;
        }
    });

    return duplicado;
}

export function valorVazio(valores) {
    // se o valir estiver vazio, enviar uma menssagem de erro
    // ativação = click

    let texto = "";
    let vazio = false;

    valores.forEach(elemento => {
        elemento.infoBenDes.forEach(valorCada => {
            const val = valorCada.valor;

            if (val == "") {
                texto = "Você não pode deixar o valor vazio!!";
                mostrarMensagem(texto);
                vazio = true;
            }
        })
    });

    return vazio;
}


export function dataVazia(data) {
    // se a data estiver vazia, enviar uma menssagem de erro
    // ativação = click

    let texto = "";
    let vazio = false;
    const dataR = data;

    if (dataR == "") {
        texto = "Você não pode deixar a data vazia!!";
        mostrarMensagem(texto);
        vazio = true;
    }

    return vazio;

}


export function nomeVazio(valores) {
    // se o nome estiver vazio, enviar uma menssagem de erro
    // ativação = click

    let texto = "";
    let vazio = false;
    const nome = valores;

    if (nome == "") {
        texto = "Você não pode deixar o nome vazio!!";
        mostrarMensagem(texto);
        vazio = true;
    }

    return vazio;
};


export function mostrarMensagem(texto) {
    const resultado = document.querySelector("#resultado")
    resultado.textContent = texto;
    resultado.style.color = "red";
    return;
}