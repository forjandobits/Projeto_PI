import { mostrarMensagem } from "../utils/mostrarMensagem.js";

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
            texto = "Não é possível adicionar 2 (dois) eventos selecionados iguais!";
            mostrarMensagem(texto, "erro");
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

            if (val === "") {
                texto = "Não é possível deixar nenhum valor vazio!";
                mostrarMensagem(texto, "erro");
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
        texto = "Não é possível deixar a data vazia! Selecione uma data.";
        mostrarMensagem(texto, "erro");
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
        texto = "Não é possível deixar o nome vazio! Selecione um colaborador.";
        mostrarMensagem(texto, "erro");
        vazio = true;
    }

    return vazio;
};


// export function mostrarMensagem(texto) {
//     const resultado = document.querySelector("#resultado")
//     resultado.textContent = texto;
//     resultado.style.color = "red";
//     return;
// }