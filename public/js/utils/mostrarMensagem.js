export function mostrarMensagem(texto, tipo) {

    const blur = document.createElement("div");
    blur.classList.add("mensagem_blur");
    document.body.appendChild(blur);

    const mensagem = document.createElement("div");
    mensagem.classList.add("mensagem_popup", tipo);
    mensagem.innerHTML = "";
    mensagem.innerText = texto;
    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.classList.add("sumir_animacao");
        blur.style.transition = "opacity 0.5s ease";
        blur.style.opacity = "0";
    }, 3000);

    setTimeout(() => {
        mensagem.remove();
        blur.remove();
    }, 3000);

}
