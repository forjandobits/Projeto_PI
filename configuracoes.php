<?php include "./components/header.php"; ?>
<?php include "./components/sidebar.php"; ?>

<main>
    <article class="cabecalhos">
        <h1>Configurações</h1>
    </article>

    <article>
        <!-- FORM DE ALTERAR SENHA -->
        <form id="form-senha" method="POST" action="public\js\login-e-Configuracao\configuracao.php">

            <section class="areas-form">
                <h2>Alterar Senha:</h2>

                <div class="campo">
                    <label for="senha-atual">Senha Atual:</label>
                    <input type="password" name="senha_atual" id="senha-atual" required>
                </div>

                <div class="campo">
                    <label for="nova-senha">Nova Senha:</label>
                    <input type="password" name="nova_senha" id="nova-senha" required>
                </div>

                <div class="campo">
                    <label for="repita-senha">Repita Nova Senha:</label>
                    <input type="password" name="repita_senha" id="repita-senha" required>
                </div>

                <div class="campo">
                    <button type="submit">Salvar Senha</button>
                </div>

                <!-- Div para exibir mensagens de erro/sucesso -->
                <div id="mensagem-senha" style="color:red; margin-top:10px;"></div>
            </section>
        </form>

        <!-- FORM DE TEMA / FONTES -->
        <form id="form-tema" action="">
            <section class="areas-form">
                <h2>Alterar Estilo da Página:</h2>
                <div class="grupo-campo">
                    <div class="campo resumo">
                        <label for="tema-claro">Tema Claro:</label>
                        <input type="radio" name="tema" value="claro" id="tema-claro">
                    </div>
                    <img src="public/img/temas/Tela_Padrao_Configurações.png" alt="Tela com tema claro">
                </div>

                <div class="grupo-campo">
                    <div class="campo resumo">
                        <label for="tema-escuro">Tema Escuro:</label>
                        <input type="radio" name="tema" value="escuro" id="tema-escuro">
                    </div>
                    <img src="public/img/temas/Tela_Escura_Configurações.png" alt="Tela com tema escuro">
                </div>

                <div class="grupo-campo">
                    <div class="campo resumo">
                        <label for="tema-contraste">Alto Contraste:</label>
                        <input type="radio" name="tema" value="contraste" id="tema-contraste">
                    </div>
                    <img src="public/img/temas/Tela_Contraste_Configurações.png" alt="Tela com alto contraste">
                </div>
            </section>

            <section class="areas-form">
                <div class="campo opcoes-tamanho">
                    <label>Tamanho da Fonte:</label>
                    <button type="button" id="fonte-menor">Diminuir</button>
                    <button type="button" id="fonte-media">Padrão</button>
                    <button type="button" id="fonte-maior">Aumentar</button>
                </div>
            </section>
        </form>

    </article>
</main>

<script src='public/js/login-e-Configuracao/configuracao.js'></script>
<script>
    const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>
</body>
</html>
