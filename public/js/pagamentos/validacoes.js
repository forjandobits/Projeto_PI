
// "Nome Vazio" X
// "Valor Vazio" X
// "Opção de Evento Selecionada" --
// "Data vazia" X
// "Sair sem Salvar"  --

// até esse comentario ser apagado, por favor não leve nada que
// esta nesse arquivo coo referencia de nada,
// a não ser que esteja especificado como seguro para tal

// class = ".classe"
// id = "#id"
// tag = ""

function bloqueiaBotao(){

}


function nomeVazio() {
    const nome = document.querySelector("#nome");

    nome.addEventListener("keyup", () => {

        if (nome.value == "") {
            const texto = "Você não pode deixar o nome vazio!!";
            mostrarMensagem(texto);
            return;
        }
        else {
            const texto = " ";
            mostrarMensagem(texto);
            return;
        }
    })
};

export function eventoSelecionado(grupoCampoLinha){
    // se o evento ja foi selecionado na folha em registro ele não pode mais ser selecionado
    // errado, a arrumar
    let texto = "";
    let i = 0

    grupoCampoLinha.foreach((i, beneficios) => {

        let beneficio = beneficios(select)[even].value;
        if(beneficio[even] == beneficio[even -1]){
            texto = "não pode ter 2 eventos iguais!!"
            mostrarMensagem(texto);
        }
        else{
            mostrarMensagem(texto);
        }
    });
    
}



function dataVazia() {
    // se a data estiver vazia, enviar uma menssagem de erro
    // ativação = input

    const data = document.querySelector("#data-mes-ano");

    data.addEventListener("keyup", () => {

        if (data.value == "") {
            const texto = "Você não pode deixar a data vazia!!";
            mostrarMensagem(texto);
            return;
        }
        else {
            const texto = " ";
            mostrarMensagem(texto);
            return;
        }
    })

}


function sairSalvar() {
    // se o botão de sair o pop-up for clicado, enviar uma menssagem de confirmação
    // ativação = click
    const salvar = document.querySelector("#enviar-dados")

    salvar.addEventListener("click", () => {
        alert("deseja salvar?");
    })

}


export function mostrarMensagem(texto) {
    const resultado = document.querySelector("#resultado")
    resultado.textContent = texto;
    resultado.style.color = "red";
    return;
}

nomeVazio();
dataVazia();
sairSalvar();
bloqueiaBotao();