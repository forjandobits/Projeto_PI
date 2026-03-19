<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>


    <!-- Conteúdo principal da página -->
    <main>
        <article class="cabecalhos">
            <h1>Pagamentos</h1>
      
            <button id="novo-pagamento"><a href="folha_de_pagamento.php">Adicionar</a></button>
        </article>

        <article>
            
            <form method="GET">
                <section class="areas-form">

                    <div class="campo">
                        <label for="filtro">Buscar:</label>
                        <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Colaborador ou Cargo" required>
                    </div>

                </section>
            </form>
        
        </article>

        <article>
            <section>

                <table>
                    <caption>Histórico de Pagamentos</caption>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Referência (Mês/Ano)</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody id="tabela-folhas-lancadas">
                        <!-- Exemplo de sáida -->
                        <tr>
                            <td>Gustavo</td>
                            <td>Padeiro</td>
                            <td>12/2025</td>
                            <td><button class='abrir-modal'>Visualizar</button></td>
                            <td><button>Baixar</button></td>
                        </tr>
                        <tr>
                            <td>Júlia</td>
                            <td>Confeiteira</td>
                            <td>12/2025</td>
                            <td><button class='abrir-modal'>Visualizar</button></td>
                            <td><button>Baixar</button></td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </article>
        <article class="modal modal-cadastro">
            <section>
            <h3>Informações do Pagamento</h3>
            <p class="fechar">X</p>
            </section>
            
            <section>
            <form action="" class="form-modal">
                <table>
                    <caption>Folha de Pagamento - <span id="nome-exibido">Nome Funcionário</span> - <span id="mes">Mês/Ano</span></caption>

                    <?php include "./components/tabela_pagamento.php" ?>
                </table>
                
                <section class="resumo-final">
                    <p>Total Líquido (R$): 2000,00</p>
                    <button class="botao-editar">Editar</button>
                </section>
            </form>
            </section>
        </article>
    </main>

    <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
</body>
<script type="module" src="public/js/pagamentos/exibir_folhas_lancadas.js"></script>
</html>