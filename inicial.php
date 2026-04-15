<?php include "./components/header.php" ?>
<?php include "./components/sidebar.php" ?>

    

    <!-- Conteúdo principal da página -->
    <main>

        <!-- Área de conteúdo principal-->
        <article>

            <section>
                <h2>Atalhos</h2>
                <div class="section-tela-inicial">
                    <a href="./solicitacoes.php">
                        <figure>
                            <img src="public/img/solicitacoes.png" alt="Ícone de Solicitações" class="imagem-tela-inicial">
                            <figcaption class="card-texto"><p>Nova Solicitação</p></figcaption>
                        </figure>
                    </a>

                    <a href="./folha_de_pagamento.php">
                        <figure>
                            <img src="public/img/pagamento.png" alt="Ícone de Pagamentos" class="imagem-tela-inicial">
                            <figcaption class="card-texto"><p>Novo Pagamento</p></figcaption>
                        </figure>
                    </a>

                    <a href="./controle_de_ponto.php">
                        <figure>
                            <img src="public/img/ponto.png" alt="Ícone de Ponto" class="imagem-tela-inicial">
                            <figcaption class="card-texto"><p>Novo Ponto</p></figcaption>
                        </figure>
                    </a>

                    <a href="./cadastro_de_funcionario.php">
                        <figure>
                            <img src="public/img/funcionario.png" alt="Ícone de Funcionários" class="imagem-tela-inicial">
                            <figcaption class="card-texto"><p>Novo Funcionário</p></figcaption>
                        </figure>
                    </a>

                    <a href="./cargos.php">
                        <figure>
                            <img src="public/img/cargo.png" alt="Ícone de Cargo" class="imagem-tela-inicial">
                            <figcaption class="card-texto"><p>Novo Cargo</p></figcaption>
                        </figure>
                    </a>

                </div>
            </section>

        </article>

    </main>

    <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
</body>
</html>