<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>

    <main>
        <article class="cabecalhos">
            <h1>Controle de Ponto</h1>
            
        </article>

        <article>
            <form method="GET">
                <section class="areas-form">
                    <div class="campo">
                        <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Funcionário" required>
                    </div>

                    <div class="campo">
                        <button type="submit">Buscar</button>
                    </div>
                </section>
            </form>
        </article>

        <article>
            <section>
                <table id="">
                    <caption>Histórico de Pontos</caption>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Banco de Horas (HH:MM)</th>
                            <th>Situação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tabela-saida-ponto">                      
                    </tbody>
                </table>
                <script>const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";</script>
                <script type="module" src="./js/listar_funcionarios.js"></script> <!--atenção para o tipo module-->
            </section>                          
        </article>
    </main>

  <!--   <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script> -->
</body>