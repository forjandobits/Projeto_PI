<?php include "./header.php" ?>
<?php include "./sidebar.php" ?>
    
    <main>
        <article class="article-configuracoes">
            <h2>Configurações</h2>

            <form action="" id="form-configuracoes">
                <article>
                    <section class="section-tema-configuracoes">
                        <div>
                            <input type="radio" name="tema" id="tema-claro">
                            <label for="tema-claro">
                                <h4>Tema Claro:</h4>
                            </label>
                        </div>
                        <div>
                            <img src="public/img/Tela Original Configurações.png" alt="exemplo tema claro">
                        </div>
                    </section>
                    <section class="section-tema-configuracoes">
                        <div>
                            <input type="radio" name="tema" id="tema-escuro">
                            <label for="tema-escuro">
                                <h4>Tema Escuro:</h4>
                            </label>
                        </div>
                        <div>
                            <img src="public/img/Tela Preta Configurações.png" alt="exemplo tema escuro">
                        </div>
                    </section>
                </article>
                <article>
                    <section class="section-tema-configuracoes">
                        <div>
                            <input type="radio" name="tema" id="tema-contraste">
                            <label for="tema-contraste">
                                <h4>Alto Contraste:</h4>
                            </label>
                        </div>
                        <div>
                            <img src="public/img/Tela Contraste Configurações.png" alt="exemplo de alto contraste">
                        </div>
                    </section>
                    <section class="section-fontes-configuracoes">
                        <h4>Tamanho da Fonte:</h4>
                        <div>
                            <button id="fonte-menor">Aa</button>
                            <button id="fonte-media">Aa</button>
                            <button id="fonte-maior">Aa</button>
                        </div>
                    </section>
                </article>
                <article>
                    <section class="section-alterar-senha-configuracoes">
                        <h4>Alterar Senha:</h4>
                        <div>
                            <div class="alterar-senha-campo-configuracoes">
                                <label for="senha-atual">Senha Atual:</label>
                                <input type="text" id="senha-atual" name="senha-atual">
                            </div>
                            <div class="alterar-senha-campo-configuracoes">
                                <label for="nova-senha">Nova Senha:</label>
                                <input type="text" id="nova-senha" name="nova-senha">
                            </div>
                            <div class="alterar-senha-campo-configuracoes">
                                <label for="repita-senha">Repita Nova Senha:</label>
                                <input type="text" id="repita-senha" name="repita-senha">
                            </div>

                        </div>
                        <button type="submit" id="btn-salvar-senha">Salvar Senha</button>
                    </section>
                </article>
            </form>
        </article>
    </main>
</body>

</html>