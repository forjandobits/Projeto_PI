
// "Nome Vazio" X
// "Valor Vazio" X
// "Nome ñ Existente"
// "Opção de Evento Selecionada"
// "Folha Vazia"
// "Data vazia" X
// "Datas Muito Distantes" = Muito antes ou Muito depois da data atual
// "Sair sem Salvar" 

// até esse comentario ser apagado, por favor não leve nada que
// esta nesse arquivo coo referencia de nada,
// a não ser que esteja especificado como seguro para tal

// class = ".classe"
// id = "#id"
// tag = ""



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



function nomeExiste() {
    // se o nome digitado na aba "nome" não existir no bd, enviar uma menssagem de erro
    // ativação = input

}


function evenSelec() {
    // se o evento ja foi selecionado na folha em registro ele não pode mais ser selecionado
    // ativação = select

}


function folhaVazia() {
    // se tentarem salvar a folha enquanto não tem nada nela, enviar menssagem de erro
    // ativação = click

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

function datasDistantes() {
    // se a data que for introduzida for muito distante da data atual, enviar uma menssagem de confirmação
    // ativação = click

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
nomeExiste();
evenSelec();
folhaVazia();
dataVazia();
datasDistantes();
sairSalvar();
