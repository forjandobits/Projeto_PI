<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Inicial</title>
    <link rel="stylesheet" href="public/css/estilo.css">
    <link rel="stylesheet" href="public/css/sidebar.css">
    <link rel="shortcut icon" href="public\img\Cerebro.ico" type="image/x-icon">
</head>

<body>
    <!-- Cabeçalho fixo da tela -->
    <header class="cabecalho-tela-inicial">
        <img src="public/img/Logo HM Cerebro.png" alt="" class="">
    </header>

    <!-- Conteúdo principal da página -->
    <main>
        <?php include "./sidebar.php" ?>

        <!-- Área de conteúdo principal (fora da sidebar) -->
        <article class="article-tela-inicial" role="list">

            <!-- Seção de Pendências -->
            <section>
                <h2>Pendências</h2>
                <div class="section-tela-inicial">
                    <!-- Cada pendência é representada como um "card" com imagem e legenda -->
                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>pendencia 1</a></figcaption>
                    </figure>

                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>pendencia 2</a></figcaption>
                    </figure>

                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>pendencia 3</a></figcaption>
                    </figure>

                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>pendencia 4</a></figcaption>
                    </figure>
                </div>
            </section>

            <br> <!-- Quebra de linha para separar seções -->

            <!-- Seção de Favoritos -->
            <section>
                <h2>Favoritos</h2>
                <div class="section-tela-inicial">
                    <!-- Estrutura igual às pendências, mas para os favoritos -->
                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>favorito 1</a></figcaption>
                    </figure>

                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>favorito 2</a></figcaption>
                    </figure>

                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>favorito 3</a></figcaption>
                    </figure>

                    <figure class="div-tela-inicial">
                        <img src="public/img/Cerebro.ico" alt="" class="imagem-tela-inicial">
                        <figcaption class="card-texto"><a>favorito 4</a></figcaption>
                    </figure>
                </div>
            </section>
        </article>
    </main>

    <!-- Importa o JavaScript que controla a sidebar -->
    <script src="public/js/sidebar.js"></script>
</body>

</html>