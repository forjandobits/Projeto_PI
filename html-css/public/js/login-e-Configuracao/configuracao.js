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

    // BOTÕES DE TAMANHO DE FONTE

    const fonteMenor = document.getElementById("fonte-menor");
    const fonteMedia = document.getElementById("fonte-media");
    const fonteMaior = document.getElementById("fonte-maior");

    if (fonteMenor) fonteMenor.addEventListener("click", () => {
        body.style.fontSize = "14px";
        localStorage.setItem("fonte", "14px"); // Salva preferência
    });
    if (fonteMedia) fonteMedia.addEventListener("click", () => {
        body.style.fontSize = "24px";
        localStorage.setItem("fonte", "24px");
    });
    if (fonteMaior) fonteMaior.addEventListener("click", () => {
        body.style.fontSize = "40px";
        localStorage.setItem("fonte", "40px");
    });

    // Aplica a fonte salva no carregamento da página
    const fonteSalva = localStorage.getItem("fonte");
    if (fonteSalva) body.style.fontSize = fonteSalva;
});
