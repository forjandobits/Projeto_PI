document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const formSenha = document.getElementById("form-senha");
    const msgSenha  = document.getElementById("mensagem-senha");
    const inputNovaSenha = document.getElementById("nova-senha");

    function validarSenha(senhaAtual, novaSenha, repitaSenha) {

        if (!senhaAtual || !novaSenha || !repitaSenha)
            return "Preencha todos os campos.";

        if (novaSenha.length < 8)
            return "A senha deve ter no mínimo 8 caracteres.";

        if (senhaAtual === novaSenha)
            return "A nova senha deve ser diferente da atual.";

        if (novaSenha !== repitaSenha)
            return "As senhas não coincidem.";

        if (!/[A-Z]/.test(novaSenha))
            return "Inclua pelo menos uma letra maiúscula.";

        if (!/[a-z]/.test(novaSenha))
            return "Inclua pelo menos uma letra minúscula.";

        if (!/[0-9]/.test(novaSenha))
            return "Inclua pelo menos um número.";

        if (!/[!@#$%^&*]/.test(novaSenha))
            return "Inclua pelo menos um caractere especial.";

        return null;
    }

    function calcularForcaSenha(senha) {
        let pontos = 0;

        if (senha.length >= 8) pontos++;
        if (/[A-Z]/.test(senha)) pontos++;
        if (/[a-z]/.test(senha)) pontos++;
        if (/[0-9]/.test(senha)) pontos++;
        if (/[!@#$%^&*]/.test(senha)) pontos++;

        return pontos;
    }

    const inputRepitaSenha = document.getElementById("repita-senha");
    const msgRepitaSenha = document.getElementById("msg-repita-senha");

    if (inputRepitaSenha) {
        inputRepitaSenha.addEventListener("input", () => {

            if (inputRepitaSenha.value === "") {
                msgRepitaSenha.style.display = "none";
                return;
            }

            if (inputRepitaSenha.value !== inputNovaSenha.value) {
                msgRepitaSenha.textContent = "As senhas não coincidem.";
                msgRepitaSenha.className = "mensagem-campo msg-erro";
            } else {
                msgRepitaSenha.textContent = "Senhas coincidem ✔";
                msgRepitaSenha.className = "mensagem-campo msg-sucesso";
            }
        });
    }

<<<<<<< HEAD
    const forcaSenhaMsg = document.getElementById("forca-senha");

    function atualizarBarraForca(senha) {

        const forca = calcularForcaSenha(senha);

        inputNovaSenha.classList.remove("fraca", "media", "forte");
        forcaSenhaMsg.classList.remove("fraca-msg", "media-msg", "forte-msg");

        if (senha.length === 0) {
            forcaSenhaMsg.textContent = "";
            return;
        }

        if (forca <= 2) {
            inputNovaSenha.classList.add("fraca");
            forcaSenhaMsg.textContent = "Senha fraca";
            forcaSenhaMsg.classList.add("fraca-msg");
        } 
        else if (forca <= 4) {
            inputNovaSenha.classList.add("media");
            forcaSenhaMsg.textContent = "Senha média";
            forcaSenhaMsg.classList.add("media-msg");
        } 
        else {
            inputNovaSenha.classList.add("forte");
            forcaSenhaMsg.textContent = "Senha forte";
            forcaSenhaMsg.classList.add("forte-msg");
        }
    }

    if (inputNovaSenha) {
        inputNovaSenha.addEventListener("input", (e) => {
            atualizarBarraForca(e.target.value);
        });
    }

    if (formSenha) {
        formSenha.addEventListener("submit", async (e) => {
            e.preventDefault();

            const senhaAtual  = document.getElementById("senha-atual").value.trim();
            const novaSenha   = inputNovaSenha.value.trim();
            const repitaSenha = document.getElementById("repita-senha").value.trim();

            const erro = validarSenha(senhaAtual, novaSenha, repitaSenha);

            if (erro) {
                mostrarMensagem(erro, "erro");
                return;
            }

            mostrarMensagem("Enviando...", "info");

            try {
                const response = await fetch(formSenha.action, {
                    method: "POST",
                    body: new URLSearchParams({
                        senha_atual: senhaAtual,
                        nova_senha: novaSenha,
                        repita_senha: repitaSenha
                    })
                });

                const data = await response.text();
                if (data.includes("Senha atual incorreta")) {

                    const msgSenhaAtual = document.getElementById("msg-senha-atual");
                    msgSenhaAtual.textContent = "Senha atual incorreta.";
                    msgSenhaAtual.className = "mensagem-campo msg-erro";

                } else {

                    msgSenha.className = "mensagem-campo msg-sucesso";
                    msgSenha.textContent = data;
                }

            } catch (err) {
                mostrarMensagem("Erro no servidor.", "erro");
                console.error(err);
            }
        });
    }

    function mostrarMensagem(texto, tipo) {
        msgSenha.textContent = texto;
        msgSenha.className = ""; 
        msgSenha.classList.add(tipo);
    }

    const fontesPermitidas = ["menor", "media", "maior"];

    function aplicarFonte(tamanho) {
        if (!fontesPermitidas.includes(tamanho)) return;

=======
  
    const fonteMenor = document.getElementById("fonte-menor");
    const fonteMedia = document.getElementById("fonte-media");
    const fonteMaior = document.getElementById("fonte-maior");

    function aplicarFonte(tamanho) {
>>>>>>> 3ed787a (FEAT: Implementação da troca de temas e troca de tamanho da fonte)
        body.classList.remove("fonte-menor", "fonte-media", "fonte-maior");
        body.classList.add("fonte-" + tamanho);
        localStorage.setItem("fonte", tamanho);
    }

<<<<<<< HEAD
    document.getElementById("fonte-menor")?.addEventListener("click", () => aplicarFonte("menor"));
    document.getElementById("fonte-media")?.addEventListener("click", () => aplicarFonte("media"));
    document.getElementById("fonte-maior")?.addEventListener("click", () => aplicarFonte("maior"));


    const temasPermitidos = ["claro", "escuro", "contraste"];

    document.querySelectorAll('input[name="tema"]').forEach(radio => {
        radio.addEventListener("change", function () {

            if (!temasPermitidos.includes(this.value)) return;

=======
    if (fonteMenor) fonteMenor.addEventListener("click", () => aplicarFonte("menor"));
    if (fonteMedia) fonteMedia.addEventListener("click", () => aplicarFonte("media"));
    if (fonteMaior) fonteMaior.addEventListener("click", () => aplicarFonte("maior"));


    const temasPermitidos = ["claro", "escuro", "contraste"];

    document.querySelectorAll('input[name="tema"]').forEach(radio => {
        radio.addEventListener("change", function () {
>>>>>>> 3ed787a (FEAT: Implementação da troca de temas e troca de tamanho da fonte)
            body.classList.remove("tema-claro", "tema-escuro", "tema-contraste");
            body.classList.add("tema-" + this.value);
            localStorage.setItem("tema", this.value);
        });
    });

<<<<<<< HEAD
});
=======
});
>>>>>>> 3ed787a (FEAT: Implementação da troca de temas e troca de tamanho da fonte)
