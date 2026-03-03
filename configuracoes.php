<?php include "./components/header.php" ?>
<?php include "./components/sidebar.php" ?>
    
    <main>
        <article class="cabecalhos">
            <h1>Configurações</h1>
        </article>
        <article>
            <form>
                <section class="areas-form">
                    <h2>Alterar Senha:</h2>
                    <div class="campo">
                        <label for="senha-atual">Senha Atual:</label>
                        <input type="text" name="Senha-Atual" id="senha-atual">
                    </div>
                    <div class="campo">
                        <label for="nova-senha">Nova Senha:</label>
                        <input type="text" name="Nova-Senha" id="nova-senha">
                    </div>
                    <div class="campo">
                        <label for="repita-senha">Repita Nova Senha:</label>
                        <input type="text" name="Repita-Senha" id="repita-senha">
                    </div>
                    <div class="campo">
                        <button type="submit" id="btn-salvar-senha">Salvar Senha</button>
                    </div>
                </section>
            </form>

            <form action="" id="configuracoes">
                <section class="areas-form">
                    <h2>Alterar Estilo da Página:</h2>
                    <div class="grupo-campo">
                        <div class="campo resumo">
                            <label for="tema-claro">Tema Claro:</label>
                            <input type="radio" name="Tema" id="tema-claro">
                        </div>
                        <img src="public/img/temas/Tela_Padrao_Configurações.png" alt="Tela com tema claro">
                    </div>
                
                    <div class="grupo-campo">
                        <div class="campo resumo">
                            <label for="tema-escuro">Tema Escuro:</label>
                            <input type="radio" name="Tema" id="tema-escuro">
                        </div>
                        <img src="public/img/temas/Tela_Escura_Configurações.png" alt="Tela com tema escuro">
                    </div>
                    
                    <div class="grupo-campo">
                        <div class="campo resumo">
                            <label for="tema-contraste">Alto Contraste:</label>
                            <input type="radio" name="Tema" id="tema-contraste">
                        </div>
                        <img src="public/img/temas/Tela_Contraste_Configurações.png" alt="Tela com alto contraste">
                    </div>
                </section>
                <section class="areas-form">
        
                    <div class="campo opcoes-tamanho">
                        <label>Tamanho da Fonte:</label>
                        <button id="fonte-menor">Diminuir</button>
                        <button id="fonte-media">Padrão</button>
                        <button id="fonte-maior">Aumentar</button>
                    </div>
                </section>
            </form>

            
        </article>
    </main>

    <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
</body>
</html>
