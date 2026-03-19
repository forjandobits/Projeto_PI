<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Humanamente</title>
    <link rel="stylesheet" href="public/css/estilo.css" />
    <link rel="stylesheet" href="public/css/sidebar.css">
    <link rel="stylesheet" href="public/css/tabelas.css">
    <link rel="stylesheet" href="public/css/formularios.css">
    <link rel="stylesheet" href="public/css/correcoes.css">
    <link rel="stylesheet" href="public/css/modal.css">

    <link rel="shortcut icon" href="public/Cerebro.ico" type="image/x-icon" data-icon='cerebro' data-path='public/img/'/>
    <script src="public/js/sidebar.js"></script>
        <script>
            document.addEventListener("DOMContentLoaded", function () {

                const fonteSalva = localStorage.getItem("fonte");
                const temaSalvo = localStorage.getItem("tema");

                if (fonteSalva) {
                    document.body.classList.add("fonte-" + fonteSalva);
                }

                if (temaSalvo) {
                    document.body.classList.add("tema-" + temaSalvo);
                }

                window.trocarIconesGlobal = function(tema) {
                    const icones = document.querySelectorAll("[data-icon]");

                    icones.forEach(icone => {
                        const nome = icone.dataset.icon;
                        const path = icone.dataset.path;

                        if (!nome || !path) return;

                        if (tema === "contraste" || tema === "escuro") {
                            icone.src = `${path}${nome}-contraste.png`;
                        } else {
                            icone.src = `${path}${nome}-claro.png`;
                        }
                    });
                };

                //aplica ícones assim que o DOM estiver pronto
                if (temaSalvo && window.trocarIconesGlobal) {
                    window.trocarIconesGlobal(temaSalvo);
                };
            });
            </script>

</head>
<body>
    <header>
        <img class='logo logo-hm-cerebro' src='public/img/logo-hm-cerebro-claro.png' alt='logo humanamente' data-icon='logo-hm-cerebro' data-path='public/img/'>
    </header>

<!-- Dessa forma é possível apenas com o "include" chamar todas as configurações passadas 
acima para todas as páginas em que esses elementos são encontrados. Permintindo portanto, 
um maior controle de todas as modificações em todas os locais -->