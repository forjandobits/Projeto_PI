document.addEventListener("DOMContentLoaded", function () { 

    const form = document.getElementById("form-login");
    const erro = document.getElementById("erro");

    if (!form || !erro) {
        console.error("Formulário ou div de erro não encontrados!");
        // console.log("Erro, pego na 1º validação ");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario");
        const senha   = document.getElementById("senha");

        if (!usuario || !senha) {
            console.error("Campos de usuário ou senha não encontrados!");
            // console.log("Erro, pego na 2º validação ");
            return;
        }

        if (usuario.value === "" || senha.value === "") {
            console.error("Campos de usuário ou senha não encontrados!");
            // console.log("Erro, pego na 3º validação ");
            return;
        }

        if (usuario.value === "" || senha.value === "") {
            erro.style.display = "block";
            erro.textContent = "Preencha todos os campos.";
            return;
        }

        // ==== Explicação mais detalhada porque ate eu fiquei meio peridod fazendo isso

        // Faz uma requisição HTTP para o endereço definido no atributo "action" do formulário
        fetch(form.action, {
            method: "POST", // Define o método da requisição como POST (os dados não vão na URL)
            body: new URLSearchParams({ 
                // Aqui estamos pegando os valores dos campos do formulário e transformando em formato de formulário
                // que o PHP consegue ler via $_POST
                usuario: usuario.value, 
                senha: senha.value
            }),
        })

        .then(response => response.text()) 
        // Converte a resposta do servidor para texto. No seu PHP, ele está retornando strings como "Login bem-sucedido!" ou "Usuário ou senha incorretos."
        .then(data => {
            // Aqui lidamos com a resposta que veio do servidor
            if (data.trim() === "success") { 
                // Se o servidor responder exatamente com "success" (sem espaços extras), redirecionamos o usuário
                window.location.href = "inicial.php"; 
                // console.log("Sucesso, indo pra tela inicial")
            } else { 
                // Se não, mostramos o erro na tela
                erro.style.display = "block"; // Mostra a div de erro
                erro.textContent = data;       // Coloca a mensagem retornada pelo servidor dentro da div
                // console.log("erro generico ou não especifico(tipo algo que a gente nao definiu nas validações anteriors)")
            }
        })
        .catch(error => { 
            // Captura qualquer erro na requisição (ex.: servidor offline, URL errada)
            erro.style.display = "block";     // Mostra a div de erro
            erro.textContent = "Erro no servidor."; // Mensagem padrão
            console.error(error);             // Mostra o erro detalhado no console do navegador
            // console.log("Erro, pego no cath final");
        });

    });
});
