document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;

    // ALTERAÇÃO DE SENHA

    const formSenha = document.getElementById("form-senha"); // ID único
    const msgSenha  = document.getElementById("mensagem-senha"); // Div para mensagens de erro/sucesso

    if (formSenha) {
        formSenha.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita reload da página

            // Captura valores
            const senhaAtual  = document.getElementById("senha-atual").value.trim();
            const novaSenha   = document.getElementById("nova-senha").value.trim();
            const repitaSenha = document.getElementById("repita-senha").value.trim();

            // Validação simples
            if (!senhaAtual || !novaSenha || !repitaSenha) {
                msgSenha.textContent = "Preencha todos os campos.";
                return;
            }

            // Envia dados para o PHP
            fetch(formSenha.action, {
                method: "POST",
                body: new URLSearchParams({
                    senha_atual: senhaAtual,
                    nova_senha: novaSenha,
                    repita_senha: repitaSenha
                })
            })
            .then(res => res.text())
            .then(data => {
                msgSenha.innerHTML = data; // Mostra retorno do PHP
            })
            .catch(err => {
                msgSenha.textContent = "Erro no servidor.";
                console.error(err);
            });
        });
    }

  
    const fonteMenor = document.getElementById("fonte-menor");
    const fonteMedia = document.getElementById("fonte-media");
    const fonteMaior = document.getElementById("fonte-maior");

    function aplicarFonte(tamanho) {
        body.classList.remove("fonte-menor", "fonte-media", "fonte-maior");
        body.classList.add("fonte-" + tamanho);
        localStorage.setItem("fonte", tamanho);
    }

    if (fonteMenor) fonteMenor.addEventListener("click", () => aplicarFonte("menor"));
    if (fonteMedia) fonteMedia.addEventListener("click", () => aplicarFonte("media"));
    if (fonteMaior) fonteMaior.addEventListener("click", () => aplicarFonte("maior"));


    document.querySelectorAll('input[name="tema"]').forEach(radio => {
        radio.addEventListener("change", function () {
            body.classList.remove("tema-claro", "tema-escuro", "tema-contraste");
            body.classList.add("tema-" + this.value);
            localStorage.setItem("tema", this.value);
        });
    });

});
